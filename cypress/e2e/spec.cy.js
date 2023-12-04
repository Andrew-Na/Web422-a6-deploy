describe('template spec', () => {
  it('cannot navigate to /products without being logged in', () => {
    cy.visit("/products")
    .url().should('include', "/login");
  });
})