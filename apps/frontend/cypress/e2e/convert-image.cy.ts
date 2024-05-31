import * as path from 'path'

// NOTE: Backend server should be running
describe('Convert image', () => {
  before(() => {
    cy.setDesktopViewport()
    cy.skipTourAndAcceptCookies()
  })

  it('should correctly convert image and download it', () => {
    cy.visit('/')
    cy.wait(1500)

    // Upload an image file.
    cy.get('[data-cy="image-dropzone"] input').selectFile('cypress/fixtures/test_image.png', {
      force: true
    })

    // Flip image.
    const switchFlip = cy.get('[data-cy="switch-flip"]')
    switchFlip.click()
    switchFlip.should('have.data', 'state', 'checked')

    // Set output file name.
    const outputFileName = 'my_file_new_name'
    cy.get('[data-cy="input-output-file-name"]').type(outputFileName)

    // Add gamma and set max value.
    cy.get('[data-cy="button-add-gamma"]').click()
    cy.get('[data-cy="slider-gamma"]').click('right')

    // Add hue, brightness, lightness and saturation.
    cy.get('[data-cy="button-add-modulate"]').click()
    cy.get('[data-cy="slider-hue"]').click('center')
    cy.get('[data-cy="slider-brightness"]').click('center')
    cy.get('[data-cy="slider-lightness"]').click('left')
    cy.get('[data-cy="slider-saturation"]').click('right')

    // Open request options.
    cy.get('[data-cy="dd-request-options-trigger"]').click()
    cy.get('[data-cy="dd-request-options-content"]').should('be.visible')
    cy.get('[data-cy="select-output-format-trigger"]').click()

    // Select webp format.
    const outputFileFormat = 'webp'
    cy.get('[data-cy="select-output-format-content"]').should('be.visible')
    cy.get('[data-cy="select-item"]').contains(outputFileFormat).click()
    cy.clickOutside({ force: true })
    cy.get('[data-cy="select-output-format-content"]').should('not.exist')

    cy.get('[data-cy="button-convert"]')
      .click()
      .then(() => {
        // Simulate waiting for a server response.
        cy.wait(3000)

        cy.get('[data-cy="button-download"]').click()

        const downloadsFolder = Cypress.config('downloadsFolder')
        const outputTestFilePath = path.join(
          downloadsFolder,
          `${outputFileName}.${outputFileFormat}`
        )
        cy.readFile(outputTestFilePath).should('exist')
      })
  })
})
