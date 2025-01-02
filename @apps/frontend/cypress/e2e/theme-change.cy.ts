import { THEME_STORAGE_KEY } from '@src/lib/theme/constants'

describe('Theme changing (e2e)', () => {
  before(() => {
    cy.clearAllLocalStorage()
  })

  after(() => {
    cy.clearAllLocalStorage()
  })

  beforeEach(() => {
    cy.skipTourAndAcceptCookies()
    localStorage.setItem(THEME_STORAGE_KEY, 'dark')
  })

  context('Desktop', () => {
    before(() => {
      cy.setDesktopViewport()
    })

    it('should correctly change theme (with AppearancePopover)', () => {
      cy.visit('/')

      // Waiting for lazy loading of all components.
      cy.wait(1500)

      cy.get('[data-cy="appearance-popover-trigger"]').click()
      cy.get('[data-cy="appearance-popover-content"]').should('exist')

      expect(localStorage.getItem(THEME_STORAGE_KEY)).eq('dark')

      cy.get('[data-cy="theme-control-light"]')
        .click()
        .then(() => {
          expect(localStorage.getItem(THEME_STORAGE_KEY)).eq('light')
        })

      cy.get('[data-cy="theme-control-dark"]')
        .click()
        .then(() => {
          expect(localStorage.getItem(THEME_STORAGE_KEY)).eq('dark')
        })
    })
  })

  context('Mobile', () => {
    before(() => {
      cy.setMobileViewport()
    })

    it('should correctly change theme (with ButtonToggleTheme)', () => {
      cy.visit('/')

      const button = cy.get('[data-cy="button-toggle-theme"]')

      expect(localStorage.getItem(THEME_STORAGE_KEY)).eq('dark')

      button.click().then(() => {
        expect(localStorage.getItem(THEME_STORAGE_KEY)).eq('light')
      })

      button.click().then(() => {
        expect(localStorage.getItem(THEME_STORAGE_KEY)).eq('dark')
      })

      button.click().then(() => {
        expect(localStorage.getItem(THEME_STORAGE_KEY)).eq('light')
      })
    })
  })
})
