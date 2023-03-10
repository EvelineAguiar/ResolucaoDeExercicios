/*Leia um valor inteiro X (1 <= X <= 1000).
Mostre os ímpares de 1 até X, um valor por linha, inclusive o X, se for o caso.*/

function geraNumeros(x){
    let lista = []
    for (let i=0; i<x; i++){
      let random_number = Math.random() * 10
      random_number = Number(random_number.toFixed(0))
      lista.push(random_number)
    }
    return lista
  };

let X = geraNumeros(1);

for (i = 1; i < X; i++){
    if (i %2!== 0){ //Números impares.
        console.log(`Números impares: \n ${i}`);
    } 
};