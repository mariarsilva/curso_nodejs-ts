/*
Questão 2 do exercício da semana 1
*/
function calculaB(a: number): number{
  let b: number; //undefined
  if(a < 5){
    return b = a * 2;
  }else if(a >= 5 && a < 7){
    return b = 10;
  }else {
    return b = 100 - a;
  }
}

console.log("Valor da variável b:", calculaB(1));
console.log("Valor da variável b:", calculaB(5));
console.log("Valor da variável b:", calculaB(7));
