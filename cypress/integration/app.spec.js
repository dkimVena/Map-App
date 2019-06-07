describe('App Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has continent dropdown', () => {
    cy.contains('Continent');
  });

  it('has country dropdown', () => {
    cy.contains('Country');
  });

  it('shows menu when continent dropdown is clicked', () => {
    cy.contains('Continent').click();
    cy.get('ul')
      .children()
      .should('have.length', 7);
  });

  it('updates country menu when continent dropdown is selected', () => {
    cy.contains('Continent').click();
    cy.get('ul>li')
      .eq(1)
      .click();
    cy.contains('Country').click();
    cy.get('ul')
      .children()
      .should('have.length', 5);
  });

  it('shows infoCard when country is selected', () => {
    cy.contains('Continent').click();
    cy.get('ul>li')
      .eq(1)
      .click();
    cy.contains('Country').click();
    cy.get('ul>li')
      .eq(4)
      .click();
    cy.get('figure').should('have.class', 'InfoCard');
  });
});
