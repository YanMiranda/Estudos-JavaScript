console.log("Trabalhando com atribuição de variaveis");

const primeiroNome = "Yan";
const sobrenome = "Miranda";

console.log(primeiroNome , sobrenome); //Maneira mais eficiente
//console.log(nome + " " + sobrenome); Outra opção
console.log(`meu nome é ${primeiroNome} ${sobrenome}`);
//console.log("meu nome é${nome} ${sobrenome}"); *É necessáro usar ``

const nomeCompleto = primeiroNome + sobrenome;//Foi iniciado com "const" que significa constante
console.log(nomeCompleto);

let idade = 29; //declarando variavel
idade = 19;//atribuindo valor
idade = idade + 1;
console.log(idade);