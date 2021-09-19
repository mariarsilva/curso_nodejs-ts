/*
Questão 3 do exercício da semana 1.
Autora: Maria R. Silva
*/

//let a: number = 5;
let b: number = 1;

for(let a = 5; a > 1; a--){
  b = b + b * a;
  console.log(b);
}
console.log("Valor de b:", b);

/*
//SEI LA PQ MAS ESSA MERDA NÃO EXECUTA
function calculaB(a: number): number{
  let b: number = 1;
  while(a > 1){
    b = b + b * a;
    a++;
  }
  return b;
}

console.log("Valor de b:", calculaB(5));
*/
