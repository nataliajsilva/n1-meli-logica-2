//resposta aqui

/*var r = require("readline-sync");
var a = parseInt(r.question("Digite 1 ou 2"));
console.log(a);
*/

//Crie uma variável que irá guardar o array com nome e valor dos produtos
var r = require("readline-sync")

var listaProdutos = [
    {nome: 'Oculos', valor: 70.00},
    {nome: 'Brinco',valor: 25.00},
    {nome: 'Colar',valor: 45.00},
    {nome: 'Pulseira',valor: 35.00}
]
    //Crie uma variável 'posicao' para guardar o produto escolhido pelo usuário
var posicao = parseInt(r.question("Escolha um produto de 0 a 3"))

//Crie uma variável 'porcentagem' que irá guardar qual porcentagem o usuário digitou
var porcentagem = parseInt(r.question("Digite uma porcentagem:"))

//Procure no array qual produto foi escolhido pelo usuário
var produtoselecionado = listaProdutos[posicao]

//Calcule o desconto do produto
var desconto = produtoselecionado.valor * (porcentagem/100)

//Printe na tela a seguinte frase: "Produto xxx com desconto é R$ xxx"
console.log("Produto" + produtoselecionado.nome + " com desconto é R$" +desconto.toFixed(2))

