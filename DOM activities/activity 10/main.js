function calculate(){

    const nombre = document.getElementById("nom").value;
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);
    const notaFinal = (nota1 + nota2 + nota3)/3;

    document.getElementById("average").innerHTML = "Nota final del alumno: " + nombre + " es " + notaFinal.toFixed(2);

}