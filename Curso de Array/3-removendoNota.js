console.log("Removendo Nota");

const notas = [10 , 8, 6, 7, 10];
notas.pop(7);//pop método do array para remover
let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;


console.log(notas);
console.log(`A média é: ${media}`);