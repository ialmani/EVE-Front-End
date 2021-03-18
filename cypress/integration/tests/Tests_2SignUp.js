describe('Sign Up Test', () => {
    it('Visits Sign Up Page', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('Sign up').click()
      cy.url().should('include', '/signup')
    })
  })

describe('Sign up Test', () => {
    it('Sign up Post request', () => {
        cy.request('POST', 'http://127.0.0.1:8000/auth/api/register', { first_name: 'Test', last_name: 'Case', email: 'test@bsu.edu', username: 'TestCase', password: 'TestPassword' }).then((response) => {
            expect(response.status).to.eq(200)
          })
    })
  })

describe('Sign Up Test', () => {
  it('Visits the sign up page and creates an account', () => {
    cy.visit('http://localhost:3000/signup')
    cy.get('input[type="firstname"]').type('Test2')
    cy.get('input[type="lastname"]').type('Case2')
    cy.get('input[type="username"]').type('TestCase2')
    cy.get('input[type="email"]').type('test2@bsu.edu')
    cy.get('input[type="password"]').type('TestPassword2')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/login')
  })
})