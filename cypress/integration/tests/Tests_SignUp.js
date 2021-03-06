describe('Sign Up Test', () => {
    it('Visits Sign Up Page', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('Sign Up').click()
      cy.url().should('include', '/signup')
    })
  })

describe('Sign Up Test', () => {
  it('Visits the sign up page and creates an account', () => {
    cy.visit('http://localhost:3000/signup')
    cy.get('input[type="Firstname"]').type('Austin')
    cy.get('input[type="Lastname"]').type('Foster')
    cy.get('input[type="Username"]').type('afoster')
    cy.get('input[type="Email"]').type('afoster@bsu.edu')
    cy.get('input[type="Password"]').type('password')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/sponsor-profile')
  })
})