describe('Página de mensagens', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMmIzMTYxNC1hMDRjLTRkOWItYmFmMS02YWIyMzZjODU4YWQiLCJhZG9wdGVyTmFtZSI6IlJhcXVlbCBHdWltYXLDo2VzIiwiaWF0IjoxNzI1Nzc3MjA5LCJleHAiOjE3MjYwMzY0MDl9.5GHx8Zx38u4i5vhGDWZs_CYiRGuk8cYIoL_P8-syebc`

    it('Mensagens da API', () => {
            cy.request({
                method: 'GET',
                url: 'https://adopet-api-i8qu.onrender.com/mensagem/e2b31614-a04c-4d9b-baf1-6ab236c858ad',
                headers: { authorization }
            }).then((res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body).is.not.empty
                expect(res.body).to.have.property('msg')
            });
    });

    it('Nome do perfil', () => {
        cy.request({ //aqui estamos fazendo uma requisição (chamada) para a API
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/e2b31614-a04c-4d9b-baf1-6ab236c858ad',
            headers: { authorization }
        }).then((res) => { //aqui estamos pegando a resposta da requisição
            expect(res.status).to.be.equal(200) //aqui estamos verificando se o status da resposta é 200
            expect(res.body).is.not.empty //aqui estamos verificando se o corpo da resposta não está vazio
            expect(res.body).to.have.property('perfil') //aqui estamos verificando se o corpo da resposta tem a propriedade perfil
            expect(res.body.perfil.nome).to.be.equal('Raquel Guimarães') //aqui estamos verificando se o nome do perfil é Raquel Guimarães
        });
});
});