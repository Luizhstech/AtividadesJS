console.log ("Atração Radical");
alert ("Informe sua idade e altura");

const idade = Number (prompt ("Qual sua idade ?"));
const altura = Number (prompt ("Qual sua altura ?"));
const podeEntrar = idade >= 16 && altura >= 1.60;

if (podeEntrar) {
  alert ("Pessoa apta para entrar na atração radical!");  
} else {
  alert ("Pessoa não está apta para entrar na atração radical!");
}