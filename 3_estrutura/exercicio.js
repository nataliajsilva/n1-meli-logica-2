//resposta aqui

var r = require("readline-sync")

//O array de objetos produtos devem conter os dados
var produtos = [
    {nome: 'Bolacha', tempoDeValidade: 200, congelado:false},
    {nome: 'Arroz', tempoDeValidade: 400, congelado:false},
    {nome: 'Sorvete', tempoDeValidade: 150, congelado:true},
    {nome: 'Carne bouvina', tempoDeValidade: 200, congelado:true},
    {nome: 'Salsicha', tempoDeValidade: 350, congelado:true}
]

/*O funcionário deverá:
    - Escolher (digitar) um produto do array de objetos: "Escolha um produto entre 0 e x: "
    - Digitar quantos dias faltam para o produto vencer: "Digite quantos dias faltam para vencer: "*/

var posicao = parseInt(r.question("Escolha um produto de 0 a 4"))
var vencimento = parseInt(r.question("Digite quantos dias faltam para vencer o produto:"))

/*Calcular a porcentagem:
    porcentagem = (diasParaOVencimentoDoProduto * 100) / tempoDeValidadeDoProduto;*/

var produtoSelecionado = produtos[posicao]
var porcentagem = (vencimento * 100) / produtoSelecionado.tempoDeValidade

/*Você deverá:
    - Printar a mensagem "Descartar produto, muito proximo de vencer" caso produto esteja com 2% ou 
    menos de dias para vencer;*/
console.log (porcentagem,produtoSelecionado.congelado)
if (porcentagem<=2){
    console.log("Descartar produto, muito proximo de vencer")

    /*- Printar a mensagem "Desconto!  Produto não congelado e próximo da validade." caso produto não 
    seja congelado e esteja com 10% ou menos de dias para vencer;*/
} else if (produtoSelecionado.congelado==false && porcentagem<=10){
    console.log("Desconto!  Produto não congelado e próximo da validade.")

    /*- Printar a mensagem "Desconto! Produto congelado e próximo da validade." caso produto seja congelado
     e com 5% ou menos de dias para vencer;*/
} else if (produtoSelecionado.congelado==true && porcentagem<=5){
    console.log("Desconto! Produto congelado e próximo da validade.")

    /*- Printar a mensagem "Produto longe do vencimento." caso produto esteja com mais de 10% dos dias para 
    vencer;*/
} else {
    console.log("Produto longe do vencimento.")
}

    





