/*
Questão 5 do exercício da semana 1
Autora: Maria R. Silva
*/

function quicksort(e: number, d: number, x: number, list: Array<number>): number{
  let pivo: number;
  if(e <= d){
    pivo = (e + d) / 2;
    if(x == list[pivo]){
      console.log("retorna pivo:", pivo);
      return pivo;
    }else if(x < list[pivo]){
      console.log("retorna quicksort com e = e, d = pivo-1");
      return quicksort(e, pivo - 1,x, list);
    }else{
      console.log("retorna quicksorte com e = pivo + 1, d = d");
      return quicksort(pivo + 1, d, x, list);
    }
  }
  console.log("lista apos o quicksort:", list);
  console.log("retornar -1");
  return -1;
}

let lista: Array<number> =  [0,1,3,6,8,10,12,15,20,26,30,44,66,80];
let alvo: number= 10;
let esquerda: number = 0;
let direita: number = lista.length - 1;
console.log("lista antes do quicksort:", lista);
console.log("resultado quicksort:", quicksort(esquerda, direita, alvo, lista));

