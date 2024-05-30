describe('Theme change', () => {
  beforeEach(() => {
    window.localStorage.setItem('scissors-theme', 'dark')
    cy.skipTourAndAcceptCookies()
  })

  context('Desktop', () => {
    before(() => {
      cy.setDesktopViewport()
    })

    it('should correctly change theme (AppearancePopover)', () => {
      cy.visit('/')

      // Waiting for lazy loading of all components.
      cy.wait(1500)

      cy.get('[data-cy="appearance-popover-trigger"]').click()
      cy.get('[data-cy="appearance-popover-content"]').should('exist')

      cy.get('[data-cy="theme-control-light"]')
        .click()
        .then(() => {
          expect(window.localStorage.getItem('scissors-theme')).eq('light')
        })

      cy.get('[data-cy="theme-control-dark"]')
        .click()
        .then(() => {
          expect(window.localStorage.getItem('scissors-theme')).eq('dark')
        })
    })
  })

  context('Mobile', () => {
    before(() => {
      cy.setMobileViewport()
    })

    it('should correctly change theme (ButtonToggleTheme)', () => {
      cy.visit('/')

      const button = cy.get('[data-cy="button-toggle-theme"]')

      button.click().then(() => {
        expect(window.localStorage.getItem('scissors-theme')).eq('light')
      })

      button.click().then(() => {
        expect(window.localStorage.getItem('scissors-theme')).eq('dark')
      })

      button.click().then(() => {
        expect(window.localStorage.getItem('scissors-theme')).eq('light')
      })
    })
  })
})
