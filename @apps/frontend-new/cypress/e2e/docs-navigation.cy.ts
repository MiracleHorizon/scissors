import {
  PATH_DOCS,
  DOCS_ANCHOR_EXTEND,
  DOCS_ANCHOR_MAIN,
  DOCS_ANCHOR_MODULATE,
  DOCS_ANCHOR_NEGATE,
  DOCS_ANCHOR_RESIZE,
  DOCS_ANCHOR_ROTATE,
  DOCS_ANCHOR_TRIM
} from '@src/site/paths'

const DOCS_NAVIGATION_ITEMS = [
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
] as const

describe('Documentation page navigation (e2e)', () => {
  context('Desktop', () => {
    before(() => {
      cy.setDesktopViewport()
    })

    it('should correctly navigate to the docs sections', () => {
      cy.visit('/')
      cy.get('a[href*="docs"]').click()
      cy.url().should('include', PATH_DOCS)

      for (const { title, hash } of DOCS_NAVIGATION_ITEMS) {
        cy.get(`[data-cy="docs-navigation-link-${hash}"]`).click()
        cy.url().should('include', `${PATH_DOCS}${hash}`)
        cy.get(`[data-cy="docs-section-header-${title.toLowerCase()}"]`).should('be.visible')
        cy.wait(200)
      }
    })
  })

  // TODO: Mobile tests
})
