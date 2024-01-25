describe('Fundamentals test', () => {
  beforeEach(() => {
    cy.visit('/fundamentals');
  })
  it('contains correct header text', () => {
    cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals');
  })
  it('The accordion works correctly', () => {
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible');
    cy.clickPanel1aHeader();
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible');
    cy.clickPanel1aHeader();
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible');
    })
  })
  
  
