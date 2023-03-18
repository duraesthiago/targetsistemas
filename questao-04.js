const faturamentoPorEstado = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};

let faturamentoTotal = 0;
for (const e in faturamentoPorEstado) {
    faturamentoTotal += faturamentoPorEstado[e];
}

console.log("QUESTAO 4 - O percentual de receita de cada estado é:")
for (const e in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[e] / faturamentoTotal) * 100;
    console.log(`${e}: ${percentual.toFixed(2)}%`);
}