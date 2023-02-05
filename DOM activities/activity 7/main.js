function cambiar(){
    const cantidadMonedas = Number(document.getElementById("cantDada").value);
    const tipoMoneda = document.getElementById("moneda").value;
    const eurosDolar =  1.0799975 ;
    const dolarEuros =  0.9259280;

    const totalDolares = cantidadMonedas * eurosDolar;
    const totalEuros = cantidadMonedas * dolarEuros;
    
    if(tipoMoneda === "euros"){
        document.getElementById("cambio").innerHTML = totalDolares.toFixed(2) + "$";
        // .toFixed para reducirlo a 2 decimales
    }
    else{
        document.getElementById("cambio").innerHTML = totalEuros.toFixed(2) + "€";
    }
}