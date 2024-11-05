function mostrarMes() {
    var mes = document.getElementById('mes').value;
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    switch (mes) {
        case '1':
            resultadoDiv.innerHTML = 'Janeiro';
            break;
        case '2':
            resultadoDiv.innerHTML = 'Fevereiro';
            break;
        case '3':
            resultadoDiv.innerHTML = 'Março';
            break;
        case '4':
            resultadoDiv.innerHTML = 'Abril';
            break;
        case '5':
            resultadoDiv.innerHTML = 'Maio';
            break;
        case '6':
            resultadoDiv.innerHTML = 'Junho';
            break;
        case '7':
            resultadoDiv.innerHTML = 'Julho';
            break;
        case '8':
            resultadoDiv.innerHTML = 'Agosto';
            break;
        case '9':
            resultadoDiv.innerHTML = 'Setembro';
            break;
        case '10':
            resultadoDiv.innerHTML = 'Outubro';
            break;
        case '11':
            resultadoDiv.innerHTML = 'Novembro';
            break;
        case '12':
            resultadoDiv.innerHTML = 'Dezembro';
            break;
        default:
            resultadoDiv.innerHTML = 'Número inválido. Tente de novo.';
    }
}
