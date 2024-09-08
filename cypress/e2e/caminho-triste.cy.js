describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click()
    cy.get('[data-test="submit-button"]').click()
  })

  it('Deve se cadastrar sem preencher os campos obrigatórios e uma mensagem de erro aparecer', () => {

    cy.contains('É necessário informar um endereço de email').should('be.visible')
    //should é uma assert para verificar se o elemento está visível
    //be.visible é uma condição que verifica se o elemento está visível
    cy.contains('Crie uma senha').should('be.visible')
    cy.contains('Repita a senha criada acima').should('be.visible')

    //.get é para selecionar um elemento
    //.contains é para verificar se um elemento contém um texto

  })
})