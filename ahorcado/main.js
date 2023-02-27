// Declaro variables globales 

var paraula = "pastanaga";
var paraulaSecreta = "";
var contadorFallos = 0;


function guiones() {

// Recorro cada letra de la palabra y la sustituyo por un guión y un espacio.
  for (let _index of paraula) {
    paraulaSecreta += "_ ";
  }
// Saco por pantalla la palabra con guiones.
  document.getElementById("palabraOculta").innerHTML = paraulaSecreta;
}

function verificarLetra() {
// Obtengo el valor de la letra introducida en el input
  let letra = document.getElementById("letras").value;
  let letraEncontrada = false;
// Recorro la palabra y si coincide con alguna letra del input letraEncontrada = true. 
  for (let i in paraula) {
    if (letra == paraula[i]) {
      paraulaSecreta = setCharAt(paraulaSecreta, i * 2, letra);
      letraEncontrada = true;
     }
  }

// Encontramos la letra y la sustituimos
  if(letraEncontrada){
    document.getElementById("palabraOculta").innerHTML = paraulaSecreta;
  }else{
    contadorFallos++;
    document.getElementById("ahorcado").innerHTML = '<img src="./penjat/' + contadorFallos +'.png">';
    if(contadorFallos == 9){
        alert('Has perdido');
    }
  }
// Verificamos que la palabra este completa
  if(paraulaSecreta.indexOf('_') < 0){
        alert('Has ganado')
  }
}

// Función para reemplazar un carácter en una cadena en una posición específica
function setCharAt(string, index, replacement) {
  return string.substring(0, index) + replacement + string.substring(index + 1);
}
