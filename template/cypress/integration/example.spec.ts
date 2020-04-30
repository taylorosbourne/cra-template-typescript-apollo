describe('Home page to About page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should navigate to About page and show source link', () => {
		cy.get('h1').contains('cra-template-typescript-apollo')
		cy.get('[cy-data="about"]').click()
    cy.get('a').contains('source')
  })
})
