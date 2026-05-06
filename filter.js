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
console.log(maiorconst maior = numeros.find((numero) =>{
    return numero > 18;
}););*/

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

/*const people = [
    {name: "Lucas",},
    {name: "Maria",},
    {name: "Joao",},
    {name: "Ana",},
];*/

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

// Use reduce para descobrir: qual o maoir numero do array.
/*const numeros = [10,45,7,99,32];
const maior = numeros.reduce((acc,numero) => {
     if(numero > acc) {
            return numero
     }
     return acc;

}, numeros[0]);

console.log(maior);*/

// reduce

/*const produtos = [
    {nome: "Mouse", preco: 50},
    {nome: "Teclado", preco: 200},
    {nome: "Monitor", preco: 900},
    {nome: "Notebook", preco: 3000},
];

const resultado = produtos.filter((produto) => {
    return produto.preco > 100;
})
.map((produto) => {
    return produto.nome;
});
console.log(resultado);*/

// reduce

/*const filmes = [
    {nome: "Vingadores", nota:9 },
    {nome: "Batman", nota:7 },
    {nome: "Dragon Ball", nota:10 },
    {nome: "Matrix", nota:8 },
];*/

//use filter para pegar notas >= 8
//use map para pegar apenas nomes
//use find para encontrar "Batman"
//Use reduce para somar todas as notas

/*const notas = filmes.filter((filmes) => {
    return filmes.nota >= 8;
});
console.log(notas);

const nomes = filmes.map((filmes) => {
    return filmes.nome;
});
console.log(nomes);

const batman = filmes.find((filme) => {
    return filme.nome === "Batman";
});
console.log(batman);

const somaNotas = filmes.reduce((acc, filme) => {
    return acc + filme.nota;
});
console.log(somaNotas);*/


// Switch
/*const dia = 3;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
      case 2:
        console.log("Segunda");
        break;
        case 3:
        console.log("Terca");
        break;
    default:
        console.log("Dia invalido!");
        break;
}*/
// calculadora
/*const n1 = 10;
const n2 = 5;

const operacao = "+";

switch (operacao) {
    case "+":
        console.log(n1 + n2);
        break;
case "_":
console.log(n1 - n2);
break;
case "*":
    console.log(n1 * n2);
    break;
    case "/":
        console.log(n1 / n2);
        break;
    default:
        console.log("Operecao invalida");
}*/

// Faca um sistema de notas :
//A - Excelente
//B - Bom
//C - Regular
// D- Ruim

/*const nota = prompt("Digite uma nota: A, B, C, ou D");
switch (nota) {
    case "A":
        console.log("Excelente");
        break;
        case "B":
            console.log("Bom");
            break;
            case "C":
                console.log("Regular");
                break;
                case "D":
                    console.log("Ruim");
                    break;
           default:
        console.log("Invalido!");
}*/

// Crie um sistema de menu de videogmae:

//1 - Jogar
//2 - Configuracoes
//3 - Creditos
//4 - Sair 

/*let opcao;

do {
    opcao = Number(prompt(`
        === Menu ===
        1- Jogar
        2- Configuracoes
        3- Creditos
        4- Sair`

    ));

    switch (opcao) {
        case 1:
            console.log("Iniciando jogo...")
            break;
            case 2:
            console.log("Abrindo configuracoes...")
            break;
            case 3:
                console.log("Criado por Lucas...")
        default:
            break;
    }

} while (opcao !== 4);*/



// Exercicios Map , find , filter e reduce

//exercicio 1 

const notas = [4,7,9,3,10,5];
const notasAprovadas = notas.filter((nota => nota >= 7),
    
)
console.log(notasAprovadas)

//Exercicio 2 

const palavras = ["sol", "mar", "computador", "lua", "código"];
const palavtras = palavras.filter((palavra => palavra.length >= 4),
    
)
console.log(palavtras)

// Exercicio 3 

const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];
const animaisComc = animais.filter((animal => animal[0] === "c"));
console.log(animaisComc);