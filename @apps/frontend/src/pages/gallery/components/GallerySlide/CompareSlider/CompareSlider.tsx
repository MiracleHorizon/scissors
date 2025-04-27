import { useEffect, useState } from 'react'
import { Flex, Text } from '@radix-ui/themes'
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  useReactCompareSliderRef
} from 'react-compare-slider'
import { clsx } from 'clsx'

import { DragHandle } from './DragHandle'
import styles from './CompareSlider.module.css'

type Orientation = 'landscape' | 'portrait'

interface Props {
  label: string
  beforeSrc: string
  afterSrc: string
  orientation?: Orientation
}

const totalImages = 2

const getImageFallback = (orientation?: Orientation): string => {
  const landscapeFallback = '/slide-landscape-fallback.jpeg'
  const portraitFallback = '/slide-portrait-fallback.jpeg'

  if (!orientation || orientation === 'landscape') {
    return landscapeFallback
  }

  return portraitFallback
}

export const CompareSlider = ({ label, beforeSrc, afterSrc, orientation }: Props) => {
  const sliderRef = useReactCompareSliderRef()
  const imageFallback = getImageFallback(orientation)

  /*
   * TODO: Issue is resolved. Refactor
   * Prevent scrolling to element when clicking on the handle container.
   * https://github.com/nerdyman/react-compare-slider/blob/main/lib/src/ReactCompareSlider.tsx#L192-L195
   * https://github.com/nerdyman/react-compare-slider/issues/128
   */
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
    <>
      {loaded < totalImages && errors.length === 0 && <div className={styles.loading} />}

      <ReactCompareSlider
        ref={sliderRef}
        boundsPadding={20}
        position={35}
        handle={<DragHandle isPortrait={isPortrait} />}
        itemOne={
          <ReactCompareSliderImage
            style={imagesStyle}
            src={errors.includes('before') ? imageFallback : beforeSrc}
            alt={`${label} before`}
            onLoad={handleLoadImage}
            onError={setBeforeImageError}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            style={imagesStyle}
            src={errors.includes('after') ? imageFallback : afterSrc}
            alt={`${label} after`}
            onLoad={handleLoadImage}
            onError={setAfterImageError}
          />
        }
        portrait={isPortrait}
        className={clsx(styles.root, isPortrait ? styles.portrait : styles.landscape)}
      />
    </>
  )
}
