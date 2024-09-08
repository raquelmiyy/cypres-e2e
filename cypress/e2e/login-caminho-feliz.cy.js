describe('Página de login', () => {

  beforeEach(() => {
    //antes de cada teste, o código abaixo é executado
      cy.visit('https://adopet-frontend-cypress.vercel.app/')
      cy.get('[data-test="login-button"]').click() 
  })

  it('Deve preencher os campos de login corretamente e autenticar o usuário ná página', () => {
      cy.login('rasousa555@gmail.com', '513989Red')
  })

  //o commands é um arquivo que contém funções que podem ser reutilizadas em vários testes como no exemplo acima

  
})