/*Leia um valor inteiro X. Apresente os 6 valores ímpares consecutivos a partir de X,
um valor por linha, inclusive o X ser for o caso.*/

function geraNumeros(x){
    let lista = []
    for(let i=0; i<x; i++){
      let random_number = Math.random() * 10
      random_number = Number(random_number.toFixed(0))
      lista.push(random_number)
    }
    return lista
};

let X = geraNumeros(1);
let impar = [];

for (i = 1; i < 6; i++){

    if ( X[i] %2!= 0 ){
        X.push(impar)

        console.log(X)
        console.log(`Os valores impares são: ${impar}`)
}};
  