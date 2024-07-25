import { useEffect, useState } from 'react'
import { Flex, Text } from '@radix-ui/themes'
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  useReactCompareSliderRef
} from 'react-compare-slider'
import { clsx } from 'clsx'

import { DragHandle } from './DragHandle'
import { getRandomNumber } from '@helpers/getRandomNumber'
import styles from './CompareSlider.module.css'

interface Props {
  index: number
  label: string
  beforeSrc: string
  afterSrc: string
  orientation?: 'landscape' | 'portrait'
}

const totalImages = 2

const getRandomPosition = (index: number): number => {
  /*
   * Make the default position values for "handle" random for a more interesting UI.
   */
  const isEven = index % 2 === 0
  const range: [number, number] = isEven ? [40, 60] : [30, 50]

  return Math.floor(getRandomNumber(...range))
}

const getImageFallback = ({ orientation }: Pick<Props, 'orientation'>): string => {
  const landscapeFallback = '/slide-landscape-fallback.jpeg'
  const portraitFallback = '/slide-portrait-fallback.jpeg'

  if (!orientation || orientation === 'landscape') {
    return landscapeFallback
  }

  return portraitFallback
}

export const CompareSlider = ({ index, label, beforeSrc, afterSrc, orientation }: Props) => {
  /*
   * Prevent scrolling to element when clicking on the handle container.
   * https://github.com/nerdyman/react-compare-slider/blob/main/lib/src/ReactCompareSlider.tsx#L192-L195
   * https://github.com/nerdyman/react-compare-slider/issues/128
   */
  const sliderRef = useReactCompareSliderRef()
  useEffect(() => {
    const rootContainer = sliderRef.current.rootContainer
    if (!rootContainer) return

    const handleContainer = rootContainer.querySelector(
      '[data-rcs="handle-container"]'
    ) as HTMLButtonElement | null
    if (!handleContainer) return

    const handleContainerClick = (ev: MouseEvent) => {
      ev.preventDefault()
      ev.stopImmediatePropagation()
      handleContainer.focus({
        preventScroll: true
      })
    }

    handleContainer.addEventListener('click', handleContainerClick, {
      capture: true
    })

    return () => {
      handleContainer.removeEventListener('click', handleContainerClick, {
        capture: true
      })
    }
  }, [sliderRef])

  const isPortrait = orientation === 'portrait'

  const [errors, setErrors] = useState<Array<'before' | 'after'>>([])
  const [loaded, setLoaded] = useState(0)
  const imagesStyle = {
    opacity: loaded === totalImages ? 1 : 0
  }

  const handleLoadImage = () => setLoaded(prevState => prevState + 1)
  const setBeforeImageError = () => setErrors(prevState => [...prevState, 'before'])
  const setAfterImageError = () => setErrors(prevState => [...prevState, 'after'])

  if (errors.length === totalImages) {
    return (
      <Flex align='center' justify='center' px='2' py='9' width='100%' height='100%'>
        <Text as='p' size='4' weight='medium'>
          Failed to load the images
        </Text>
      </Flex>
    )
  }

  return (
    <ReactCompareSlider
      ref={sliderRef}
      boundsPadding={20}
      position={getRandomPosition(index)}
      handle={loaded === totalImages ? <DragHandle isPortrait={isPortrait} /> : null}
      itemOne={
        <ReactCompareSliderImage
          style={imagesStyle}
          src={errors.includes('before') ? getImageFallback({ orientation }) : beforeSrc}
          alt={`${label} before`}
          onLoad={handleLoadImage}
          onError={setBeforeImageError}
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          style={imagesStyle}
          src={errors.includes('after') ? getImageFallback({ orientation }) : afterSrc}
          alt={`${label} after`}
          onLoad={handleLoadImage}
          onError={setAfterImageError}
        />
      }
      portrait={isPortrait}
      className={clsx(styles.root, isPortrait ? styles.portrait : styles.landscape)}
    />
  )
}
