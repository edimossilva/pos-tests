describe('Form', () => {
  describe('When visit form url', () => {
    const validName = 'edimo';
    const validLastName = 'sousa';

    beforeEach(() => {
      cy.visit('/form');
    });

    it('contains h1 Form', () => {
      cy.contains('h1', 'Form');
    });

    describe('When fill name and lastname', () => {
      beforeEach(() => {
        cy.get('.form__input_name').type(validName);
        cy.get('.form__input_last_name').type(validLastName);
      });

      it('should has button', () => {
        cy.get('button').should('be.visible');
      });

      it('should has welcome text', () => {
        cy.get('button').should('be.visible');
        cy.contains('.form__h2_welcome_message', `Welcome ${validName} ${validLastName}`);
      });

      describe('When click button', () => {
        it('should got to home', () => {
          cy.url().should('eq', 'http://localhost:8080/form'); // => true
          cy.get('button').click();
          cy.url().should('eq', 'http://localhost:8080/'); // => true
        });
      });
    });
  });
});
