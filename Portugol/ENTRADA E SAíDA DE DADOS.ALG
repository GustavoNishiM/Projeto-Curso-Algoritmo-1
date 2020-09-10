Algoritmo "Entrada e Saída de Dados"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 08/09/2020
Var
// Seção de Declarações das variáveis 
   nome: caracter
   nota1, nota2, media, mediaEscolar: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Digite o seu nome")
   leia (nome)
   escreva("Digite a sua idade")
   leia (nota)
   media =(nota1 + nota2) / 2
   //mediaEscolar é uma variavel recuperada do banco de dados da tabela aluno/nota
   if (media >= mediaEscolar)
   escreva ("O nome digitado foi:", nome)
   escreva ("A idade digitada foi:", nota)
   
Fimalgoritmo