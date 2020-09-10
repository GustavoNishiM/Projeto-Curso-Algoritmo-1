/*Var
// Seção de Declarações das variáveis 
   valor01, valor02, resultado: real
   operacao: caracter
   

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva("A proposta desse programa é calcular dois valores baseados na operação ")

   escreva("Digite o primeiro valor: ")
   leia(valor01)
   escreva("Digite a operacao: Ex +, -, *, /")
   leia(operacao)
   escreva("Digite o segundo valor: ")
   leia(valor02)
   
   se operacao = "+" entao
      resultado := valor01 + valor02
      senao
      se operacao = "-" entao
            resultado := valor01 - valor02
            senao
            se operacao = "*" entao
               resultado := valor01 * valor02
               senao
               se operacao = "/" entao
                  resultado := valor01 / valor02
               fimse
            fimse
      fimse
   fimse
   
   escreva("O resultado do calculo é: ", resultado)
           */
          
          
 var valor01, valor02, resultado, caracter;
 
function acaoBotao () {

 valor01 = prompt("Digite o primeiro valor: ")
 operacao = prompt("Digite a operacao: Ex +, -, *, / ")
 valor02 = prompt("Digite o segundo valor: ")

 if (operacao == "+"){
      resultado = parseInt (valor01) + parseInt (valor02)}
      else if (operacao == "-"){
            resultado = parseInt (valor01) - parseInt (valor02)}
            else if (operacao == "*"){
               resultado = parseInt (valor01) * parseInt (valor02)}
               else if (operacao == "/"){
                  resultado = parseInt (valor01) / parseInt (valor02)}
              
   
                  document.getElementById("paragrafo").innerText = "O resultado da operação é: " + resultado;
}
