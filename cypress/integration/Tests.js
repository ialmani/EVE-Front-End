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
    cy.url().should('include', '/videos')
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
  it('Visits Eve Contact Us Page', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Contact Us').click()
    cy.url().should('include', '/contact-us')
  })
})

describe('Navbar Test', () => {
  it('Visits Eve Sign Up Page', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('SignUp').click()
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
    cy.contains('Sponsor Packages').click()
    cy.url().should('include', '/sponsor-packages')
  })
})

describe('Sign Up Test', () => {
  it('Visits Sign Up Page', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('SignUp').click()
    cy.url().should('include', '/signup')
  })
})

describe('Login Test', () => {
  it('Visits Login Page', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Login').click()
    cy.url().should('include', '/login')
  })
})

describe('Sponsor Resource Test', () => {
  it('Visits New Article Page', () => {
    cy.visit('http://localhost:3000/sponsor-profile')
    cy.contains("Article").click()
    cy.url().should('include', '/article/create')
  })
})

describe('Sponsor Resource Test', () => {
  it('Visits New Video Page', () => {
    cy.visit('http://localhost:3000/sponsor-profile')
    cy.contains('Video').click()
    cy.url().should('include', '/videos/upload')
  })
})