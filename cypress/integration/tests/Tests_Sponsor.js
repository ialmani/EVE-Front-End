describe('Sponsor Resource Test', () => {
    it('Visits Article Creation Page', () => {
      cy.visit('http://localhost:3000/sponsor-profile')
      cy.get('.article-button').scrollIntoView({duration:4000}).contains('Article').click()
      cy.url().should('include', '/articles/create')
    })
  })

describe('Sponsor Resource Test', () => {
  it('Visits Video Upload Page', () => {
    cy.visit('http://localhost:3000/sponsor-profile')
    cy.get('.video-button').scrollIntoView({duration:4000}).contains('Video').click()
    cy.url().should('include', '/videos/upload')
  })
})

describe('Sponsor Resource Test', () => {
  it('Sign Up From Sponsor Packages Page', () => {
    cy.visit('http://localhost:3000/sponsor-packages')
    cy.get('.pricing-heading-bottom').scrollIntoView({duration:10000}).contains('Sign Up as a Sponsor').click()
    cy.url().should('include', '/videos/upload')
  })
})

