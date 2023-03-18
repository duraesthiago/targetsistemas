let dados = require('./dados.json');
let newDados = dados.filter(d => d.valor != 0);
let valores = newDados.map(v => v.valor);

function menorValor() {
    let menorValor = Math.min.apply(null, valores);
    console.log(`O menor valor de faturamento é:${menorValor.toFixed(2)}`);
    return menorValor;
}

function maiorValor() {
    let maiorValor = Math.max.apply(null, valores);
    console.log(`O maior valor de faturamento é:${maiorValor.toFixed(2)}`);
    return maiorValor;
}

function mediaMensal() {
    let somaTotal = 0;
    for (let i = 0; i < newDados.length; i++) {
        somaTotal += newDados[i].valor;
    }
    let mediaFaturamento = somaTotal / newDados.length;
    return mediaFaturamento;
}

function diasFaturamentoMedia() {
    let diasAcimaDaMedia = 0
    let faturamentoMedio = mediaMensal();
    for (let i = 0; i < dados.length; i++) {
        if (dados[i].valor > faturamentoMedio) {
            diasAcimaDaMedia++
        }
    }
    console.log(`A quantidade de dias onde o faturamento foi acima da média mensal é: ${diasAcimaDaMedia}`);
    return diasAcimaDaMedia;
}

menorValor();
maiorValor();
diasFaturamentoMedia();