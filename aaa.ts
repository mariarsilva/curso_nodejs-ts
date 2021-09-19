/*
Questão 3 do exercício da semana 1.
Autora: Maria R. Silva
*/

function calculaB(a: number): number{
  let b: number = 1;
  while(a > 1){
    b = b + b * a;
    a++;
  }
  return b;
}

console.log("Valor de b:", calculaB(5));
