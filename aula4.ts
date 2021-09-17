//SET: remove elementos repetitivos

//PROMISE:
type Funcao = (x: number) => number; //definindo um tipo

//definindo um tipo que parece um struct (C)
type Ponto = {
  x: number;
  y: number;
};
//instanciando o tipo
const p1: Ponto = {
  x: 10,
  y: 20,
};

console.log(p1, typeof p1);

//aplicando esses tipos num calculo de distancia entre dois pontos
function distancia(p1: Ponto, p2: Ponto): number{
  return Math.sqrt((p1.x - p2.x)**2 + (p1.y - p2.y)**2);
}

//chamando a funcao distancia
console.log(distancia({x: 1, y:2},{x:3, y:4}));

// pode ser usado, mas nao é o ideal. O ideal é usar o Map

type Notas1 = {
  [nomeAluno1:string]: number;
};

type Presencas1 = {
  [nomeAluno1:string]: boolean
};


const notas1: Notas1 = {
  "fulana": 4,
  "cicrana": 7,
  "beltrana": 8,
  "francisca": 4,
  "janete": 5,
  "crislaynih": 7,
};

const presencas1: Presencas1 = {
  "fulana": true,
  "cicrana": true,
  "beltrana": true,
  "francisca": true,
  "janete": true,
  "crislaynih": true,
};

//usando Map. Possui garantia de performance
type Notas2 = Map<string, number>;
type Presencas2 = Map<string, boolean>;

const notas2: Notas2 = new Map<string, number>();
notas2.set("fulana", 4);
notas2.set("cicrana", 7);
const presencas2: Presencas2 = new Map<string, boolean>();
presencas2.set("fulana", true);

type Aprovado1 = "aprovado";
type Reprovado1= "reprovado";
type Recuperacao1 = "recuperacao";
type SituacaoNota1 = Aprovado1 | Reprovado1 | Recuperacao1; //possivel, mas não recomendável. Melhor usar enum

//opcao mais interessante: usar enum
enum SituacaoNota2 {
  Aprovado2 = "aprovado",
  Reprovado2 = "reprovado",
  Recuperacao2 = "recuperação",
}
type Presencas3 = true | false;
type Notas3 = Map<string, SituacaoNota1>;
type Notas4 = Map<string,SituacaoNota2>;
const notas3: Notas3 = new Map<string, SituacaoNota1>();

//
type Nota5 = {
  nota5: number;
  situacao1?: SituacaoNota1;
}

type Frequencia5 = {
  presencas5: number;
  ausencias5: number;
  frequencia5?: boolean;
}

type Aluno = Nota5 & Frequencia5;

const maria: Aluno = {
  nota5: 4,
  presencas5: 10,
  ausencias5: 18,
};

console.log(maria);

function AvaliaAluno(aluno: Aluno): boolean{
  if (aluno.nota5 > 60){
    aluno.situacao1 = SituacaoNota1.Aprovado2;
  }else if(aluno.nota >= 40){
    aluno.situacao1 = SituacaoNota1.Recuperacao2;
  }else {
    aluno.situacao1= SituacaoNota1.Reprovado2;
  }
aluno.situacao1 = aluno.nota5 > 60;
  const nrAulas = aluno.
}

function avaliaNota(nota5: Nota5): boolean{
  if(){
    nota5.situacao1 = SituacaoNota1.Aprovado2;
  }else if(){
    nota5.situacao1 = SituacaoNota1.Recuperacao2;
  }else{
    nota5.situacao1 = SituacaoNota1.Reprovado2;
  }

  return nota5.situacao1 === SituacaoNota1.Aprovado;
}

/*
function avaliaFrenquencia(frequecia5: Frequencia5): boolean{
  const nrAulas2 = frequencia5.presencas5 + frequencia5.ausencia5;
  frequencia5.
}
*/

/*
  dicas de uso do Math:

> Math.floor(1.9) -- ARREDONDA PRO NUMERO MENOR
1
> Math.round(1.9) --ARREDONDA PRO NUMERO MAIS PROXIMO
2
> Math.ceil(1.3) -- ARREDONDA PRO NUMERO MAIOR
2
>
*/

/*
MÓDULOS
*/


/*
AVISOS DO PROJETO:

*/
