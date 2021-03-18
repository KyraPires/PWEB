var nome = prompt("Nome do aluno:");
var n1 = parseFloat(prompt("Qual a nota da primeira prova?"));
var n2 = parseFloat(prompt("Qual a nota da segunda prova?"));
var n3 = parseFloat(prompt("Qual a nota da terceira prova?"));

var media = (n1 + n2 + n3) / 3;
    
alert("A média do aluno " + nome + " é: " + media.toFixed(2));