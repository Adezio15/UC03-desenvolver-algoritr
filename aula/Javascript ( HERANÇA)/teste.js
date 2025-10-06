import PromptSync from "prompt-sync"
import {Pessoa, Funcionario, Gerente, Diretor, Dono } from "./atividade1.js"

const prompt = PromptSync()


let func = new Funcionario('Adezio', '036.632.985-52', '26/10/2025', 'Analista', 1200, '2536')
let ger = new Gerente('Adezio', '036.632.9856-52', '26/10/2025', 1200, '2536', 'Analista', 'compras', 35)
let dir = new Diretor("Adezio",'111.1111.111','04/02;1884', "diretor", 1200, '33', 'sim', 'comercial', 6)
let don = new Dono('Adezio', '036.632.985-52', '26/10/1985', 60.00000, 'sim')


console.log('calcular hora extra')
func.calculohoraextra()
console.log('calcular bonificação')
ger.calculobonificação()
console.log('calcular gratificação')
dir.calculargratificacao()
console.log('calcular investimento')
don.investir()
console.log('retirar lucros')
don.retirarlucros()

