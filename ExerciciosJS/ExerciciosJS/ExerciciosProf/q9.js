//Faça um algoritmo q leia um vetor de 100 posições e mostre-o ordenado em ordem crescente.

function geraNumeros(x){
    let lista = []
    for (let i=0; i<x; i++){
      let random_number = Math.random() * 100
      random_number = Number(random_number.toFixed(0))
      lista.push(random_number)
    }
    return lista
  }

  let A = geraNumeros(100);

    for (i = 0; i < A.length; i++){
       for (j = 0; j < A.length; j++){

        if(A[i] < A[j]){
           aux = A[i]
           A[i] = A[j]
           A[j] = aux
    }}} 
console.log(A)
console.log([...new Set(A)]) /*o metodo "set' retira os numeros repetidos*/