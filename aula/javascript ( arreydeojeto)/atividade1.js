import PromptSync from "prompt-sync"
const prompt = PromptSync()

export class Cliente {
    #cpf
    #contato
    constructor (cpf, contato, nome){
        this.#cpf = cpf
        this.#contato = contato
        this.nome = nome
        }
        set cpf (cpfpessoa){ 
        this.#cpf = cpfpessoa
        }    
        get cpf(){ 
        return this.#cpf
     }
     set contato (contato){ 
        this.#contato = contato
        }    
        get contato(){ 
        return this.#contato
     }
    }
    export class Quarto {
        constructor (numero, tipoquarto){
            this.numero = numero
            this.tipoquarto = tipoquarto
        }
     }
     export class Reserva {
    constructor ( quarto, datareserva, cliente){

        this.quarto = quarto
        this.datareserva = datareserva
        this.cliente = cliente
    }
     }
     export class Hotel {
    constructor ( nome, quartos = [], reservas){
        this.nome = nome
        this.quartos = quartos
        this.reservas = reservas

     }
    adicionarquartos(numero){
        this.quartos.push(numero)
        console.log ('Quarto adicionado')
        
    }
    }

