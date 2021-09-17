//OBS: NÃO RODA EM JS COMUM

/*
Exercício: implementar a função leftpad()
leftpad() é uma função que completa com um valor à esquerda de um numero.
Ex: quando vc está digitando um numero de conta que tem 4 zeros antes, 
vc so digita os numeros que vem depois e o leftpad() completa esses 4 zeros iniciais
*/

//IMPLEMENTAR!!!!!!
function leftPad1(base: string, size: number, complemento: string){
  //se o valor informado é menor que o comprimento informado em size
  while(base.length < size){
    base = complemento + base;
  }
  return base;
}

//OUTRA FORMA DE RESOLVER
function leftPad2(base: string, size: number, complemento: string){  
  //se o valor informado é menor que o comprimento informado em size
  return base.length >= size ? base : complemento + leftPad2(base, size -1, complemento);
} 

//TERCEIRA MANEIRA DE RESOLVER


//CHECANDO SE DEU CERTO
const paddedString1 = leftPad1("1234", 8, "0");
console.log(paddedString1);
console.log(paddedString1 === "00001234");

const paddedString2 = leftPad2("4321", 8, "0");
console.log(paddedString2);
console.log(paddedString2 === "00004321");


/*
> no parametro existe o limite de quantos numerais terá o numero
> pede um numero
> verifica a extensão do numero (numero(len))
> usa um laço de repetição ou condicional para adicionar o numero de zeros ao lado esquerdo do numero
>> pode ser um laço while ou for que adicionar +1 e adiciona +1 zero a cada passada. Quando termina,
ele completa adicionando os numeros que foram informados no parametro
> retorna ou exibe em tela o valor com os 0s no começo
*/
