import PromptSync from "prompt-sync"
const prompt = PromptSync()

let objeto = ['papel','sabao','pao','celular','camisa','computador','ovo','bebida','feijao','fuba']
let objnovo1 = ['sapato','camisa','blusa','calça','bermuda']
let estoquenovo = []
let contador
let busca
// mostra o arrey objeto original
console.log("estoque antes de remover")
console.log(objeto)
//remover 3 itens a partir da quarta posição
objeto.splice(4,3)
// mostra como ficou apos a remoção
console.log("Após remover")
console.log(objeto)

for(contador=0; contador<objeto.length;contador++){

    estoquenovo.push(objeto[contador])
    
}
for(contador=0; contador<objnovo1.length;contador++){

    estoquenovo.push(objnovo1[contador])
}
console.log("Estoque novo atualizado")
console.log(estoquenovo)

busca-prompt("PROCURE UM PRODUTO")

if(objnovo1.includes(busca)){// verificar se o que busca recebeu está dentro de arraystoque
    console.log("produto disponivel!")
    console.log("A posição desse iten é: ",objnovo1.indexOf(busca))
}else{
    console.log("Produto não existe")
}






