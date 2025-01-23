const assert = require('assert');
const { calcularJurosCompostos } = require('../src/calculo');

// Teste 1: Valores positivos
assert.strictEqual(calcularJurosCompostos(1000, 5, 2), 1102.5, "Erro no cálculo para valores positivos");
