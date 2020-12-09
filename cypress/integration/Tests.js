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

    cy.get('.dropdown-content').invoke('attr', 'style', 'visibility: visible')
    cy.contains('Articles').click()
    cy.url().should('include', '/articles')

    cy.pause()

    cy.get('.dropdown-content').invoke('attr', 'style', 'visibility: visible')
    cy.contains('Videos').click()
    cy.url().should('include', '/videos')

    cy.get('.dropdown-content').invoke('attr', 'style', 'visibility: visible')
    cy.contains('Events').click()
    cy.url().should('include', '/events')

    cy.pause()
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

describe('Navbar Test', () => {
  it('Visits Eve Sponsorship Packages Page', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('SponsorShip Packages').click()

    cy.url().should('include', '/sponsor-packages')
  })
})

describe('Sign Up Test', () => {
  it('Visits Member Sign Up Page', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Sign Up').click()
    cy.contains('Sign up as a Member').click()

    cy.url().should('include', '/signup/member')
  })
})

describe('Sign Up Test', () => {
  it('Visits Sponsor Sign Up Page', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Sign Up').click()
    cy.contains('Sign up as a Sponsor').click()

    cy.url().should('include', '/signup/sponsor')
  })
})

describe('Sign Up Test', () => {
  it('Visits Sponsor Sign Up Page Through Packages Page', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('SponsorShip Packages').click()
    cy.contains('Sign up as a Sponsor').click()

    cy.url().should('include', '/signup/sponsor')
  })
})