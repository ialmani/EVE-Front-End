describe('Resource Test', () => {
    it('Visits Eve Resources Page', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('Resources').click()
      cy.url().should('include', '/resources')
    })
  })

describe('Resource Test', () => {
    it('Visits Eve Articles Page From Resources', () => {
      cy.visit('http://localhost:3000/resources')
      cy.contains('View Articles').click()
      cy.url().should('include', '/articles')
    })
  })

describe('Resource Test', () => {
    it('Visits Eve Videos Page From Resources', () => {
      cy.visit('http://localhost:3000/resources')
      cy.contains('Videos').scrollIntoView()
      cy.contains('View Videos').click()
      cy.url().should('include', '/videos')
    })
  })

describe('Resource Test', () => {
    it('Visits Eve Events Page From Resources', () => {
      cy.visit('http://localhost:3000/resources')
      cy.contains('Live Events').scrollIntoView()
      cy.contains('Attend Live').click()
      cy.url().should('include', '/events')
    })
  })