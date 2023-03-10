/*Faça um algoritmo q leia um vetor G de 6 elementos caracter que representa o gabarito de uma prova. 
P cada um dos 5 alunos da turma, leia o vetor de respostas (R) do aluno e conte o número de acertos. 
Mostre o nº de acertos do aluno e uma mensagem APROVADO, se a nota for maior ou igual a 6; e mostre uma mensagem de
REPROVADO, caso contrário.*/

const G = ["c", "c", "b", "a", "e", "d"];
const alunos = [
    {
        nome: "Ana",
        respostas: ["c", "c", "b", "a", "e", "d"]
    }
]
let nota_da_ana = 0;
for (let i = 0; i < G.length; i++){
    if (G[i] === alunos[0].respostas[i]){
        nota_da_ana ++;
    }
}
if(nota_da_ana >= 6){
    console.log("Aprovado");
}else{
    console.log("Reprovado");
}



