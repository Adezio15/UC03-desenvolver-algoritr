
import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
import { saque, deposito } from "./funcoes.js"

let saldo=100

let operacao = prompt('digite 1 para saque ou 2 para deposito')
if (operacao==1){
    let retirada = Number(prompt('quanto voce quer sacar?'))
    saldo=saque (retirada, saldo)
    console.log(saldo)
}else if(operacao==2){

    let incluir = Number(prompt('quanto voce quer depositar?'))
    saldo = deposito (incluir,saldo)
    console.log('R$',incluir, 'Reais')
}





