import { useEffect } from 'react'
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  useReactCompareSliderRef
} from 'react-compare-slider'

import { DragHandle } from './DragHandle'
import { getRandomValueFromRange } from '@helpers/getRandomValueFromRange'
import styles from './CompareSlider.module.css'

function getRandomPosition(index: number): number {
  /*
   * Make the default position values for "handle" random for a more interesting UI.
   */
  const isEven = index % 2 === 0
  const range: [number, number] = isEven ? [40, 60] : [30, 50]

  return Math.floor(getRandomValueFromRange(...range))
}

export function CompareSlider({ index, beforeSrc, afterSrc }: Props) {
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

  return (
    <ReactCompareSlider
      ref={sliderRef}
      boundsPadding={20}
      position={getRandomPosition(index)}
      handle={<DragHandle />}
      itemOne={<ReactCompareSliderImage src={beforeSrc} />}
      itemTwo={<ReactCompareSliderImage src={afterSrc} />}
      className={styles.root}
    />
  )
}

interface Props {
  index: number
  beforeSrc: string
  afterSrc: string
}
