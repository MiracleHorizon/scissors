import * as path from 'path'

const testResize = () => {
  // Upload an image file.
  cy.get('[data-cy="image-dropzone"] input').selectFile('cypress/fixtures/test_image.png', {
    force: true
  })

  // Set resize width and height.
  cy.get('[data-cy="input-resize-width"]').type('150')
  cy.get('[data-cy="input-resize-height"]').type('150')

  const checkboxReduction = cy.get('[data-cy="cbox-resize-reduction"]')
  checkboxReduction.click()
  checkboxReduction.should('have.data', 'state', 'checked')

  // Add trim operation.
  cy.get('[data-cy="resize-operation-trim"]').click({
    force: true
  })

  cy.get('[data-cy="cbox-trim-line-art"]').click()
  cy.get('[data-cy="input-trim-threshold"]').clear().type('4')

  cy.get('[data-cy="button-resize"]')
    .click()
    .then(() => {
      // Simulate waiting for a server response.
      cy.wait(3000)

      cy.get('[data-cy="button-download"]').click()

      const downloadsFolder = Cypress.config('downloadsFolder')
      const outputTestFilePath = path.join(downloadsFolder, 'test_image.png')
      cy.readFile(outputTestFilePath).should('exist')
    })
}

// NOTE: Backend server should be running
describe('Resize image', () => {
  beforeEach(() => {
    cy.skipTourAndAcceptCookies()
  })

  context('Desktop', () => {
    before(() => {
      cy.setDesktopViewport()
    })

    it('should correctly resize image and download it', () => {
      cy.visit('/')
      cy.wait(1500)

      cy.selectTab({ tabName: 'resize' })

      testResize()
    })
  })

  context('Mobile', () => {
    before(() => {
      cy.setMobileViewport()
    })

    it('should correctly resize image and download it', () => {
      cy.visit('/')
      cy.wait(1500)

      cy.selectTab({ tabName: 'resize', isMobile: true })

      testResize()
    })
  })
})
