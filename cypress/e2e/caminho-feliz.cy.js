describe('Página de cadastro', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click()
  })

  it('Deve preencher ps campos do formulário corretamente para cadastrar um novo usuário', () => {

    // prefira ids e classes para seleção de elementos
    // cy.get(#id) ou cy.get(.class)

    //atributos customizados com data-test ou data-cy são uma boa prática
    // cy.get('[data-test="input-name"]') ou cy.get('[data-cy="input-name"]')
    //SÃO ATRIBUTOS PARA TESTE NÃO INTERFEREM NO CSS

    //priorize seletores mais específicos

    cy.cadastrar('Raquel Guimarães', 'rasousa555@gmail.com', '513989Red', '513989Red')
   
  
    

    
  })
})