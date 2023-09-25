function calcularMDC(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const numero1 = 24;
const numero2 = 18;

const mdc = calcularMDC(numero1, numero2);
console.log(`O MDC entre ${numero1} e ${numero2} é ${mdc}`);