describe('E2E - TASK CARDS', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should fill the task cards', () => {
    cy.step('Should confirms daily task lists');
    cy.getData('inprogress-list-items')
      .find('[data-test="task-card"]')
      .then((listing) => {
        cy.step('Should confirms cards length ( 3 )');
        const listingCount = Cypress.$(listing).length;
        expect(listing).to.have.length(listingCount);

        cy.step('Should be able to write the task title');
        // Type text into the input field
        const inputText = 'Daily Tasks';
        cy.getData('title').first().type(inputText).should('have.value', inputText);

        cy.step('Should be able to select the assigned task');
        // Select an option by its value
        const selectedValue = 'emily';
        cy.getData('assigned').first().select(selectedValue);

        // Assert the selected option
        cy.getData('assigned').first().should('have.value', selectedValue);
      });
  });
});
