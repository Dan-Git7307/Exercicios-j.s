let minhaVariavel = 10;
console.log(minhaVariavel);

minhaVariavel = "Ola, Mundo!!"
console.log(minhaVariavel);

minhaVariavel = true
console.log(minhaVariavel)

let numero = 10;
let texto = "20";

let resultado = numero + texto;
console.log(resultado)

// Isso e um comentario de linha unica
/**
 * Isso e um comentario
 * de multiplas
 */
console.log("Isso vai executar"); // mais isso aqui e ignorado

//Case Sensitive
let nome = "Lucas";
let Nome = "Maria";
let NOME = "João";
console.log(nome)
console.log(Nome)
console.log(NOME)

// Palavras Reservadas
//let , const, var , if, else, for, while, function, return, class, new, switch, case

//Regras de Nomenclatura
//Pode comecar com letra, _ ou $
//Pode conter letras, numeros, _ ou $
//NÃo pode: comecar com numero
//Não pode ter espacos
//Não pode: usae acentos

let nomes2;
let nomeCompleto;
let _contador;
let idade2;

// Nomes de funcões comeca com verbos:
function caucularMedida(){

}
function buscarUsuario(){

}

//Tipos Primitivos
//NUMBER - Numero
const preco = 19.9;
console.log(typeof preco);

//STRING - texto
const nome3 = "Lucas"
console.log (typeof nome3);

//BOOLEAN - verdadeiro ou falso
const ativo = true;
console.log(typeof ativo);

//Null - ausência intencional de valor
const vazio = null;
console.log(typeof vazio);

//UNDERFINED - variavel sem valor
let indefinido;
console.log(typeof indefinido);

//BIGINT - numeros muito grandes
const grande = 9007199254740993n;
console.log(typeof grande);

//Valores Especiais: NaN e Infinity
////Infinity - divisão por zero
console.log(5 / 0);
console.log(-5 / 0);

//NaN (Not a Number)- operacão invalida
console.log("abc" * 3);
console.log(Math.sqrt(-1));
console.log(0 / 0);

//Checar se e NaN
//console.log(Number.isNaN("abc" * 3));

//function caucularTotal(preco, quantidade){
   //const total = preco * quantidade;
//if (Number.isNaN(total)) {
    //console.log("Erro: preco ou quantidade invalidos");
   // return 0;
//}
//return total;
    
//}  

//console.log(caucularTotal("abc", 2));
//console.log(caucularTotal(10, 5));

//Strings e Template Literais
// // Aspas simples, duplas ou crase
//const nome4 = "Lucas";
//const nome5 = "Maria"
//const nome6 = `Joao`;

//Propriedades e metodos
//const nomeCompleto2 = "Lucas Lacerda";
//console.log(nomeCompleto2.length);
//console.log(nomeCompleto2.toUpperCase());
//console.log(nomeCompleto2.toLowerCase());

// TEMPLATE STRING(crase) - permite inserir variaveis
//const nome7 = "Lucas";
//const idade = 20;

//console.log(`Ola, meu nome e ${nome7} e tenho ${idade} anos. `);


//Convercoes de Tipo
//console.log(Number("123"));
//console.log(parseInt("10.9"));
//console.log(parseFloat("10.9"));
//console.log(String(123));
//console.log(Boolean(0));
//console.log(Boolean(1));
//console.log(Boolean(""));
//console.log(Boolean("oi"));

//const texto2 = prompt("Digite um numero:");
//console.log(texto2 + 5);
//alert(texto2 + 5);

//const numero2 = Number(prompt("Digite um numero:"));
//console.log(numero2 + 5);
//alert(numero2 + 5);

//Operadores Aritmeticos
//console.log(2 + 3) //soma
//console.log(5 - 2) //subtracao
//console.log(4 * 2) //multiplicacao
//console.log(10 / 2) //divisao
//console.log(10 % 3) // resto da divisao
//console.log(2 ** 3) //potencia

//console.log(2 + 3 * 4);
//console.log((2 + 3) * 4);

//Operadores de Comparacao
//console.log(5 == "5"); // true - valores sao iguais (apos conversao)
//console.log(5 == 5); //true - valores sao iguais

//console.log(5 === "5"); // false - tipos diferentes (number vs String)
//console.log(5 == 5) //true - valor e tipo iguais

//console.log(5 != "5"); // false - valores nao sao  diferentes (apos conversao)
//console.log(5 != 7); //true - valores sao diferentes

//console.log(5 !== "5"); //true - sao diferentes  (tipos diferentes)
//console.log(5 !== 5); //false - nao sao diferentes (identicos)

//console.log(!true);
//console.log(!false);

//const idade3 = 15;
//console.log(idade3 >= 18);
//console.log(!(idade3 >= 18));

//const nome8 = "";
//const nomeVazio = nome8 === "";
//console.log(nomeVazio)

//const nomeNaoVazio = nome8 !== "";

//console.log(!!true);

//Estrutura Sequencial (Entrada - processamento - saida)


//Entrada
//const nome9 = prompt("Digite seu nome:")
//processamento
//saida
//console.log("Ola," + nome9 + "!");

//Entrada  Soma de dois numeros
//const n1 = Number(prompt ("Digite o primeiro numero:"));
//const n2 = Number(prompt ("Digite o primeiro numero:"));
//processamento
//const soma = n1 + n2;
//Saida
//alert("Resultado: " + soma);

//Dobro de um numero
//const numero9 = Number(prompt("Digite um numero:"));
//const dobro = numero9* 2;
//alert(`O dobro de ${numero9} e ${dobro}`);

//Media de duas notas 
//const nota1 = Number(prompt("Primeira Nota:"));
//const nota2 = Number(prompt ("Segunda Nota:"));

//const media = (nota1 + nota2) / 2;

//console.log(`Media: ${media}`);

//alert(`Media: ${media.toFixed(1)}`);

//Idade detalhada
//Converter anos em meses, dias, horas e minutos.

//Faca um programa que leia a **idade de uma pessoa em anos** e mostre a mesma

//-meses
//-dias
//-horas
//-minutos
//use **365 dias por ano** como simplificacao.

const anos = Number(prompt("Digite sua idade em anos:"));
const meses = anos * 12;
const dias = anos * 365;
const horas = dias * 24;
const minutos = horas * 60;

console.log(`Idade informada: ${anos} anos`);
console.log("-------------------")
console.log(`${meses} meses`);
console.log(`${dias} dias`);
console.log(`${horas} horas`);
console.log(`${minutos}minutos`);

// Celsius - Fahrenheit
// Converter temperatura de Celusius para Fahrenheit

// Formula: F = (c x 9/5) + 32

const Celsius = Number(prompt("Temperatura em C:"));
const  f = (Celsius * 9/5) + 32;
alert(`${Celsius} C = ${f.toFixed(1)} F`);