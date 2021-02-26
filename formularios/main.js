var time, position, resultados;
var Nombre, apP, apM, Edad, nacimiento, Sexo; // variables Globales

function obtenerDatos() {
    Nombre = document.getElementById("Nombre").value;
    apP = document.getElementById("apP").value;
    apM = document.getElementById("apM").value;
    Edad = document.getElementById("Edad").value;
    nacimiento = document.getElementById("nacimiento").value;
    Sexo = document.getElementById("Sexo").value;

    var r = [Nombre, apP, apM, Edad, nacimiento, Sexo];
    return r;
}

var input = document.getElementsByTagName("INPUT");

for (i = 0; i < input.length; i++) {
    input[i].addEventListener("change", function() {
        resultados = obtenerDatos();
        console.log(resultados);
    });
};