import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let desconto, compra
 compra = (prompt ( " Digite o valor da compra: "))


if(compra <=100){ 

    console.log(" Sem desconto! ")}

else if (compra > 101 && compra <= 500){
desconto= compra * 0.95
console.log(" PARABENS, VOCE OBTEVE 5% DE DESCONTO! ", desconto)

} if (compra >=300){
    console.log(" PARABENS, VOCE OBTEVE UM CUPOM DE DESCONTO PARA A PROXIMA COMPRA!! ")


}

if ( compra > 500){
    desconto= compra * 0.90
    console.log(" 10% de desconto! ", desconto)
}