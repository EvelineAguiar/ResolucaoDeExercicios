/*Declare um vetor de 20 posições e o preencha com os 5 primeiros números impares e o escreva.*/

function geraNumeros(x){
    let lista = []
    for (let i=0; i<x; i++){
      let random_number = Math.random() * 100
      random_number = Number(random_number.toFixed(0))
      lista.push(random_number)
    } return lista
}

let vetor = geraNumeros(20)
let vetorImpares = [];

for (let i = 0; i < vetor.length; i++){

    if ( vetor[i]%2!= 0 ){ //O resto da divisão diferente de Zero = impares.
        vetorImpares.push(vetor[i])

        if( vetorImpares.length == 10 ){
            break;
        }
}} console.log(vetor); console.log(vetorImpares);