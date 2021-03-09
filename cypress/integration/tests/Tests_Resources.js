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
      cy.get('.resources-info').contains('View Videos').scrollIntoView({duration:20000})
      cy.contains('View Videos').click({force: true})
      cy.url().should('include', '/videos')
    })
  })

describe('Resource Test', () => {
    it('Visits Eve Events Page From Resources', () => {
      cy.visit('http://localhost:3000/resources')
      cy.contains('Attend Live').scrollIntoView({duration:20000})
      cy.contains('Attend Live').click({force: true})
      cy.url().should('include', '/events')
    })
  })

describe('Resource Test', () => {
  it('View Article Resource', () => {
    cy.visit('http://localhost:3000/articles')
    cy.contains('Read More').click()
    cy.url().should('include', '/articles/1')
  })
})

describe('Resource Test', () => {
  it('View Video Resource', () => {
    cy.visit('http://localhost:3000/videos')
    cy.contains('view more').click()
    cy.url().should('include', '/videos/1')
  })
})