// variáveis:

/*
let: usamos o let quando vamos alterar o valor da variável ao longo do código
const: usamos o const quando NÃO vamos alterar o valor da variável ao longo do código.

ao tentar-mos alterar o valor da variável const, certamente retornará um erro.

*/

let idade: number = 22;
const nome: string = "luiz";

/* 

Podemos criar variáveis sem definir um valor (não funciona com o const, pois depois a variável precisaria receber um valor, e o const não aceita.)

*/

let senha: string;
let email: string;

console.log("Olá Mundo")

/* 

Operadores de comparação em typescript:

== : comparação de valor
=== : comparação de valor e tipo
!= :  diferença de
> : maior que
< : menor que
>= : maior ou igual a
<= : menor ou igual a

operadores lógicos:

&& : operador lógico AND (E)
|| : operador lógico OR (OU)
! : operador lógico NOT (NÃO)


*/

// Arrays em typescript:

let frutas: string[] = ["maçã","uva","melancia"]

// como adicionar novos valores as arrays:

// frutas.push("banana") // adiciona um novo valor no final da array
// frutas.unshift("banana") // adiciona um novo valor no início da array    
// frutas.splice(1,0,"banana") // adiciona um novo valor em uma posição específica da array (no caso, na posição 1)

// como remover valores das arrays:
// frutas.pop() // remove o último valor da array
// frutas.shift() // remove o primeiro valor da array
// frutas.splice(1,1) // remove um valor em uma posição específica da array (no caso, na posição 1)
