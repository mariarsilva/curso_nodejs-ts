console.log("Aula 01");
//ts node: ler, dar um print e um up
//DICA: para exibir os resultados em ts o melhor é digitar no terminal 'ts-node ARQUIVO.ts', apesar que você também pode usar 'tsc ARQUIVO.ts', mas irá apenas compilar, não mostra os outputs.
//DICA2: para executar o node, digite 'node' no terminal
var message = "SÓ PEGA EM TS";
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
var message1 = "sintaxe em tipescript que nao pega em javascript"; //não interpretavel em js, apenas em ts
console.log(message1);
//esse exemplo é valido em js
//const em maiuscula (boa pratica)
var MATH_PI = 3.14;
/*
um pouco do que o @Coleta disse sobre padrões de nomenclatura, as comunidades relacionadas às linguagens mantêm uma "etiqueta" de nomenclaturas. No link abaixo, segue um documento interessante sobre as convenções de escrita de código de javascript/typescript

https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript
*/
//saber o tipo de algo: digite typeof quando tiver o node ativado no terminal
//OBS: evite usar 'any', só quando muito necessário
