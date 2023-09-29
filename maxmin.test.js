const { encontrarIndicesMaximoMinimo } = require ('./maximominimo')

const arrayNumerico = [5, 12, 3, 8, 9, 1];

describe('Função Matematica', () => {
    it('Encontrar os indices maximo e minimo', () => {
        expect(encontrarIndicesMaximoMinimo(arrayNumerico)).toEqual({ indiceMaximo: 1, indiceMinimo: 5 }); 
    });
});