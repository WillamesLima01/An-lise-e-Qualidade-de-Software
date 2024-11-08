///<reference types="cypress" />

context('Testes de login', () => {
    it('Login válido', () => {
        //abrir a página
        cy.visit('https://www.saucedemo.com/');
        //coletar e digitar o login
        cy.get('[data-test="username"]').type('standard_user');

        //coletar e digitar a senha
        cy.get('[data-test="password"]').type('secret_sauce');

        //clicar no botão login
        cy.get('[data-test="login-button"]').click();

        //validar resultado esperado - está na tela de produtos
        cy.get('[data-test="title"]').should('have.text', 'Products');
    });
});