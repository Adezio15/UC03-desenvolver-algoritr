import PromptSync from "prompt-sync"
const prompt = PromptSync()

export class Pessoa {
    #cpf
    constructor (nome, cpf, datanascimento){
        this.#cpf = cpf
        this.nome = nome
        this.datanascimento = datanascimento
        }
        set cpf (cpfpessoa){ 
        this.#cpf = cpfpessoa
        }    
        get cpf(){ 
        return this.#cpf
     }

     mostrarinformacoes() {
        console.log(`
        Nome: ${this.nome}
        Cpf: ${this.#cpf}
        Data de Nascimento ${this.datanascimento}    
            `)
     }
}
export class Funcionario extends Pessoa{
    #salario
    #matricula
    constructor(nome, cpf, datanascimento, cargo, salario, matricula){
        super(nome, cpf, datanascimento)
        this.cargo = cargo
        this.#salario = salario
        this.#matricula = matricula       
        }
        set salario (salariofuncio){ 
        this.#salario = salariofuncio
        }    
        get salario(){ 
        return this.#salario
        }
        set matricula (matriculafuncio){ 
            this.#matricula = matriculafuncio
            }    
            get matricula(){ 
            return this.#matricula
            }
        calculohoraextra(){
            let horaextra = Number ("digite a quantidade de hora extra:")
            this.horaextra =horaextra * 15
            let salarioextra=salarioextra+horaextra
            console.log('valor do Salario + hora extras:', salarioextra)
        }
    } export class Gerente extends Funcionario{
    constructor(setor, quantidadeequipe){
        super(salario,matricula,cargo)
    this.setor=setor
    this.quantidadeequipe=quantidadeequipe
    }
    calculobonificação(){
    let bonus
if ( this.quantidadeequipe >= 10){
    bonus = this.salario * 0.15
console.log ('seu bonus é de:', bonus)

}else { bonus=this.salario*0.7
    console.log('seu bonus é de :', bonus)
    }
    }
    }
export class Diretor extends Funcionario{
#participacaolucros
constructor(participacaolucros, departamento, tempodirecao, cargo, salario, matricula ){
    super(cargo, salario, matricula)
this.#participacaolucros = participacaolucros
this.departamento = departamento
this.tempodirecao = tempodirecao
}
set participacaolucros (participacaolucros){ 
    this.#participacaolucros = participacaolucros
    }    
    get participacaolucros(){ 
    return this.#participacaolucros
    }
calculargratificacao(){
let bonusgrat
if (this.#participacaolucros == 'sim' && this.tempodirecao > 5){
bonusgrat = this.salario * 0.30
}if (this.tempodirecao < 5 && this.tempodirecao > 2 ){
    bonusgrat = this.salario * 0.25
}if ( this.#participacaolucros < 2){
    bonusgrat = this.salario * 20
}else { this.#participacaolucros == 0
    bonusgrat = this.salario * 15
}
}
}
export class Dono extends Pessoa {
    #patrimonio
    #participacaoacionaria
    constructor(patrimonio, participacaoacionaria, nome, cpf, datanascimento ){
        super(nome, cpf, datanascimento)
    }
set patrimonio (patrimonio){ 
    this.#patrimonio = patrimonio
    }    
    get patrimonio(){ 
    return this.#patrimonio
    }
    set participacaoacionatia (participacaoacionatia){ 
        this.#participacaoacionaria = participacaoacionatia
    }    
        get participacaoacionatia(){ 
        return this.#participacaoacionaria
    }
    investir(valor){
         valor = prompt ('Qual o valor que deseja investir? ')
         if ( valor > 0){
            console.log (" O valor investido é de :", valor)
         }else {
        console.log (" O Valor precisa ser maior que ")
         }
    } 
    retirarlucros (valor){
        valor = prompt ('Qual o valor que deseja retirar? ')
        if (valor > 0){
            console.log (" O valor retirado é de :", valor)
        }
        }
}



