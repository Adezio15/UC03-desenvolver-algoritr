import PromptSync from "prompt-sync"
const prompt = PromptSync()

let semana = ['segunda','terça','quarta','quinta','sexta','sabado','domingo']
let turno = ['cafe','almoço','janta']
let cardapio=[]

for (let i=0; i < 2; i++){
    cardapio [i] = []
for (let j=0; j < 2; j++){
    cardapio [i][j] = prompt(`digite sua opção ${semana[i]} - ${turno[j]}:`)

}   
} console.table(cardapio)


let dia = prompt('qual o dia que deseja alterar?')


let horario = prompt(` qual o turno que deseja alterar? `)

cardapio [semana.indexOf(dia)][turno.indexOf(horario)] = prompt(`qual o prato que deseja inserir? `)



 console.table(cardapio)




