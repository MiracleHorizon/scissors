const colors = [
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'brown',
  'orange',
  'sky',
  'mint',
  'lime',
  'yellow',
  'amber',
  'gold',
  'bronze',
  'gray'
]

describe('Theme color change', () => {
  beforeEach(() => {
    window.localStorage.setItem('scissors-theme-color', colors[0])
    cy.skipTourAndAcceptCookies()
  })

  context('Desktop', () => {
    before(() => {
      cy.setDesktopViewport()
    })

    it('should correctly change theme color (AppearancePopover)', () => {
      cy.visit('/')

      // Waiting for lazy loading of all components.
      cy.wait(1500)

      cy.get('[data-cy="appearance-popover-trigger"]').click()
      cy.get('[data-cy="appearance-popover-content"]').should('exist')

      for (const color of colors.slice(0, 6)) {
        cy.get(`[data-cy="theme-color-grid-item-${color}"]`)
          .click()
          .then(() => {
            // Simulate waiting for a server response.
            cy.wait(100)
          })
          .then(() => {
            expect(window.localStorage.getItem('scissors-theme-color')).eq(color)
            cy.getCookie('scissors-theme-color').should('have.property', 'value', color)
          })
      }
    })
  })

  context('Mobile', () => {
    before(() => {
      cy.setMobileViewport()
    })

    it('should correctly change theme color (ThemeColorMenu)', () => {
      cy.visit('/')

      cy.get('[data-cy="theme-color-menu-trigger"]').click()
      cy.get('[data-cy="theme-color-menu-content"]').should('exist')

      for (const color of colors.slice(0, 6)) {
        cy.get(`[data-cy="theme-color-menu-item-${color}"]`)
          .click()
          .then(() => {
            // Simulate waiting for a server response.
            cy.wait(100)
          })
          .then(() => {
            expect(window.localStorage.getItem('scissors-theme-color')).eq(color)
            cy.getCookie('scissors-theme-color').should('have.property', 'value', color)

            if (color === colors[colors.length - 1]) return

            // Reopen menu.
            cy.get('[data-cy="theme-color-menu-trigger"]').click()
          })
      }
    })
  })
})
