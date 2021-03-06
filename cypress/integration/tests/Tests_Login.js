const { Navbar } = require("react-bootstrap")
const { Visibility } = require("semantic-ui-react")

describe('Login Test', () => {
    it('Visits Login Page', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('Login').click()
      cy.url().should('include', '/login')
    })
  })
  
//Test Login Credentials must exist in order for test to pass
describe('Login Test', () => {
  it('Visits the login page and logs into an account', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Login').click()
    cy.get('input[type="username"]').should('have.attr', 'placeholder', 'Username').type('Test')
    cy.get('input[type="password"]').should('have.attr', 'placeholder', 'Password').type('TestPassword')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/sponsor-profile')
  })
})