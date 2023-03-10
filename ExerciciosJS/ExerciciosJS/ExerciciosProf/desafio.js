/*Faça um algoritmo que leia um vetor K[5]. 
Troque todos os elementos de ordem ímpar do vetor c os elementos de ordem par imediatamente posteriores 
e substitua os valores nulos por 1.*/

const K = [0, 5, 2, 7, 3];

for (let i = 0; i < K.length; i++){

    if (K[i] == 0){
        K[i] = 1;
    }
    if (K[i] %2 == 0){
    
     for (let j = 0; j < K.length; j++){
        if (K[j] %2 != 0){
                troca = K[i];
                K[i] = K[j];
                K[j] = troca;
            }
        }
    }
}
console.log(K)
