
console.log('ee type')

function sumar(a:number, b:number) {
    return a + b
}

enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

interface Rectangulo {
    ancho: number,
    alto: number,
    color?: Color.Verde
}


let rectangulo: Rectangulo = {
    ancho: 4,
    alto: 6,
}


function area(r: Rectangulo) {
    return r.alto * r.ancho;
}

const areaRec = area(rectangulo);
console.log(`Área del Rectangulo ${areaRec}`);

rectangulo.toString = function () {
    return !this.color ? `Un Rectangulo ${this.color}`:`Un rectangulo`;
}

console.log(rectangulo.toString())