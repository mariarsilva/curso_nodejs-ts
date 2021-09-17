//ARRAYS
const numbers1: Array<number> = [1,2,3,4,5,6,7,8,9,0];

const numbers2: number[] = new Array(9,8,7,6,5,4,3,2,1,0);

console.log("numbers1: ", numbers1, "numbers2: ", numbers2);

//ADICIONAR ELEMENTO AO ARRAY
numbers1.push(10);
console.log("numbers1 + push: ", numbers1);

//TIRA O ULTIMO ELEMENTO DO ARRAY
numbers2.pop();
console.log("numbers2 + pop: ", numbers2);

//TIRA UM NUMERO MOMENTANEAMENTE DO ARRAY (VOCÊ PODE CRIAR UMA COPIA PARA MANTER ESSE VALOR)
console.log("numbers1 + filter", numbers1.filter(n => n !== 6)); //remove o 6  momentaneamente
console.log("numbers1 depois do filter volta ao normal: ", numbers1);

//DIVIDIR O ARRAY EM DOIS
numbers2.splice(5,1, 9790640923);
console.log("numbers2 + splice: ", numbers2);
console.log("numbers2 depois do splice não volta ao estado anterior: ", numbers2);

//FAZENDO OPERAÇÕES COM O ARRAY SEM ALTERÁ-LO
const equacao1 = numbers1.map(x => x + (x*2) + 1);
console.log("numbers1 usando equação: ", equacao1);

//HI-ORDER FUNCTION: uma função que recebe outra função como parâmetro

