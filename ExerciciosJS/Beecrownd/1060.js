/*Leia 6 valores. Negativos ou positivos. Desconsidere nulos. 
Mostre a quantidade de positivos digitados.*/

let valores = [1, -1, 6, 5, 7, -4]; 
pos=0;

for (i = 0; i < 6; i++){

    if (valores[i] >= 1){
        pos++
    }
} console.log(`${pos} Positivos`)