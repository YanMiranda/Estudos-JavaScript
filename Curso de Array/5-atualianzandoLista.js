console.log("Atualizando lista");

const listaDeChamada = ['Ana', 'João', 'Juliana', 'Caio', 'Yan', 
'Lara', 'Leo', 'Guilherme'];

//listaDeChamada.splice(1,2,'Rodrigo'); *apagando e adicionandp
listaDeChamada.splice(2,0,'Rodrigo');//apenas adicionando

console.log(`Lista de chamada: ${listaDeChamada}`);