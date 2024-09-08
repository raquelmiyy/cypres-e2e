describe('template spec', () => {

  it('Verificar texto na tela principal "Quem ama adota"', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home')
    cy.contains('Quem ama adota').should('be.visible')
  })

  it('Verificar texto na tela principal "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible')
  })

  //Testes em modo headless
  //é possível rodar o cypress em modo headless, sem abrir o navegador
  //para isso, basta rodar o comando: npx cypress run
  //para rodar um teste específico em modo headless, basta rodar o comando: npx cypress run --spec "cypress/e2e/nome-do-arquivo.cy.js"
  
})