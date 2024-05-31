import {
  DOCS_ANCHOR_EXTEND,
  DOCS_ANCHOR_MAIN,
  DOCS_ANCHOR_MODULATE,
  DOCS_ANCHOR_NEGATE,
  DOCS_ANCHOR_RESIZE,
  DOCS_ANCHOR_ROTATE,
  DOCS_ANCHOR_TRIM
} from '../../src/site/paths'

const docsNavigationItems = [
  {
    title: 'Main',
    hash: DOCS_ANCHOR_MAIN
  },
  {
    title: 'Negate',
    hash: DOCS_ANCHOR_NEGATE
  },
  {
    title: 'Rotate',
    hash: DOCS_ANCHOR_ROTATE
  },
  {
    title: 'Modulate',
    hash: DOCS_ANCHOR_MODULATE
  },
  {
    title: 'Resize',
    hash: DOCS_ANCHOR_RESIZE
  },
  {
    title: 'Extend',
    hash: DOCS_ANCHOR_EXTEND
  },
  {
    title: 'Trim',
    hash: DOCS_ANCHOR_TRIM
  }
]

describe('Docs page navigation', () => {
  context('Desktop', () => {
    before(() => {
      cy.setDesktopViewport()
    })

    it('should correctly navigate to the docs sections', () => {
      cy.visit('/')
      cy.get('a[href*="docs"]').click()
      cy.url().should('include', '/docs')

      for (const { title, hash } of docsNavigationItems) {
        cy.get(`[data-cy="docs-navigation-link-${hash}"]`).click()
        cy.url().should('include', `/docs${hash}`)
        cy.get(`[data-cy="docs-section-header-${title.toLowerCase()}"]`).should('be.visible')
      }
    })
  })

  // TODO: Mobile tests
})
