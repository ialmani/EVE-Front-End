describe('Connection Test', () => {
  it('Visits Eve', () => {
    cy.visit('http://localhost:3000/')

  })
})

describe('Navbar Test', () => {
  it('Visits Eve About Page', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('About').click()

    cy.url().should('include', '/about')
  })
})

describe('Navbar Test', () => {
  it('Visits Eve Resources Page', () => {
    cy.visit('http://localhost:3000/')

    cy.pause()

    cy.contains('Resources').click()

    cy.contains('Articles').click({force: true})

    cy.url().should('include', '/articles')
  })
})

describe('Navbar Test', () => {
  it('Visits Eve Contact Us Page', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Contact Us').click()

    cy.url().should('include', '/contact-us')
  })
})

describe('Navbar Test', () => {
  it('Visits Eve Sign Up Page', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Sign Up').click()

    cy.url().should('include', '/signup')
  })
})

describe('Navbar Test', () => {
  it('Visits Eve Login Page', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Login').click()

    cy.url().should('include', '/login')
  })
})