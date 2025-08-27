import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let real, moeda, situacao


real = (prompt ("Digite o valor em reias: "))

situacao = Number (prompt("converter em DOLAR digite 1, EM EURO 2, EM PESO 3, EM LIBRA 4, E EM FRANCO 5: "))

switch(situacao ){
    case 1:
        moeda = real/5.424
console.log("valor em DOLAR é: ", moeda.toFixed(2))
break
case 2:
    moeda = real / 6.353
console.log("valor em EURO é:, ", moeda.toFixed(2))
break
case 3:
    moeda = real / 0.0042
console.log("valor em PESO é:, ", moeda.toFixed(2))
break

case 4:
    moeda = real / 7.326
console.log("valor em LIBRA é:, ", moeda.toFixed(2))
break

case 5:
    moeda = real / 6.753
console.log("valor em FRANCO é:, ", moeda.toFixed(2))
break


}
