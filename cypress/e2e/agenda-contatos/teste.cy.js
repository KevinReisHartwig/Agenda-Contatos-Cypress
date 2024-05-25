/// <reference types="cypress" />
/* eslint-disable */
describe('Testes para o contatos', () => {
    
    beforeEach(()=>{
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    // Teste para verificar se a aplicação foi montada corretamente
    it('devera testar o montagem da App', () => {
        // Verifica se tem pelo menos 1 h1 e 3 inputs
        cy.get('header > h1').should('have.length.greaterThan', 0)
        cy.get('form > input').should('have.length', 3)
        cy.screenshot('montagem-da-app')
    })
    // Teste para incluir um novo contato
    it('devera incluir um novo contato', () => {
        cy.get('[type="text"]').type('Kevin')
        cy.get('[type="email"]').type('kevin@gmail.com')
        cy.get('[type="tel"]').type('00 0000 0000')
        cy.get('.adicionar').click()
        cy.screenshot('novo-contato-incluido')
    })  
    // Teste para ativar modo de edição
    it('devera ativar modo de edição', () => {
        // Verifica se tem pelo menos 1 botão de edição
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').should('have.length.greaterThan', 0)
        cy.screenshot('modo-de-edicao-ativado')
    })
    // Teste para alterar o primeiro contato
    it('devera alterar o primeiro contato selecionado', () => {
        cy.get('.edit').first().click()

        // Edita nome
        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('KevinReis')
        // Edita mail
        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type('kevinreis@gmail.com')
        // Edita telefone
        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('27 9999 9999')
        // Salva
        cy.get('.alterar').click()
        cy.screenshot('primeiro-contato-alterado')
    })
    it('Devera apagar o ultimo contato', () => {
        //Apaga o ultimo contato     
        cy.get('.delete').last().click()
        cy.screenshot('ultimo-contato-apagado')
    })
        /* eslint-enable */   
})