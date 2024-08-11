import { themeColorItems } from '@src/lib/theme/radix/appearance'
import { THEME_COLOR_STORAGE_KEY } from '@src/lib/theme/constants'

const COLORS = themeColorItems.map(({ color }) => color as string)

describe('Theme color change', () => {
  before(() => {
    cy.clearAllCookies()
  })

  after(() => {
    cy.clearAllCookies()
  })

  beforeEach(() => {
    cy.skipTourAndAcceptCookies()
  })

  context('Desktop', () => {
    before(() => {
      cy.setDesktopViewport()
    })

    it('should correctly change theme color (with AppearancePopover)', () => {
      cy.visit('/')

      // Waiting for lazy loading of all components.
      cy.wait(1500)

      cy.get('[data-cy="appearance-popover-trigger"]').click()
      cy.get('[data-cy="appearance-popover-content"]').should('exist')

      for (const color of COLORS.slice(0, 6)) {
        cy.get(`[data-cy="theme-color-grid-item-${color}"]`)
          .click()
          .then(() => {
            // Simulate waiting for a server response.
            cy.wait(100)
          })
          .then(() => {
            cy.getCookie(THEME_COLOR_STORAGE_KEY).should('have.property', 'value', color)
          })
      }
    })
  })

  context('Mobile', () => {
    before(() => {
      cy.setMobileViewport()
    })

    it('should correctly change theme color (with ThemeColorMenu)', () => {
      cy.visit('/')

      cy.get('[data-cy="theme-color-menu-trigger"]').click()
      cy.get('[data-cy="theme-color-menu-content"]').should('exist')

      for (const color of COLORS.slice(0, 6)) {
        cy.get(`[data-cy="theme-color-menu-item-${color}"]`)
          .click()
          .then(() => {
            // Simulate waiting for a server response.
            cy.wait(100)
          })
          .then(() => {
            cy.getCookie(THEME_COLOR_STORAGE_KEY).should('have.property', 'value', color)

            if (color === COLORS[COLORS.length - 1]) return

            // Reopen menu.
            cy.get('[data-cy="theme-color-menu-trigger"]').click()
          })
      }
    })
  })
})
