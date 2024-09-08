describe('Página de login', () => {

  beforeEach(() => {
    //antes de cada teste, o código abaixo é executado
      cy.visit('https://adopet-frontend-cypress.vercel.app')
      cy.get('[data-test="login-button"]').click() 
      cy.intercept('POST','https://adopet-api-i8qu.onrender.com/adotante/login',{ //essa url é a url da requisição que interceptamos
        statusCode: 400, }).as('stubPost') //status code 400 é um erro de requisição
        //stubPost é um alias para essa interceptação
               //aqui interceptamos a requisição de login para não precisar de um backend
      })

  it('Deve preencher o campo email com um email inválido e uma mensagem de erro aparecer', () => {
    cy.get('[data-test="input-loginEmail"]').type('rasousa5com')
    cy.get('[data-test="input-loginPassword"]').type('513989Red')
    cy.get('[data-test="submit-button"]').click()
    cy.contains('Por favor, verifique o email digitado').should('be.visible')
  })

  it('Deve preencher o campo senha com uma senha inválida e uma mensagem de erro aparecer', () => {
    cy.get('[data-test="input-loginEmail"]').type('rasousa555@gmail.com')
    cy.get('[data-test="input-loginPassword"]').type('513989red')
    cy.get('[data-test="submit-button"]').click()
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
  })

  it('Deve falhar mesmo que os campos sejam prenchidos corretamente', () => {
    cy.login('rasousa555@gmail.com', '513989Red')
    cy.wait('@stubPost') //aqui estamos esperando a interceptação da requisição
    cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
  })

})