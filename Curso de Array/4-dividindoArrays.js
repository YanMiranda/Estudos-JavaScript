console.log("Dividindo Array");

const nomes = ['Ana', 'João', 'Juliana', 'Caio', 'Yan', 'Lara',
 'Leo', 'Guilherme','Alice', 'Fabiana', 'Andre', 
 'Renan', 'Gabi', 'Isabela', 'Bia', 'Paula','Alana' ,'Justino']

 console.log(`O tamanho do array é: ${nomes.length}`);
 const sala1 = nomes.slice(0,nomes.length/2)
 const sala2 = nomes.slice(nomes.length/2)

 console.log(`Alunos da sala 1: ${sala1}`);
 console.log(`Alunos da sala 2: ${sala2}`);