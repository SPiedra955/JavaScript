function start() {
    var horaActual = new Date();
    var horas = horaActual.getHours();
    var minutos = horaActual.getMinutes();
    var segundos = horaActual.getSeconds();
  
    if(horas < 10) { horas = '0' + horas; }
    if(minutos < 10) { minutos = '0' + minutos; }
    if(segundos < 10) { segundos = '0' + segundos; }
  
    document.getElementById("reloj").innerHTML = horas +' : '+minutos + ' : ' + segundos;

}

    setInterval(start, 1000);
  