function calcularFibonacci() {
    var n = document.getElementById('numero').value;
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (n === '') {
        resultadoDiv.innerHTML = 'Insira um número.';
        return;
    }

    n = parseInt(n);
    var a = 1, b = 1, temp;

    resultadoDiv.innerHTML = '';

    for (var i = 0; i < n; i++) {
        resultadoDiv.innerHTML += a + ' ';
        temp = a;
        a = b;
        b = temp + b;
    }
}
