/*Leia 6 valores. Mostre quantos destes valores digitados foram positivos.
Mostrar a média de todos os valores positivos, c um dígito após o ponto decimal.*/

let valores = [1, 3, -4, 16, 17, -9]; //6 valores.
let soma = 0; media = 0;
positivos = [];

for (let i = 0; i < 6; i++){

    if (valores[i] > 0){ //Positivos.
        positivos.push(valores[i]);
    }
}
for (let k = 0; k < positivos.length; k++){ //Percorrer a lista positivos = [].
     soma = soma + positivos[k];
}
media = soma / positivos.length;

console.log(`A MÉDIA É = ${media}`); 