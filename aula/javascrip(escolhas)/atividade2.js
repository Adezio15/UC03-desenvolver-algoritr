import PromptSync from "prompt-sync" // Importe do prompt
const prompt = PromptSync() // variavel do prompt

let operacao, n1, n2
operacao = Number (prompt("DIGITE A OPERAÇÃO DESEJADA, 1 PARA BASICA E 2 PARA AVANÇADO: "))

switch(operacao ){
    case 1:
     let operacao2 = Number (prompt("DIGITE A OPERAÇÃO DESEJADA, 1 SOMA, 2 SUBTRAÇÃO, 3 DIVISÃO, 4 MULTIPLICAÇÃO: "))
     let n1 = Number (prompt("DIGITE "))
     let n2 = Number (prompt("DIGITE "))

     switch(operacao2){
        case 1:
        console.log('Soma: ', n1 + n2)
    break 
         case 2:
                console.log('Subtração: ', n1 - n2)
            break
    
        case 3: 
            console.log('Multiplicação: ', n1 * n2)
        break
     
              case 4:
            console.log('Divisão: ', n1 / n2)
        break

     }

     break
     case 2:
        let operacao3 = Number (prompt("DIGITE A OPERAÇÃO DESEJADA, 1 Raiz, 2 Potencia: "))
        let l1 = Number (prompt("DIGITE "))
        switch(operacao3){
            case 1:
             console.log('Raiz quadrada: ', Math.sqrt(l1) )

             break

            case 2:
            let l2 = Number (prompt("DIGITE "))
            console.log('Potenciação: ', pow (l1,l2))

     break
     }

    }

