describe('Form', () => {
  describe('When visit form url', () => {
    it('contains h1 Form', () => {
      cy.visit('/form');
      cy.contains('h1', 'Form');
    });

    describe('When fill name and lastname', () => {
      it('should got to home When click button', () => {
        cy.visit('/form');
        cy.get('.form__input_name').type('edimo');
        cy.get('.form__input_last_name').type('sousa');
        cy.get('button').click();
        cy.url().should('eq', 'http://localhost:8081/'); // => true
      });
    });
  });
});
