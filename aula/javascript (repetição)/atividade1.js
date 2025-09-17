import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt
let qunt=1
console.log('quantidades: PREÇOS')
for(let i = 6.99; i <= 50; i = i * 2){

    console.log(  qunt++, "\t-\t"  , i)
}




