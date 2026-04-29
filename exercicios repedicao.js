// Exercicio 1
/*for (let i =1; i <= 10; i++) {
 console.log(i);
}*/

//Exercicio 2
/*let numero = Number(prompt("Digite um numero:"));
for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}*/

//Exercicio 3
const N = Number(prompt("Digite um numero"));
let soma = 0;

for (let i = 1; i <= N; i++) {
  soma += i;
}
console.log(`Soma de 1 ate ${N} = ${soma}`);