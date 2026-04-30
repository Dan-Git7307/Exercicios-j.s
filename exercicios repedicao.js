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
/*const N = Number(prompt("Digite um numero"));
let soma = 0;

for (let i = 1; i <= N; i++) {
  soma += i;
}
console.log(`Soma de 1 ate ${N} = ${soma}`);*/


/*Exercicio 1 Intermediario
/*console.log("numeros pares de 0 a 50\n");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(i);           
}

}*/

//contagem regressiva de 10 ate 0

/*let tempo = 10;
console.log("Iniciando contagem regressiva...");

while (tempo > 0) {
 console.log('${tempo}...' + tempo);
 
 tempo--

}
console.log("Deu certo!!")*/


//jjogo de advinhacao
/*const numeroSecreto = Math.floor(math.random() * 100) + 1;

let palpite = 0;
while (palpite !== numeroSecreto) {
   palpite = Number(prompt("Adivinhe o numero (1 a 100:"));

   if (palpite > numeroSecreto) {
    console.log("0 numero e menor")
   } else if (palpite <numeroSecreto) {
    console.log("o numero e maior");
   }else {
    console.log("Acertou!!!");
   }*/


// Exercicios condicionais

// 1 - Verificar maioridade:
/*const idade = Number(prompt("Digite sua idade:"))
if (idade >=18) {
    console.log ("Maior de idade")
} else {
    console.log("Menor de idade:")
}

// 2 - Verificar se um número é positivo ou negativo:
const numero = Number(prompt("Digite um número:"))
if (numero >=1) {
    console.log ("Número positivo")
} else {
    console.log ("Número negativo")    
}

// 3 - Aprovação em uma prova:
const nota = Number(prompt("Digite sua nota:"))
if (nota >=60) {
    console.log ("Aprovado")
} else {
    console.log ("Reprovado")
}

// 4 - Verificar se um número é positivo, negativo ou zero:
const numero1 = Number(prompt("Digite um número:"))
if (numero1 >0) {
    console.log ("Positivo")
} else if (numero1 <0) {
    console.log ("Negativo")
}
else {
    console.log("Zero")
}

// 5 - Classificação de idade:
const idade1 = Number(prompt("Digite sua idade"))
if (idade1 <=12) {
    console.log("Criança")
} else  if (idade1 <=17){
    console.log("Adoslecente")
}
if (idade1 >=18)
    console.log ("Adulto")

//6 Verificar se um número é par ou ímpar:
const numero2 = Number(prompt("Digite um número"))
if (numero2 %2 == 0) {
    console.log("Par")
} else {
    console.log("Impar")
}

INTERMEDIARIO

// 1 - Calculadora simples:
const numero3 = Number(prompt("Digite o primeiro numero:"))
const numero4 = Number(prompt("Digite o segundo numero:"))
const operacao = prompt("Digite a operação: (+, -, *, _)")

let resultado;

if (operacao === "+") {
    resultado = numero3 + numero4;
} else if (operacao == "-") {
    resultado = numero3 - numero4;
} else if (operacao === "*") {
    resultado = numero3 * numero4;
} else if (operacao === "/") {
    resultado = numero3 / numero4;
} else {
    alert("operação inválida");
}
alert("Resultado:" = resultado)

/// 2 - Maior entre três números:

let num1 = Number(prompt("Digite o primeiro numero"))
let num2 = Number(prompt("Digite o segundo numero"))
let num3 = Number(prompt("Digite o terceiro numero"))

if (num1 > num2 && num1 > num3) {
    alert ("O maior numero é: " + num1);
} else if (num2 > num3 && num2 > num1) {
    alert("O maior numero é: "+ num2);    
} else {
    alert("O maior numero é: " + num3);*/

    // Soma dos digitos
    let numero = Number(prompt("Digite um numero inteiro"));

    let soma = 0;

    while (numero > 0) {
       let digito = numero % 10;
       soma += digito;

       numero = Math.floor(numero/10);
    }

    console.log("Soma dos digitos:", soma)