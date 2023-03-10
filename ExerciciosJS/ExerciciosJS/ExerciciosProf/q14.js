/*Faça um algoritmo q leia um vetor de 3 elementos, q é o Gabarito de um teste da loteria esportiva,
contendo os valores 1(coluna 1), 2(coluna 2) e 3(coluna do meio). 
P cada apostador, o número do seu cartão e um vetor de Respostas de 13 posições. 
Verifique p cada apostador o números de acertos, comparando o vetor de Gabarito c o vetor de Respostas. 
Escreva o número do apostador e o número de acertos. Se o apostador tiver 3 acertos, mostrar a mensagem "Ganhador".*/

const V = [[1, 0, 0], [0, 0, 1], [0, 0, 1]];

let apostador1 = [[0, 0, 1], [0, 0, 1], [0, 0, 1]];
let apostador2 = [[1, 0, 0], [0, 0, 1], [0, 1, 0]];
let apostador3 = [[1, 0, 0], [0, 0, 1], [0, 0, 1]];

let cont1 = 0; cont2 = 0; cont3 = 0; 

for (let i = 0; i < V.length; i++) {
    if (V[i].indexOf(1) == apostador1[i].indexOf(1)) {
        cont1++;
    }
}
for (let i = 0; i < V.length; i++) {
    if (V[i].indexOf(1) == apostador2[i].indexOf(1)) {
        cont2++;
    }
}
for (let i = 0; i < V.length; i++) {
    if (V[i].indexOf(1) == apostador3[i].indexOf(1)) {
        cont3++;
    }
}
if (cont1 == 3){
    console.log(`O ganhadOr foi o apostador 1 com ${cont1} acertos`);
}else if (cont2 == 3){
    console.log(`O ganhador foi o apostador 2 com ${cont2} acertos`);
}else if (cont3 == 3){
    console.log(`O ganhador foi o apostador 3 com ${cont3} acertos`);
}
else {console.log(`O ganhador não foi encontrado`)}