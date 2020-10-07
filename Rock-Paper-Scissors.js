function Opcion(miOpcion) {
    document.getElementById("game").style.display = "none";
    document.getElementById("loading").style.display = "flex";
      setTimeout(function () {
        var nombre = ["Tijera", "Piedra", "Papel"]
        var cpu = Math.floor((Math.random() * 3))
        if (miOpcion === 0 && cpu === 2 || miOpcion === 1 && cpu === 0 || miOpcion === 2 && cpu === 1) {
            alert("Jugador: " + nombre[miOpcion]);
            alert("Contrincante: " + nombre[cpu]);
            alert("Ganaste, sos un capo")
        }
        else if (miOpcion === 0 && cpu === 1 || miOpcion === 1 && cpu === 2 || miOpcion === 2 && cpu === 0) {
            alert("Jugador: " + nombre[miOpcion]);
            alert("Contrincante: " + nombre[cpu]);
            alert("Perdiste, sos un pete")
        }
        else {
            alert("Jugador: " + nombre[miOpcion]);
            alert("Contrincante: " + nombre[cpu]);
            alert("Empataste")
        }
        document.getElementById("game").style.display = "block";
        document.getElementById("loading").style.display = "none";

    }, 2000);
}
