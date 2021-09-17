console.log("Aula 01")

//ts node: ler, dar um print e um up
//DICA: para exibir os resultados em ts o melhor é digitar no terminal 'ts-node ARQUIVO.ts', apesar que você também pode usar 'tsc ARQUIVO.ts', mas irá apenas compilar, não mostra os outputs.
//DICA2: para executar o node, digite 'node' no terminal

var message: string = "SÓ PEGA EM TS";
console.log(message);

/*
IMPORTANTE: as linhas abaixo funcionam em js (que aceita a mudança de tipo de uma variavel), mas não em ts (que não aceita isso)
message = 3424;
console.log(message);
*/
//deixando de ser um javascript valido: usando tipos (tipos não existem no js)
//obs: em js a tipagem é dinamica, mas é 'fraca'
//obs 2: em typescript ele é explicitamente tipado, mas tambem nao é tão forte, por vir do js
//a linguagem ser dinamica tem a ver com o seu contexto, js é uma linguagem para web então tinha maior flexibilidade na tipagem
const message1: string = "sintaxe em tipescript que nao pega em javascript" //não interpretavel em js, apenas em ts
console.log(message1)

//esse exemplo é valido em js

//const em maiuscula (boa pratica)
const MATH_PI: number = 3.14

/*
um pouco do que o @Coleta disse sobre padrões de nomenclatura, as comunidades relacionadas às linguagens mantêm uma "etiqueta" de nomenclaturas. No link abaixo, segue um documento interessante sobre as convenções de escrita de código de javascript/typescript

https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript 
*/

//saber o tipo de algo: digite typeof quando tiver o node ativado no terminal

//OBS: evite usar 'any', só quando muito necessário

//3 FORMAS DE FUNÇÕES VÁLIDAS
function funcao1(){
  console.log("'function funcao1()' é uma função válida");
}

const funcao2 = function (){
  console.log("'const funcao2 = function ()' é uma função válida")
}

let funcao3 = () => console.log("'let funcao3 = () =>' é uma função válida"); //OBS: mais usada em programação funcional

funcao1();
funcao2();
funcao3();

function printTypes(...args:any):string[] {
  return args.map(arg => typeof arg);
}
console.log(printTypes(10,20,"type", "java", true));

function paridade(numero: number): string{
  return numero % 2 == 0 ? '${numero} é par' : '${numero} é impar';
}
paridade(3);
paridade(2342342356);

const impares: number[] = [1,3,5,7,9];
const pares: Array<number> = [2,4,6,8];

for (let i of pares){
  console.log(i);
}
for (let i in impares) {
  console.log(i);
}
