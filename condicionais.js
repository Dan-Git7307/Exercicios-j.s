//JavaScript: Condicionais (if, else, operadores logicos)
//const idade = 15;
/*if (idade >= 18) {
    console.log("Maior de idade!");
    
}

//if (idade >= 18) {
     console.log("Maior de idade!");
 else {
     console.log("Menor de idade!");
}

// Operadores de comparacao
const a = 10;
const b = 5;

console.log("10 > 5:", a > b);
console.log("5 >10:", b > a);

console.log("5 < 10:", a < b);
console.log("5 < 10:", a < b);

console.log("5 >= 10:", a >= b);
console.log("5 >= 10:", a >=  b);
*/


//Operador && (E / AND)
//const idade = 20;
//const temDocumento = true;
//const estaNaLista = true;

//if (idade >=18 && temDocumento && estaNaLista) {
    //console.log("Pode entrar")
//} else {
    //console.log("Se lascou!!!")
//}

//Operador || (OU / OR)

//const temDinheiro = false;
//const temCartao = true;
//const temPix = false;

//if (temDinheiro || temCartao || temPix) {
    //console.log("Pode pagar!!")
//} else {
    //console.log("Nao tem como pagar!!")
//}

//const usuario = "admin";
//const senha = "123";

//const senhaCorreta = (senha === "1234");
//const ehAdmin = (usuario === "admin");
//const ehGerente = (usuario === "gerente");

//if ((ehAdmin && senhaCorreta) || (ehGerente && senha)) {
    //console.log("Acesso Liberado")
//} else {
    //console.log("Acesso negado!")
//}

//if ((ehAdmin || ehGerente) && senhaCorreta) {
    //console.log("Acesso liberado")
//} else {
    //console.log("Acesso negado!")
//}

//const usuario1 = prompt ("usuario");
//const senha1 = prompt ("senha");

//const acessoAdmin = (usuario1 === "admin" && senha1 === "1234");
//const acessoUser = (usuario1 === "user" && senha1 ==="senha123");

//if (acessoAdmin || acessoUser) {
   // console.log("Acesso liberado");
//} else {
    //console.log("Acesso negado!");
//}

//const nota = 85;

//if (nota >= 60) {
    //console.log("Aprovado!")
//} else if (nota >= 85 {
    //console.log("Recuperacao")
//} else {
    //console.log("Reprovado")
//}

//const temp = Number(prompt ( "Temperatura atual C:"));

//if (Number.isNaN (temp)) {
    //console.log("Temperatura invalida!")
//} else if (temp < 0) {
    //console.log("Abaixo de 0 C");
//}else if (temp <= 15){
//console.log("Frio")
//}else if (temp <= 25){
    //console.log("Agradavel")
//}else if (temp <= 35){
    //console.log("Quente")
//}else{
        //console.log("Morte")
    //}

    //if (Number.isNaN(temp)) {
    //} else if(temp < 0){
       // console.log("Abaixo de 0 C");
    //}else if (temp >= 0 && temp <= 15){
     //console.log("Frio")
//}else if (temp > 15 && temp <= 25){
//console.log("Agradavel");
//}else if (temp > 25 && <= 35){
    //console.log("Quente");
//}else {
    //console.log("Morte")
//}

//const cor = prompt("Cor do semaforo vermelho, amarelo ou vermelho")
//.toLowerCase()
//.trim();

//if (cor === "verde"){
    //console.log("siga!")
//}else if (cor === "amarelo!")
    //console.log("atencao")
    //else if (cor === "vermelho!"){
       // console.log("pare!")
    //}else {
        //console.log(" cor invalido")
   // }

    //Calculadora de IMC valida
   //const peso = Number(prompt ("Peso (kg)"));
   // const altura = Number(prompt ("Altura (m)"));

   // if (Number.isNaN(peso) || Number.isNaN(altura)) {
        //console.log("Digite apenas numeros!")
   // } else if (peso <=0 || altura <= 0){
       // console.log("peso e altura devem ser positivos!");
   // }else if (altura > 3){
//console.log("Altura parece estar errada. Digite em metros (ex. 1.76)");
   // }else{
       // const imc = peso / (altura **2);
        //console.log(`Seu IMC: ${imc.toFixed(2)}`);

       // if (imc < 18.5) {
            //console.log("Abaixo do peso!")
      //  } else if (imc < 25) {
          //  console.log("Peso normal")
       // }else if (imc < 30){
           // console.log("Sobrepeso")
    //}else{
        //console.log("Obesidade")
  //  }
//}

// Cauculadora simples
const n1 = Number(prompt ("Numero 1:"));
const operacao = prompt("operecao (+, -, *, /:");
const n2 = Number(prompt ("Numero 2:"));
let resultado;
if (operacao === "+"){
    resultado = n1 + n2;
}else if (operacao === "-"){
    resultado = n1 - n2;
}else if (operacao === "*"){
    resultado = n1 * n2;
}else if (operacao === "/"){
    resultado = n1 / n2;
}else {
    alert("operacao invalida!");
}
alert("Resultado: " = resultado)