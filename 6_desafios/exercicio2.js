/*Utilizando uma estrutura de repetição diferente da que utilizou ontem, crie um programa gerador de estrelas. O usuário informa um número, e o programa gera uma pirâmide de estrelas no seguinte formato:
// Ex.: Usuário informa 5 e o programa retorna
// *
// * *
// * * *
// * * * * 
// * * * * * 
- Você pode concatenar uma string usando: + ou += */

var r = require("readline-sync")

var estrela = parseInt(r.question("Digite um número para gerar a pirâmide de estrelas"))
i = 1
text = ""
do {
    text = text + "*"
    i++
    console.log(text)
}
while (i<=estrela)
 