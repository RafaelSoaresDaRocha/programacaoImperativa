//1

let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])

//2

let grupoDeAmigos1 = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos1[1][0])

//3

let str = "uma string qualquer";
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])


// array invertido function

let imprimirInverso1 = [1, 2, 3, 4, 5]
function inverter () {
console.log(imprimirInverso1.reverse())
}

inverter()

// array invertido sem function

let imprimirInverso = [1, 2, 3, 4, 5];
let inverter1 = imprimirInverso.slice(0).reverse();

console.log(inverter1)


//somar array

let Array = [1, 2, 3];
console.log(Array);

function somarArray(a, b, c){
   Array = a + b + c;
   
}

somarArray(1,2,3)

// Simulação Array.join

let array = ["o", "l", "a"]
console.log(Array);

function join(a, b, c){
    Array = a + b + c;
    console.log(Array);
}

join("o","l","a")

// Coleções de Filmes (e mais…)
 
//2
let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  
 "a vida é bela"];

 function maiuscula(){

console.log(filmes.toString().toUpperCase())
 }

maiuscula();

//3
let filmes1 = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  
 "a vida é bela"];

let filmes2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", 
"fortnite"]

function array1(a,b){
return filmes1 + filmes2
}

console.log(array1())

//4

let filmes3 = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  
 "a vida é bela"];

let filmes4 = ["toy story", "finding Nemo", "kung-fu panda", "wally", 
"fortnite"]

let eliminarJogo = filmes4.pop()

console.log(filmes4)
console.log(eliminarJogo)

//5

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

console.log(asiaScores.join('|'));
console.log(euroScores.join('|'));

if (asiaScores.join('|') === euroScores.join('|')) {
	console.log('As notas são Iguais.');
} else {
	console.log('As notas não são iguais.');
}







