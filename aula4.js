//SET: remove elementos repetitivos
//instanciando o tipo
var p1 = {
    x: 10,
    y: 20
};
console.log(p1, typeof p1);
//aplicando esses tipos num calculo de distancia entre dois pontos
function distancia(p1, p2) {
    return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
}
//chamando a funcao distancia
console.log(distancia({ x: 1, y: 2 }, { x: 3, y: 4 }));
