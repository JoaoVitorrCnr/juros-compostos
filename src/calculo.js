function calcularJurosCompostos(principal, taxa, tempo) {
    if (typeof principal !== 'number' || typeof taxa !== 'number' || typeof tempo !== 'number') {
        throw new Error("Todos os valores devem ser números.");
    }
    if (principal < 0 || taxa < 0 || tempo < 0) {
        throw new Error("Valores devem ser positivos.");
    }
    return principal * Math.pow(1 + taxa, tempo);
}
module.exports = calcularJurosCompostos;
