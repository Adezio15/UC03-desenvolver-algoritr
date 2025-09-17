export function saque (valor, saldo){
    if(valor>saldo)
console.log('saldo disponivel:', saldo)  
     else{
        saldo=saldo-valor

    }

}
  

export function deposito (valor,saldo){
    saldo=saldo+valor
    return saldo
    
}