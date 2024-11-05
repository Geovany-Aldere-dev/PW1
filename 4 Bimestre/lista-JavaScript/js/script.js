function calcularTabuada() {
    var numero = document.getElementById('numero').value;
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (numero === '') {
        resultadoDiv.innerHTML = 'Insira um número.';
        return;
    }

    numero = parseInt(numero);

    for (var i = 1; i <= 10; i++) {
        resultadoDiv.innerHTML += numero + ' x ' + i + ' = ' + (numero * i) + '<br>';
    }
}
