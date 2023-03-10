/*Faça um algoritmo que leia um código e um vetor de 50 posições de números. Se o código for zero,
termine o algoritmo. Se o código for 1, mostre o vetor na ordem como ele foi lido.
Se o código for 2, mostre o vetor na ordem inversa, do último até o primeiro.*/

function geraNumeros(x){
    let lista = []
    for(let i=0; i<x; i++){
      let random_number = Math.random() * 100
      random_number = Number(random_number.toFixed(0))
      lista.push(random_number)
    }
    return lista
  }

  let X = geraNumeros(10);
  let codigo = 2
  
    if (codigo == 0){
        console.log("FIM")
    }
    else if (codigo == 1){
            console.log(X)
    }
    else if (codigo == 2){
        for (i=10; i>=0; i--){
            console.log(X[i])
        }
    }