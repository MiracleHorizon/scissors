/// <reference types="cypress" />

import Chainable = Cypress.Chainable

Cypress.Commands.add('setDesktopViewport' as keyof Chainable<any>, () => {
  cy.viewport(1920, 1080)
})

Cypress.Commands.add('setTabletViewport' as keyof Chainable<any>, () => {
  cy.viewport(1280, 800)
})

Cypress.Commands.add('setMobileViewport' as keyof Chainable<any>, () => {
  cy.viewport(375, 667)
})

Cypress.Commands.add(
  'clickOutside' as keyof Chainable<any>,
  { prevSubject: false },
  (options?: Partial<Cypress.ClickOptions>) => {
    cy.get('body').click(0, 0, options)
  }
)

Cypress.Commands.add('skipTourAndAcceptCookies' as keyof Chainable<any>, () => {
  localStorage.setItem('scissors-tour-completed', 'completed')
  localStorage.setItem(
    'scissors-cookie-consent',
    JSON.stringify({
      accepted: true
    })
  )
})

Cypress.Commands.add(
  'selectTab' as keyof Chainable<any>,
  ({ tabName, isMobile = false }: { tabName: string; isMobile?: boolean }) => {
    if (isMobile) {
      cy.get('[data-cy="toolbar-tab-dropdown-trigger"]').click()
      cy.get('[data-cy="toolbar-tab-dropdown-content"]').should('exist')

      cy.get('.rt-TabsTriggerInner')
        .contains(tabName, {
          matchCase: false
        })
        .click()

      return
    }

    const tab = cy.get(`[data-cy="tab-trigger-${tabName}"]`)
    tab.click()
    tab.should('have.data', 'state', 'active')
  }
)
