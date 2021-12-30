alert("Exercício 'Média 4 Notas'");
alert("Ao inserir valores 'Float', utilize ponto ao invés de vírgula!!");

let valor1 = prompt("Insira o Primeiro Valor...").trim();
let converteValor1 = parseFloat(valor1);

let valor2 = prompt("Insira o Segundo Valor...").trim();
let converteValor2 = parseFloat(valor2);

let valor3 = prompt("Insira o Terceiro Valor...").trim();
let converteValor3 = parseFloat(valor3);

let valor4 = prompt("Insira o Quarto Valor...").trim();
let converteValor4 = parseFloat(valor4);

let mediaAritmetica = ((converteValor1 + converteValor2 + converteValor3 + converteValor4) / 4).toFixed(1);

let converteMediaAritmetica = mediaAritmetica.toString();

if (converteValor1 < 0 || converteValor1 > 10 ||
    converteValor2 < 0 || converteValor2 > 10 ||
    converteValor3 < 0 || converteValor3 > 10 ||
    converteValor4 < 0 || converteValor4 > 10) {

    alert("Por favor insira notas somente entre 0.0 e 10.0");
}
else {

    if (converteMediaAritmetica == "NaN") {
        alert("Foram detectados espaços em branco ou formatos de entrada incorretos. Por favor insira um valor numérico...");
    }

    if (converteMediaAritmetica < 5) {
        alert("Sua média é " + converteMediaAritmetica + ". Resultado: Reprovado.");
    }

    if (converteMediaAritmetica >= 5 && converteMediaAritmetica <= 6) {
        alert("Sua média é " + converteMediaAritmetica + ". Resultado: Em Recuperação.");
    }

    if (converteMediaAritmetica > 6) {
        alert("Sua média é " + converteMediaAritmetica + ". Resultado: Aprovado!!");
    }
}