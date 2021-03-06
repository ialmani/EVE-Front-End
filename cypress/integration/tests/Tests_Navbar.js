const { Navbar } = require("react-bootstrap")

describe('Navbar Test', () => {
    it('Visits Eve About Page', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.nav-item').contains('About EVE').click()
      cy.url().should('include', '/about')
    })
  })
  
  describe('Navbar Test', () => {
    it('Visits Eve Articles Page', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.dropdown-content').invoke('attr', 'style', 'visibility: visible')
      cy.contains('Articles').click()
      cy.url().should('include', '/articles')
    })
  })

  describe('Navbar Test', () => {
    it('Visits Eve Videos Page', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.dropdown-content').invoke('attr', 'style', 'visibility: visible')
      cy.contains('Videos').click()
      cy.url().should('include', '/videos/')
    })
  })
  
  describe('Navbar Test', () => {
    it('Visits Eve Events Page', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.dropdown-content').invoke('attr', 'style', 'visibility: visible')
      cy.contains('Events').click()
      cy.url().should('include', '/events')
    })
  })
  
  describe('Navbar Test', () => {
    it('Visits Eve Ask EVE Page', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('Ask EVE').click()
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
      cy.contains('Log In').click()
      cy.url().should('include', '/login')
    })
  })
  
  describe('Navbar Test', () => {
    it('Visits Eve Sponsorship Packages Page', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('Sponsor Packages').click()
      cy.url().should('include', '/sponsor-packages')
    })
  })