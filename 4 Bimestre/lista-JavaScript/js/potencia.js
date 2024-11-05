function calcularPotencia() {
    var base = document.getElementById('base').value;
    var expoente = document.getElementById('expoente').value;
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (base === '' || expoente === '') {
        resultadoDiv.innerHTML = 'Insira os dois números.';
        return;
    }

    base = parseInt(base);
    expoente = parseInt(expoente);
    var resultado = 1;

    for (var i = 0; i < expoente; i++) {
        resultado *= base;
    }

    resultadoDiv.innerHTML = base + ' elevado a ' + expoente + ' é ' + resultado;
}
