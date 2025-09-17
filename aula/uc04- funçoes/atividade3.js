import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt


let produtos = []

for (let i = 0; i < 4; i++) {
let item = prompt("Digite o nome do produto:");

  produtos.push(item)

}  console.log(produtos)




