// Função para calcular juros compostos

function calcularJurosCompostos(principal, taxa, tempo) {
    if (principal < 0 || taxa < 0 || tempo < 0) {
        throw new Error("Valores devem ser positivos.");
    }
    return principal * Math.pow(1 + taxa, tempo);
}
module.exports = calcularJurosCompostos;