import PromptSync from "prompt-sync"
const prompt = PromptSync()
let i = 1
let jogador1 = (prompt('digite o nome do jogador1: '))
 let  dado1 
 let pontos1 = 0
 let dado2
 let jogador2 = (prompt('digite o nome do jogador2: '))
 let pontos2 = 0
while(i <= 3){
    let jog1=Number(prompt(`jogue o dado:  ${jogador1}`))
    dado1 = Math.trunc((Math.random() * 6)+1)
    console.log(dado1)
    pontos1 = pontos1 + dado1
    let jog2=Number(prompt(`jogue o dado:  ${jogador2}`))
    dado2 = Math.trunc((Math.random() * 6)+1)
    console.log(dado2)
    pontos2 = pontos2 + dado2
    
i++
}
console.log(jogador1, 'seus pontos foram:' ,pontos1)
console.log(jogador2, 'seus pontos foram:' ,pontos2)

if(pontos1>pontos2){
     console.log('CAMPEAO:', jogador1) 
}else if (pontos1<pontos2){
    console.log('CAMPEAO:', jogador2) 

} else {
    console.log('EMPATE')
}
    



    