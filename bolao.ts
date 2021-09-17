/*
- placar do jogo
- todos os jogos da rodada
- calcular pontuacao da rodada

- Criar os tipos 'Aposta' e 'Resultado'
- DICA: crie propriedade 'jogoID: number', para associar
*/

function pontosJogo(aposta: Aposta, resultado: Resultado): number {

}

//Pontuacao da rodada. Retorna um number que é a soma de tudo
function pontosRodada(apostas: Aposta[], resultados: Resultados[]): number{

}

//ordem dos apostadores apos uma rodada
type ApostasPorJogadores = Map<string, Apostas[]>; //nome do apostador + numero de apostas
type ResultadoIndividual = {
  nome: string,
  pontos: number,
}
function resultadoRodada(apostas: ApostasPorJogadores, resultados: Resultados[]): {

}

//criar uma classe para arquivos e outra pra manipular os arquivos
