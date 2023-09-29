const { calcularMDC } = require ('./mdc')

describe('Função Matematica', () => {
    it('Máximo Divisor Comum', () => {
        expect(calcularMDC(24,18)).toBe(6); 
    });
});