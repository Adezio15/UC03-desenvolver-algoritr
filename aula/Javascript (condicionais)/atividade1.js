import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let veloc, media
veloc = Number (prompt ( " Qual a velocidade permitida?"))
media = Number (prompt ( " Velocidade media do veiculo"))
let maximo = veloc + (veloc * 0.10)
if(media >= maximo){ 
    console.log(" ATENÇÃO: ACIMA DO PERMITIDO MULTA GRAVE")
} else if( media >veloc&& media < maximo){
    console.log(" ATENÇÃO: ACIMA DO PERMITIDO MULTA LEVE")

}else{
    console.log(" DENTRO DO LIMITE")
}



