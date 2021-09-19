/*
Questão 7 do exercício da semana 1.
Autora: Maria R. Silva
*/

let lista: Array<number> = [29, 72, 98, 13, 87, 66, 52, 51, 36];
let tamanho_lista: number = lista.length;
//let i: number = 0;
//let j: number = 0;
let min: number;
let troca: number;
console.log("Primeira versão da lista:", lista);
for(let i: number = 0; i < tamanho_lista; i++ ){
  min = i;
  console.log("Valor de min antes de passar pelo segundo for:", min);
  for(let j: number = i + 1; j < tamanho_lista; j++){
    if(lista[j] < lista[min]){
      //COMPLETAR
      min = j;
      console.log("Valor de min muda quando o if for satisfeito, para trocar o valor da fila:", min);
    }
  }
  if(i != min){
    troca = lista[i];
    lista[i] = lista[min];
    lista[min] = troca;
    console.log("valor da lista após a alteração do min:", lista);
  }
}

console.log("Versão final da lista", lista);
