/*Faça um algoritmo que leia um vetor K[10]. Troque todos os elementos de ordem ímpar do vetor com os elementos de ordem par imediatamente posteriores.*/

let K = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
aux = 0; par = 0

for (i = 0; i < K.length; i++){

    if (K[i] %2!= 0){
        
        for (par=i; par<10; par++){

            if (K[par] %2== 0){
                aux = K[i]
                K[i] = K[par]
                K[par] = aux
            }
}}} console.log(K)
