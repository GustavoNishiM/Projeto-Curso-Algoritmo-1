/*
Var
// Seção de Declarações das variáveis 
   nome: caracter
   numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreva("Digite o nome: ")
   leia (nome)
   escreva("Digite o numero: ")
   leia (numero)
   
   escreva (nome, " ", numero)

*/

var nome, numero;

nome = prompt("Digite o seu nome:");
numero = prompt("Digite o número: ");

document.getElementById("paragrafo").innerText = nome + " " + numero;