/*
Questão 4 do exercício da semana 1.
Autora: Maria R. Silva
*/

function fatorial(num: number): number{
  if(num == 1){
    console.log("retorna 1");
    return 1;
  }else{
    console.log(num);
    return num*fatorial(num - 1);
  }
}
let n: number = 5;
//let n_string: string = prompt("Digite um numero:");
//let n_string = prompt("Digite um numero:");
//let n: number = parseInt(n_string);
console.log(fatorial(n));
