function calcularIMC() {
    let {peso, altura} = getDadosFormulario();
    altura=altura / 100;
    const imc = peso / (altura*altura);
    setResultado(imc);
}

function getDadosFormulario() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    return { peso, altura};
}

function setResultado(imc) {
    document.getElementById('resultado').innerHTML = imc;
    
}


function calcularPlanos() {
    var idade = document.getElementById('idade').value;
    var imc = document.getElementById('imc').value;

    // Operadora A
    var precoBasicoA = 100 + (idade * 10 * (imc / 10));
    var precoStandardA = 150 + (idade * 15) * (imc / 10);
    var precoPremiumA = 200 - (imc * 10) + (idade * 20) * (imc / 10);

    // Operadora B
    var fatorComorbidadeB = calcularFatorComorbidade(imc);
    var precoBasicoB = 100 + (fatorComorbidadeB * 10 * (imc / 10));
    var precoStandardB = (150 + (fatorComorbidadeB * 15)) * (imc / 10);
    var precoPremiumB = (200 - (imc * 10) + (fatorComorbidadeB * 20)) * (imc / 10);

    // Exibir resultados na tabela
    document.getElementById('operadoraARow').children[1].innerText = precoBasicoA.toFixed(2);
    document.getElementById('operadoraARow').children[2].innerText = precoStandardA.toFixed(2);
    document.getElementById('operadoraARow').children[3].innerText = precoPremiumA.toFixed(2);

    document.getElementById('operadoraBRow').children[1].innerText = precoBasicoB.toFixed(2);
    document.getElementById('operadoraBRow').children[2].innerText = precoStandardB.toFixed(2);
    document.getElementById('operadoraBRow').children[3].innerText = precoPremiumB.toFixed(2);
}

function calcularFatorComorbidade(imc) {
    if (imc < 18.5) {
        return 10;
    } else if (imc < 24.9) {
        return 1;
    } else if (imc < 29.9) {
        return 6;
    } else if (imc < 34.9) {
        return 10;
    } else if (imc < 39.9) {
        return 20;
    } else {
        return 30;
    }
}