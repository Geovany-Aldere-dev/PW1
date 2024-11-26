const botaoCalcular = document.querySelector("button");
const numeroConvidados = document.getElementById("Convi");
const cardapio = document.querySelector("select");
const checkboxDJ = document.getElementById("ckDJ");
const checkboxMesaFrutas = document.getElementById("ckVinho");
const checkboxDecoracao = document.getElementById("ckDecoração");
const resultado = document.getElementById("resultado");

// Evento ao clicar no botão
    botaoCalcular.addEventListener("click", function () {
    // Pega os Valores do formulário
        const convidados = parseInt(numeroConvidados.value) || 0;
        let precoPorPessoa = 0;

  // Define o preço por Pessoa no Cárdapio
    if (cardapio.value === "Coquetel Básico") {
        precoPorPessoa = 50;
    } else if (cardapio.value === "Coquetel Premium") {
        precoPorPessoa = 60;
    } else if (cardapio.value === "Jantar Completo") {
        precoPorPessoa = 80;
    }

  // Calcula o valor inicial do evento
  let valorTotal = convidados * precoPorPessoa;

  // Adiciona o Valor das checkboxes marcadas
    if (checkboxDJ.checked) {
        valorTotal += 800;
    }

    if (checkboxMesaFrutas.checked) {
        valorTotal += 10 * convidados;
    }

    if (checkboxDecoracao.checked) {
        valorTotal += 500;
    }

    resultado.textContent = "O valor total do evento é R$ " + valorTotal;
});
