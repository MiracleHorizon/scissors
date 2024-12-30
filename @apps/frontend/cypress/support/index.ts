import './commands'

/* eslint no-unused-vars: 0 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      skipTourAndAcceptCookies: VoidFunction
      setDesktopViewport: VoidFunction
      setTabletViewport: VoidFunction
      setMobileViewport: VoidFunction
      clickOutside: (options?: Partial<Cypress.ClickOptions>) => void
      selectTab: (params: { tabName: string; isMobile?: boolean }) => void
    }
  }
}
