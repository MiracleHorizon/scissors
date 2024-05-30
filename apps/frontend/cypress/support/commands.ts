/// <reference types="cypress" />

import Chainable = Cypress.Chainable

Cypress.Commands.add('skipTourAndAcceptCookies' as keyof Chainable<any>, () => {
  window.localStorage.setItem('scissors-tour-completed', 'completed')
  window.localStorage.setItem(
    'scissors-cookie-consent',
    JSON.stringify({
      accepted: true
    })
  )
})

Cypress.Commands.add('setDesktopViewport' as keyof Chainable<any>, () => {
  cy.viewport(1920, 1080)
})

Cypress.Commands.add('setTabletViewport' as keyof Chainable<any>, () => {
  cy.viewport(1280, 800)
})

Cypress.Commands.add('setMobileViewport' as keyof Chainable<any>, () => {
  cy.viewport(375, 667)
})
