//Filter

//callback
/*array.metodo((element, index,array) => {
    
});*/

//forEach
/*const frutas = ["Maca", "Banana", "Uva"];

frutas.forEach((element, index) => {
    console.log(index, element)
});*/

/*for (let i = 0; i < frutas.length; i++) {
 console.log(i, frutas[i])
}*/

/*const alunos = ["Lucas", "Maria", "Joao"];

alunos.forEach((nome, index) => {
   console.log(`${index + 1} aluno: ${nome}`);
});*/


/*const novoArray = array.filter((element) => {
    return condicao;
});

/*const maiores = people.filter((person) => {
    return person.age >= 18;
});
console.log(maiores)*/

/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const pares = numeros.filter((numero) => {
    return numero % 2 === 0;
});

console.log(pares)*/

//crie um array com varios numeros.
//use filter para mostrar apenas os numeros maiores que 50.

/*const nums = [10, 55,80,20,100];
const maiores = nums.filter((n) =>{
   return n > 50;
});

console.log(maiores);*/

//Map
 /*const people = [
    {name: "Lucas", age: 35},
    {name: "Maria", age: 17},
    {name: "Joao", age: 18},
    {name: "Ana", age: 22},
];*/

/*const novoArray = array.map((element) =>{
    return novoValor;
});*/

/*const nomes = people.map((person) =>{
    return person.name.toUpperCase();
});
console.log(nomes);*/

/*const numeros = [1, 2, 3, 4, 5];

const dobro = numeros.map((numero) =>{
    return numero * 2;
});
console.log(dobro);*/

/*const produtos = ["Mouse", "Teclado", "Monitor"];

const frases = produtos.map((produto) =>{
   return `Produtos: ${produto}`
});
console.log(frases)*/

/*const pessoas = [
    {nome: "Lucas", idade: 35},
    {nome: "Maria", idade: 17},
];

const resultado = pessoas.map((pessoa) =>{
    return {
         nome: pessoa.nome,
         maiorIdade: pessoa.idade >= 18
    };
});

console.log(resultado);*/

//Use map para transformar um array de precos em precos com desconto de 10%

/*const precos = [100, 200, 300];

const comDesconto = precos.map((valor) =>  valor * 0.9);
console.log(comDesconto);*/

//use map para transformar : [1,2,3,4] em ["Numero 1", "Numero 2..."]

/*const numeros = [1,2,3,4];

const resultado = numeros.map((numero) =>{
    return `Numero ${numero}`
});
console.log(resultado);*/



//Find
/*const item = array.find((element) => {
    return condicao;
});*/

/*const people = [
    {name: "Lucas", age: 35},
    {name: "Maria", age: 17},
    {name: "Joao", age: 18},
    {name: "Ana", age: 22},
];*/

/*const maria = people.find((person) =>{
    return person.name === "Maria";
});
console.log(maria);*/

//Encontrar numero
 
/*const numeros = [5,10,15,20,25];
const maior = numeros.find((numero) =>{
    return numero > 18;
});
console.log(maior);*/

/*const usuarios = [
    {id:1, nome: "Lucas"},
    {id:2, nome: "Maria"},
    {id:3, nome: "Joao"}
];
const usuario = usuarios.find((u) =>{
    return u.id === 2;
});
console.log(usuario);*/



// Encontre o primeiro numero negativo do array.
/*const numeros = [5,8,-2,10,-7];

const numeroNegativo =numeros.find((numero) => {
    return numero < 0;
});
console.log(numeroNegativo);*/


//Reduce
/*array.reduce((acc, element) =>{
    return novoACC;
}, valorInicial);*/

/*const numeros = [10,20,30];

const soma = numeros.reduce((acc, numero) =>{
    console.log("ACC:", acc);
    console.log("Numero atual:", numero);
    return acc + numero;
}, 0);
console.log(soma);*/

/*const totalIdade = people.reduce((acc, person) =>{
    return acc + person.age;
}, 0);
console.log(totalIdade);*/

const people = [
    {name: "Lucas",},
    {name: "Maria",},
    {name: "Joao",},
    {name: "Ana",},
];

/*const nomes = people.reduce((acc, person) =>{
    return acc + " " + person.name;
}, "");
console.log(nomes);*/


//Multiplicar numeros
/*const numeros = [2,3,4];
const Multiplicar = numeros.reduce((acc, numero) =>{
    return acc * numero;
}, 1)
console.log(Multiplicar);*/


//Somar precos de produtos

/*const carrinho = [
{produto: "Mouse", preco:50},
{produto: "Teclado", preco:100},
{produto: "Monitor", preco:900}
];

const total = carrinho.reduce((acc, preco) =>{
    return acc + preco.preco;
}, 0)
console.log(total);*/

// contar quantidade de letras

/*const palavras = ["oi", "javascript", "html"];

const totalLetras = palavras.reduce((acc, palavras) =>{
    return acc + palavras.length;
}, 0)
console.log(totalLetras);*/