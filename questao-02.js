function sequenciaFibonacci(numeroEscolhido) {
    if (numeroEscolhido <= 0) {
        return [];
    } else if (numeroEscolhido === 1) {
        return [0];
    } else if (numeroEscolhido === 2) {
        return [0, 1];
    } else {
        let inicioSequencia = [0, 1];
        for (let i = 2; i < numeroEscolhido; i++) {
            inicioSequencia.push(inicioSequencia[i - 1] + inicioSequencia[i - 2]);
        }
        return inicioSequencia;
    }
}

function pertenceSequencia(numeroVerificar) {
    let sequencia = sequenciaFibonacci(numeroVerificar + 2);
    if (sequencia.indexOf(numeroVerificar) !== -1) {
        console.log(numeroVerificar + " pertence à sequência de Fibonacci.");
    } else {
        console.log(numeroVerificar + " não pertence à sequência de Fibonacci.");
    }
}

pertenceSequencia(5);