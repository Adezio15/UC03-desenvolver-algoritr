import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let total = 0;
let troco
let c=0
while (true) {
    let preco = Number(prompt("Digite o valor do produto (ou 0 para finalizar):"));
     c++
    if (preco === 0) {    
    console.log (" VOCE COMPROU: ", c)

        console.log (" o valor total da compra é: ", total)
        let valor = Number(prompt(" qual o valor do pagamento? "))
      troco=valor-total
      console.log(" Seu troco é: ", troco)

       break
    } else if (preco > 0) {
        total += preco
    } 
}


















