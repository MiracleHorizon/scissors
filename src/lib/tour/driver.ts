import { clsx } from 'clsx/lite'

import { completeTour } from './actions'
import { MIN_STEP_TO_SKIP, TOUR_STEP } from './constants'
import type { PopoverDOM } from './types'

export async function createTour() {
  const { driver } = await import('driver.js')
  const { geistSans } = await import('@app/fonts')
  const { isPrefersReduceMotion } = await import('@helpers/isPrefersReduceMotion')

  const steps = [
    {
      element: `[data-tourstep='${TOUR_STEP.FILE_UPLOAD}']`,
      popover: {
        title: 'File upload zone',
        description:
          'Here you can upload an image from your computer. You can also use Drag-n-Drop to upload it.'
      }
    },
    {
      element: `[data-tourstep='${TOUR_STEP.TOOLBAR_TAB_LIST}']`,
      popover: {
        title: 'Processing tabs',
        description: 'You can choose between options tabs to process the image.'
      }
    },
    {
      element: `[data-tourstep='${TOUR_STEP.TOOLBAR_ACTIONS}']`,
      popover: {
        title: 'Toolbar actions',
        description:
          'You can export and import settings, configure their randomization, and reset and delete them.'
      }
    },
    {
      element: `[data-tourstep='${TOUR_STEP.SETTINGS_PANEL}']`,
      popover: {
        title: 'Settings panel',
        description:
          'Here you can select a large number of different options for processing and formatting your uploaded images.'
      }
    },
    {
      element: `[data-tourstep='${TOUR_STEP.REQUEST_BUTTON}']`,
      popover: {
        title: 'Request button',
        description:
          'Once you have completed the image processing configuration settings, you can click on this button to apply them.'
      }
    },
    {
      element: `[data-tourstep='${TOUR_STEP.DOWNLOAD_BUTTON}']`,
      popover: {
        title: 'Download button',
        description:
          'After processing the image, you can download it to your device by clicking this button'
      }
    },
    {
      element: `[data-tourstep='${TOUR_STEP.DOCUMENTATION_LINK}']`,
      popover: {
        title: 'Documentation page',
        description:
          'Here you can read more about a particular option, what it does and how its various parameters work.'
      }
    }
  ]

  const tourDriver = driver({
    allowClose: false,
    showProgress: true,
    animate: !isPrefersReduceMotion(),
    showButtons: ['previous', 'next'],
    onDestroyed: completeTour,
    steps: steps.map(({ element, popover }) => ({
      element,
      popover: {
        ...popover,
        popoverClass: clsx('tour-popover', geistSans.variable)
      }
    })),
    prevBtnText: '&#8592; Prev',
    onPopoverRender: (popover, { state: { activeIndex: step } }) => onPopoverRender(popover, step)
  })

  function createSkipButton() {
    const skipButton = document.createElement('span')

    skipButton.innerHTML = '&#10005;'
    skipButton.className = 'skip-tour-button'

    return skipButton
  }

  function onPopoverRender(popover: PopoverDOM, step?: number) {
    const skipButton = createSkipButton()
    popover.title.appendChild(skipButton)

    if (!step || step + 1 < MIN_STEP_TO_SKIP) {
      skipButton.style.display = 'none'
    }

    skipButton.addEventListener('click', () => {
      tourDriver.destroy()
      completeTour()
    })
  }

  return tourDriver
}
