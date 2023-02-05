function createList(){

    const nom1 = document.getElementById("primerNom").value;
    const nom2 = document.getElementById("segundoNom").value;
    const nom3 = document.getElementById("tercerNom").value;
    const nom4 = document.getElementById("cuartoNom").value;
    const nom5 = document.getElementById("quintoNom").value;

    const nombres = new Array();
    nombres.push(nom1, nom2, nom3, nom4, nom5);

    const ordenarNombres = nombres.sort();

    document.getElementById("lista").innerHTML = "<ol><li>" + ordenarNombres.join("</li><li>") + "</li></ol>";
}