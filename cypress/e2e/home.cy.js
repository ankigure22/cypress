describe('example to-do app', () => 
{
  const todo1 = 'Feed the dog'
  const todo2 = 'Take pills'
  const todo3 = 'Pay electric bill'

  beforeEach(() => {
    // Visit the to-do app URL before each test
    cy.visit('https://todomvc.com/examples/react/#/')
  })

  it('can add new todo items', () => {
    // Type new to-do items and check if they are added to the list
    cy.get('.new-todo').type(`${todo1}{enter}`)
    cy.get('.new-todo').type(`${todo2}{enter}`)
    cy.get('.new-todo').type(`${todo3}{enter}`)
    cy.get('.view label')
      .should('have.length', 3)
      .eq(0).should('have.text', todo1)
  })

  it('can check off an item as completed', () => {
    // Add new to-do items, check one off as completed and verify it is marked as such
    cy.get('.new-todo').type(`${todo1}{enter}`)
    cy.get('.new-todo').type(`${todo2}{enter}`)
    cy.get('.new-todo').type(`${todo3}{enter}`)
    cy.contains('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check()
    cy.contains('Pay electric bill')
      .parents('li')
      .should('have.class', 'completed')
  })
})