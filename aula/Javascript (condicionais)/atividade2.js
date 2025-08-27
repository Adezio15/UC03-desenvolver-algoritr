import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let consumo, kwh, situacao
 consumo = Number (prompt ( " Digite o consumo em KWH: "))
 situacao = Number (prompt ( "se estiver atrasada digite 1, se não digite 2: "))
let atraso
if(consumo <=100 && situacao===2){ 
    kwh=consumo*1.20
    console.log(" o valor da sua conta é:", kwh)}

else if(consumo <=100 && situacao===1){ 
        kwh=(consumo*1.20)
        atraso = (kwh * 0.05) + kwh
        console.log(" o valor da sua conta é:", atraso)}

if(consumo > 100 && situacao===2){ 
    kwh=consumo*1.70
    console.log(" o valor da sua conta é:", kwh)}
     
  else if (consumo > 100 && situacao===1){
    kwh=(consumo*1.70)
    atraso = (kwh * 0.05) + kwh
    console.log(" o valor da sua conta é:", atraso)
}
