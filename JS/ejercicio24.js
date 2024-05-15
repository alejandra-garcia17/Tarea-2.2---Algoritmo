// 24. Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado,
// considerando que la nota mínima de aprobación es 60 puntos. Si la nota es mayor a
// 40 y menor a 60 se queda para recuperación caso contario pierde la materia.

function verificarNota() {
    let nota = parseFloat(document.getElementById("nota").value);

        if (nota >= 60) {
            document.getElementById("resultado").innerHTML = "¡Felicitaciones! Ha aprobado el examen.";
        } else if (nota >= 40 && nota < 60) {
            document.getElementById("resultado").innerHTML = "Tiene derecho a recuperación.";
        } else {
            document.getElementById("resultado").innerHTML = "Ha reprobado La materia.";
        }
}
