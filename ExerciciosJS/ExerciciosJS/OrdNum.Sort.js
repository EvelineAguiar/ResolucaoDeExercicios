//Oredenando um vetor e um objeto com metodo "sort" + arrow fuction.

const vetor = [1, 4, 2, 5, 3, 6];

let = vetor.sort((a, b) => a - b);

console.log(vetor);

let object =  [
    { name: "Eveline", year: 45, email: "evelineaguiar@pmenos.com" },
    { name: "Ana", year: 35, email: "anasilva@pmenos.com" },
    { name: "maria", year: 25, email: "maria@pmenos.com" },
    { name: "joão", year: 1000, email: "joão@pmenos.com" }
];
object.sort((a, b) => a.year - b.year);

console.log(object);