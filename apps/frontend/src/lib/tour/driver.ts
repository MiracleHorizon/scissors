import { completeTour } from './actions'
import { TOUR_STEP } from './constants'
import type { PopoverDOM } from './types'

const createTourElementSelector = (step: number) => `[data-tourstep='${step}']`

export async function createTour() {
  const { driver } = await import('driver.js')
  const { isPrefersReduceMotion } = await import('@helpers/isPrefersReduceMotion')

  const steps: ReturnType<(typeof driver.arguments)['steps']> = [
    {
      element: createTourElementSelector(TOUR_STEP.FILE_UPLOAD),
      popover: {
        title: 'File upload zone',
        description: 'Here you can upload an image from your computer or from the web.'
      },
      showButtons: ['next']
    },
    {
      element: createTourElementSelector(TOUR_STEP.TOOLBAR_TAB_LIST),
      popover: {
        title: 'Tabs',
        description: 'You can choose between options tabs to process the image.'
      }
    },
    {
      element: createTourElementSelector(TOUR_STEP.TOOLBAR_MENU),
      popover: {
        title: 'Toolbar Menu',
        description:
          'You can export and import settings, configure their randomization, and reset and remove them.'
      }
    },
    {
      element: createTourElementSelector(TOUR_STEP.SETTINGS_PANEL),
      popover: {
        title: 'Settings Panel',
        description:
          'Here you can select a large number of different options for processing and formatting your images.'
      }
    },
    {
      element: createTourElementSelector(TOUR_STEP.REQUEST_BUTTON),
      popover: {
        title: 'Request button',
        description:
          'Once you have completed the image processing configuration settings, you can click on this button to apply them.'
      }
    },
    {
      element: createTourElementSelector(TOUR_STEP.DOWNLOAD_BUTTON),
      popover: {
        title: 'Download button',
        description:
          'After processing the image, you can download it to your device by clicking this button'
      }
    }
  ]

  function createSkipButton() {
    const skipButton = document.createElement('span')

    skipButton.innerHTML = '&#10005;'
    skipButton.className = 'skip-tour-button'

    return skipButton
  }

  function onPopoverRender(popover: PopoverDOM) {
    const skipButton = createSkipButton()
    popover.title.appendChild(skipButton)

    skipButton.addEventListener('click', () => {
      tourDriver.destroy()
      completeTour()
    })
  }

  const tourDriver = driver({
    allowClose: false,
    showProgress: true,
    animate: !isPrefersReduceMotion(),
    showButtons: ['previous', 'next'],
    steps,
    prevBtnText: '&#8592; Prev',
    onDestroyed: completeTour,
    onPopoverRender
  })

  return tourDriver
}
