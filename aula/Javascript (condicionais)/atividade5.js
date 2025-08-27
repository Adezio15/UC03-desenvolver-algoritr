import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt


let idade, situacao

idade = Number (prompt("Digite sua idade: "))
situacao = Number (prompt("Se for estudante digite 1, se não digite 2: "))



if(idade<=6){
    console.log("ENTRADA GRATUITA!.")}

else if (idade >= 6 && idade <= 17 || situacao ==1){
     

    console.log(" TARIFA MEIA!! ")
    
    } else if (idade >=18 && idade<=59){
        console.log(" TARIFA INTEIRA!! ")
    
    }
