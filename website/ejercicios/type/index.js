console.log('ee type');
function sumar(a, b) {
    return a + b;
}
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
var rectangulo = {
    ancho: 4,
    alto: 6
};
function area(r) {
    return r.alto * r.ancho;
}
var areaRec = area(rectangulo);
console.log("\u00C1rea del Rectangulo ".concat(areaRec));
rectangulo.toString = function () {
    return !this.color ? "Un Rectangulo ".concat(this.color) : "Un rectangulo";
};
console.log(rectangulo.toString());
