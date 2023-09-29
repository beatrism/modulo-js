const { somaMultiplosAbaixoDe1000  } = require ('./multiplos')

describe('Função Matematica', () => {
    it('A soma de todos os múltiplos de 5 ou 7 abaixo de 1000', () => {
        expect(somaMultiplosAbaixoDe1000()).toBe(156361); 
    });
});