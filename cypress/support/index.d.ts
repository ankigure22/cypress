/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Create several Todo items via UI
       * @example
       * cy.createDefaultTodos()
       */
      subValues(): Chainable<any>
      /**
       * Creates one Todo using UI
       * @example
       * cy.createTodo('new item')
       */
      clickButton(title: string): Chainable<any>
  
      /**
       * Command that injects Axe core library into app html.
       * @example
       *  cy.visit('/')
       *  cy.v()
       */
      userInput(): Chainable<any>
    }
  }