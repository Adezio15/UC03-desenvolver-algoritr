import promptSync from 'prompt-sync' //Importação da Biblioteca para leitura de dados
const prompt = promptSync() // Instância da Biblioteca



let nome = prompt('Digite sua idade: ')
let result = nome * 365 
console.log("sua idade é: ", result)