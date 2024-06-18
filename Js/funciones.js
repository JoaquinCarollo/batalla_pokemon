function llamarPokemon(pokemonElegido){
    elegirPokemon.innerHTML = "";
    if (pokemonElegido === 1){
        primerosAtaques.innerHTML = "";
        segundosAtaques.innerHTML = "";
        barraUsuario.innerText = Math.ceil(vidaPikachu) + "/35";
        vidaUsuario.appendChild(barraUsuario);
        elegirPokemon.appendChild(pikachu);
        primerosAtaques.appendChild(botonRayo);
        primerosAtaques.appendChild(botonPlacaje);
        segundosAtaques.appendChild(botonRecuperacion);
        segundosAtaques.appendChild(botonCarga);
        Toastify({
            text: "Has elegido a Pikachu",
            duration: 3000,
            gravity: "bottom",
            position: "right",
            className: "comentario"
        }).showToast();
    } else if (pokemonElegido === 2){
        primerosAtaques.innerHTML = "";
        segundosAtaques.innerHTML = "";
        barraUsuario.innerText = Math.ceil(vidaSnorlax) + "/160";
        vidaUsuario.appendChild(barraUsuario);
        elegirPokemon.appendChild(snorlax);
        primerosAtaques.appendChild(botonGolpe);
        primerosAtaques.appendChild(botonCabezazo);
        segundosAtaques.appendChild(botonDescanso);
        segundosAtaques.appendChild(botonPisoton);
        Toastify({
            text: "Has elegido a Snorlax",
            duration: 3000,
            gravity: "bottom",
            position: "right",
            className: "comentario"
        }).showToast();
    } else if (pokemonElegido === 3){
        primerosAtaques.innerHTML = "";
        segundosAtaques.innerHTML = "";
        barraUsuario.innerText = Math.ceil(vidaLugia) + "/106";
        vidaUsuario.appendChild(barraUsuario);
        elegirPokemon.appendChild(lugia);
        primerosAtaques.appendChild(botonPsiquico);
        primerosAtaques.appendChild(botonAireAfilado);
        segundosAtaques.appendChild(botonRespiro);
        segundosAtaques.appendChild(botonHiperRayo);
        Toastify({
            text: "Has elegido a Lugia",
            duration: 3000,
            gravity: "bottom",
            position: "right",
            className: "comentario"
        }).showToast();
    };
};
function derrota(){
    if (vidaPikachu <= 0){
        setTimeout(() => Swal.fire({
            title: "Pikachu fue debilitado!",
            text: "Elige a otro pokemon!",
            icon: "error"
          }
        ),1000);
        pokebolaUno.remove();
        pikachu.remove();
        barraUsuario.innerHTML = "";
        primerosAtaques.innerHTML = "";
        segundosAtaques.innerHTML = "";
        vidaPikachu = 1;
        cantidadDePokemonesUsuario = cantidadDePokemonesUsuario - 1;
        if (cantidadDePokemonesUsuario === 2){
            localStorage.setItem("Derrotas","1");
        };
        if (cantidadDePokemonesUsuario === 1){
            localStorage.setItem("Derrotas","2");
        };
    };
    if (vidaSnorlax <= 0){
        setTimeout(() => Swal.fire({
            title: "Snorlax fue debilitado!",
            text: "Elige a otro pokemon!",
            icon: "error"
          }
        ),1000);
        pokebolaDos.remove();
        snorlax.remove();
        barraUsuario.innerHTML = "";
        primerosAtaques.innerHTML = "";
        segundosAtaques.innerHTML = "";
        vidaSnorlax = 1;
        cantidadDePokemonesUsuario = cantidadDePokemonesUsuario - 1;
        if (cantidadDePokemonesUsuario === 2){
            localStorage.setItem("Derrotas","1");
        };
        if (cantidadDePokemonesUsuario === 1){
            localStorage.setItem("Derrotas","2");
        };
    };
    if (vidaLugia <= 0){
        setTimeout(() => Swal.fire({
            title: "Lugia fue debilitado!",
            text: "Elige a otro pokemon!",
            icon: "error"
          }
        ),1000);
        pokebolaDos.remove();
        lugia.remove();
        barraUsuario.innerHTML = "";
        primerosAtaques.innerHTML = "";
        segundosAtaques.innerHTML = "";
        cantidadDePokemonesUsuario = cantidadDePokemonesUsuario - 1;
        vidaLugia = 1;
        if (cantidadDePokemonesUsuario === 2){
            localStorage.setItem("Derrotas","1");
        };
        if (cantidadDePokemonesUsuario === 1){
            localStorage.setItem("Derrotas","2");
        };
        if (cantidadDePokemonesUsuario === 0){
            localStorage.setItem("Derrotas","3");
            setTimeout(() => Swal.fire({
                title: "Te quedaste sin pokemones! Suerte la próxima",
                text: "Resultado: Victorias " + localStorage.getItem("victorias") + ".Derrotas " + localStorage.getItem("Derrotas"),
                icon: "error"
              }
            ),2000);
        };
    };
};
function ataqueYCambio(objetivo){
    if (vidaDragonite <= 0){
        cantidadDePokemonesRival = 0;
        dragonite.remove();
        barraRival.innerHTML = "";
        setTimeout(() => mensajeDeVictoriaDragonite(),3000);
        localStorage.setItem("victorias","4");
        setTimeout(() => {turno = true},6000);
    };
    if(cantidadDePokemonesRival === 1){
        setTimeout(() => ataquesDragonite(Math.random(),objetivo),3000);
        setTimeout(() => {turno = true},3000);
    };
    if (vidaVoltorb <= 0){
        cantidadDePokemonesRival = 1;
        voltorb.remove();
        barraRival.innerHTML = "";
        setTimeout(() => mensajeDeVictoriaVoltorb(),3000);
        localStorage.setItem("victorias","3");
        setTimeout(() => {turno = true},6000);
    };
    if(cantidadDePokemonesRival === 2){
        setTimeout(() => ataqueVoltorb(Math.random(),objetivo),3000);
        setTimeout(() => {turno = true},3000);
    };
    if (vidaPidgeot <= 0){
        cantidadDePokemonesRival = 2;
        pidgeotPierde();
        localStorage.setItem("victorias","2");
        setTimeout(() => {turno = true},6000);
    };
    if(cantidadDePokemonesRival === 3){
        setTimeout(() => ataquesPidgeot(Math.random(),objetivo),3000);
        setTimeout(() => {turno = true},3000);
    };
    if (vidaEevee <= 0){
        cantidadDePokemonesRival = 3;
        eeveePierde();
        setTimeout(() => {turno = true},6000);
    }; 
    if(cantidadDePokemonesRival === 4) {
        setTimeout(() => ataqueeEevee(Math.random(),objetivo),3000);
        setTimeout(() => {turno = true},3000);
    };
    if (cantidadDePokemonesRival === 0){
        mensajeDeVictoria();
    };
};
function mensajeDeVictoria(){
    setTimeout(() => Swal.fire({
        title: "El rival se quedó sin pokemones!",
        text: "Resultado: Victorias " + localStorage.getItem("victorias") + ".Derrotas " + localStorage.getItem("Derrotas"),
        icon: "success"
      }
    ),6000);
};
function mensajeDeVictoriaDragonite(){
    Toastify({
        text: "Dragonite ha sido debilitado",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        className: "comentario"
    }).showToast();
};
function mensajeDeVictoriaVoltorb(){
    Toastify({
        text: "Voltorb ha sido debilitado",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        className: "comentario"
    }).showToast();
    setTimeout(() => pokemonesDelRival.appendChild(dragonite), 5000);
    setTimeout(() => pokebolaRivalTres.remove(), 5000);
    setTimeout(() => barraRival.innerText = vidaDragonite + "/91",5000);
    setTimeout(() =>     Toastify({
        text: "El rival llama a Dragonite",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        className: "comentario"
    }).showToast(), 5000);
    vidaVoltorb = 1;
};
function mensajeDeVictoriaEevee(){
    Toastify({
        text: "Eevee ha sido debilitado",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        className: "comentario"
    }).showToast();
};
function mensajeDeVictoriaPidgeot(){
    Toastify({
        text: "Pidgeot ha sido debilitado",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        className: "comentario"
    }).showToast();
};
function pidgeotPierde(){
    setTimeout(() => mensajeDeVictoriaPidgeot(),3000);
    pidgeot.remove();
    barraRival.innerHTML = "";
    vidaPidgeot = 1;
    setTimeout(() =>  Toastify({
        text: "El rival llama a Voltorb",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        className: "comentario"
    }).showToast(), 5000);
    setTimeout(() => pokemonesDelRival.appendChild(voltorb), 5000);
    setTimeout(() => pokebolaRivalDos.remove(), 5000);
    setTimeout(() => barraRival.innerText = vidaVoltorb + "/40",5000);
    vidaPidgeot = 1;
};
function ataques(objetivo,ataque,usuario){
    return 0.01 * 100 * (((1 + estadisticas[usuario].ataque * ataque)/(25 * estadisticas[objetivo].defensa))+2);
};
function ataquesEspeciales(objetivo,ataque,usuario){
    return 0.01 * 100 * (((1 + estadisticas[usuario].ataqueEspecial * ataque)/(25 * estadisticas[objetivo].defensaEspecial))+2);
};
function ataquesPotenciales(objetivo,ataque,usuario){
    return 0.01 * 1.5 * 100 * (((1 + estadisticas[usuario].ataque * ataque)/(25 * estadisticas[objetivo].defensa))+2);
};
function ataquesEfectivos(objetivo,ataque,usuario){
    return 0.01 * 100 * 2 * (((1 + estadisticas[usuario].ataque * ataque)/(25 * estadisticas[objetivo].defensa))+2);
};
function ataquesEspecialesYPotenciales(objetivo,ataque,usuario){
    return 0.01 * 100 * 1.5 * (((1 + estadisticas[usuario].ataqueEspecial * ataque)/(25 * estadisticas[objetivo].defensaEspecial))+2);
};
function ataquesEspecialesYEfectivos(objetivo,ataque,usuario){
    return 0.01 * 100 * 2 * (((1 + estadisticas[usuario].ataqueEspecial * ataque)/(25 * estadisticas[objetivo].defensaEspecial))+2)
};
function ataquesEfectivosYPotenciales(objetivo,ataque,usuario){
    return 0.01 * 1.5 * 100 * 2 * (((1 + estadisticas[usuario].ataque * ataque)/(25 * estadisticas[objetivo].defensa))+2);
};
function ataquesEspecialesPotencialesYEfectivos(objetivo,ataque,usuario){
    return 0.01 * 1.5 * 100 * 2 * (((1 + estadisticas[usuario].ataqueEspecial * ataque)/(25 * estadisticas[objetivo].defensaEspecial))+2);
};
function eeveePierde(){
    setTimeout(() => mensajeDeVictoriaEevee(),3000);
    eevee.remove();
    barraRival.innerHTML = "";
    setTimeout(() =>  Toastify({
        text: "El rival llama a pidgeot",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        className: "comentario"
    }).showToast(), 5000);
    setTimeout(() => pokemonesDelRival.appendChild(pidgeot), 5000);
    setTimeout(() => pokebolaRivalUno.remove(), 5000);
    setTimeout(() => barraRival.innerText = vidaPidgeot + "/83",5000);
    vidaEevee = 1;
};
function ataquesLugia (movimiento,objetivo){
    if (turno === true){
        turno = false;
        if(movimiento === 1){
            if (objetivo === 1){
                vidaRival.innerHTML = "";
                vidaEevee = vidaEevee - Math.ceil(ataquesEspecialesYPotenciales(1,movimientos.psiquico,5));
                barraRival.innerText = Math.ceil(vidaEevee) + "/55";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Lugia uso psiquico. Eevee pierde " + Math.ceil(ataquesEspecialesYPotenciales(1,movimientos.psiquico,5)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 2){
                vidaRival.innerHTML = "";
                vidaPidgeot = vidaPidgeot - Math.ceil(ataquesEspecialesYPotenciales(3,movimientos.psiquico,5));
                barraRival.innerText = Math.ceil(vidaPidgeot) + "/83";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Lugia uso psiquico. Pidgeot pierde " + Math.ceil(ataquesEspecialesYPotenciales(3,movimientos.psiquico,5)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 3){
                vidaRival.innerHTML = "";
                vidaVoltorb = vidaVoltorb - Math.ceil(ataquesEspecialesYPotenciales(4,movimientos.psiquico,5));
                barraRival.innerText = Math.ceil(vidaVoltorb) + "/40";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Lugia uso psiquico. Voltorb pierde " + Math.ceil(ataquesEspecialesYPotenciales(4,movimientos.psiquico,5)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 4){
                vidaRival.innerHTML = "";
                vidaDragonite = vidaDragonite - Math.ceil(ataquesEspecialesYPotenciales(7,movimientos.psiquico,5));
                barraRival.innerText = Math.ceil(vidaDragonite) + "/91";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Lugia uso psiquico. Dragonite pierde " + Math.ceil(ataquesEspecialesYPotenciales(7,movimientos.psiquico,5)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            };
            ataqueYCambio(3);
        } else if(movimiento === 2){
            if (objetivo === 1){
                vidaRival.innerHTML = "";
                vidaEevee = vidaEevee - Math.ceil(ataques(1,movimientos.aireAfilado,0));
                barraRival.innerText = Math.ceil(vidaEevee) + "/55";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Lugia uso aire afilado. Eevee pierde " + Math.ceil(ataques(1,movimientos.aireAfilado,0)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 2){
                vidaRival.innerHTML = "";
                vidaPidgeot = vidaPidgeot - Math.ceil(ataques(3,movimientos.aireAfilado,0));
                barraRival.innerText = Math.ceil(vidaPidgeot) + "/83";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Lugia uso aire afilado. Pidgeot pierde " + Math.ceil(ataques(3,movimientos.aireAfilado,0)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 3){
                vidaRival.innerHTML = "";
                vidaVoltorb = vidaVoltorb - Math.ceil(ataques(4,movimientos.aireAfilado,0));
                barraRival.innerText = Math.ceil(vidaVoltorb) + "/40";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Lugia uso aire afilado. Voltorb pierde " + Math.ceil(ataques(4,movimientos.aireAfilado,0)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 4){
                vidaRival.innerHTML = "";
                vidaDragonite = vidaDragonite - Math.ceil(ataquesEspecialesYPotenciales(7,movimientos.aireAfilado,5));
                barraRival.innerText = Math.ceil(vidaDragonite) + "/91";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Lugia uso aire afilado. Dragonite pierde " + Math.ceil(ataquesEspecialesYPotenciales(7,movimientos.aireAfilado,5)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            };
            ataqueYCambio(3);
        } else if (movimiento === 3){
            if (vidaLugia <= 91){
                vidaUsuario.innerHTML = "";
                vidaLugia = vidaLugia + 15;
                barraUsuario.innerText = vidaLugia + "/106";
                vidaUsuario.appendChild(barraUsuario);
                Toastify({
                    text: "Lugia uso respiro. Lugia recupera 15 de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else{
                vidaUsuario.innerHTML = "";
                vidaLugia = 106;
                barraUsuario.innerText = vidaLugia + "/106";
                vidaUsuario.appendChild(barraUsuario);
                Toastify({
                    text: "Lugia uso respiro. Lugia recupera 15 de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            };
            ataqueYCambio(3);
        }else if(movimiento === 4){
            if (objetivo === 1){
                vidaRival.innerHTML = "";
                vidaEevee = vidaEevee - Math.ceil(ataquesEspeciales(1,movimientos.hiperRayo,5));
                barraRival.innerText = Math.ceil(vidaEevee) + "/55";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Lugia uso hiperRayo. Eevee pierde " + Math.ceil(ataquesEspeciales(1,movimientos.hiperRayo,5)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 2){
                vidaRival.innerHTML = "";
                vidaPidgeot = vidaPidgeot - Math.ceil(ataquesEspeciales(3,movimientos.hiperRayo,5));
                barraRival.innerText = Math.ceil(vidaPidgeot) + "/83";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Lugia uso hiperRayo. Pidgeot pierde " + Math.ceil(ataquesEspeciales(3,movimientos.hiperRayo,5)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 3){
                vidaRival.innerHTML = "";
                vidaVoltorb = vidaVoltorb - Math.ceil(ataquesEspeciales(4,movimientos.hiperRayo,0));
                barraRival.innerText = Math.ceil(vidaVoltorb) + "/40";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Lugia uso hiperRayo. Voltorb pierde " + Math.ceil(ataquesEspeciales(4,movimientos.hiperRayo,0)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 4){
                vidaRival.innerHTML = "";
                vidaDragonite = vidaDragonite - Math.ceil(ataquesEspecialesYPotenciales(7,movimientos.hiperRayo,5));
                barraRival.innerText = Math.ceil(vidaDragonite) + "/91";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Lugia uso hiper rayo. Dragonite pierde " + Math.ceil(ataquesEspecialesYPotenciales(7,movimientos.hiperRayo,5)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            };
            ataqueYCambio(3);
        };
    };
}
function ataquesPikachu(movimiento,objetivo){
    if (turno === true){
        turno = false;
        if(movimiento === 1){
            if (objetivo === 1){
                vidaRival.innerHTML = "";
                vidaEevee = vidaEevee - Math.ceil(ataquesEspecialesYPotenciales(1,movimientos.rayo,0));
                barraRival.innerText = Math.ceil(vidaEevee) + "/55";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Pikachu uso rayo. Eevee pierde " + Math.ceil(ataquesEspecialesYPotenciales(1,movimientos.rayo,0)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 2){
                vidaRival.innerHTML = "";
                vidaPidgeot = vidaPidgeot - Math.ceil(ataquesEspecialesPotencialesYEfectivos(3,movimientos.rayo,0));
                barraRival.innerText = Math.ceil(vidaPidgeot) + "/83";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Pikachu uso rayo. Pidgeot pierde " + Math.ceil(ataquesEspecialesPotencialesYEfectivos(3,movimientos.rayo,0)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 3){
                vidaRival.innerHTML = "";
                vidaVoltorb = vidaVoltorb - Math.ceil(ataquesEspecialesYPotenciales(4,movimientos.rayo,0));
                barraRival.innerText = Math.ceil(vidaVoltorb) + "/40";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Pikachu uso rayo. Voltorb pierde " + Math.ceil(ataquesEspecialesYPotenciales(4,movimientos.rayo,0)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 4){
                vidaRival.innerHTML = "";
                vidaDragonite = vidaDragonite - Math.ceil(ataquesEspecialesYPotenciales(4,movimientos.rayo,0));
                barraRival.innerText = Math.ceil(vidaDragonite) + "/91";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Pikachu uso rayo. Dragonite pierde " + Math.ceil(ataquesEspecialesYPotenciales(4,movimientos.rayo,0)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            };
            ataqueYCambio(1);
        } else if(movimiento === 2){
            if (objetivo === 1){
                vidaRival.innerHTML = "";
                vidaEevee = vidaEevee - Math.ceil(ataques(1,movimientos.placaje,0));
                barraRival.innerText = Math.ceil(vidaEevee) + "/55";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Pikachu uso placaje. Eevee pierde " + Math.ceil(ataques(1,movimientos.placaje,0)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 2){
                vidaRival.innerHTML = "";
                vidaPidgeot = vidaPidgeot - Math.ceil(ataques(3,movimientos.placaje,0));
                barraRival.innerText = Math.ceil(vidaPidgeot) + "/83";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Pikachu uso placaje. Pidgeot pierde " + Math.ceil(ataques(3,movimientos.placaje,0)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 3){
                vidaRival.innerHTML = "";
                vidaVoltorb = vidaVoltorb - Math.ceil(ataques(4,movimientos.placaje,0));
                barraRival.innerText = Math.ceil(vidaVoltorb) + "/40";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Pikachu uso placaje. Voltorb pierde " + Math.ceil(ataques(4,movimientos.placaje,0)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 4){
                vidaRival.innerHTML = "";
                vidaDragonite = vidaDragonite - Math.ceil(ataques(7,movimientos.placaje,0));
                barraRival.innerText = Math.ceil(vidaDragonite) + "/91";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Pikachu uso placaje. Dragonite pierde " + Math.ceil(ataques(7,movimientos.placaje,0)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            };
            ataqueYCambio(1);
        } else if (movimiento === 3){
            if (vidaPikachu <= 28){
                vidaUsuario.innerHTML = "";
                vidaPikachu = vidaPikachu + 7;
                barraUsuario.innerText = vidaPikachu + "/35";
                vidaUsuario.appendChild(barraUsuario);
                Toastify({
                    text: "Pikachu uso recuperación. Pikachu recupera 7 de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else{
                vidaUsuario.innerHTML = "";
                vidaPikachu = 35;
                barraUsuario.innerText = vidaPikachu + "/35";
                vidaUsuario.appendChild(barraUsuario);
                Toastify({
                    text: "Pikachu uso recuperación. Pikachu recupera 7 de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            };
            ataqueYCambio(1);
            setTimeout(() => {turno = true},3000);
        }else if (movimiento == 4){
            estadisticas[0].ataqueEspecial = estadisticas[0].ataqueEspecial * 1.5;
            Toastify({
                text: "Pikachu uso carga. Su ataque especial subio",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                className: "comentario"
            }).showToast();
            ataqueYCambio(1);
        };
    };
};
function ataqueVoltorb(movimientoEnemigo,objetivo){
    if (movimientoEnemigo < 0.25){
        if (objetivo == 1){
            vidaUsuario.innerHTML = "";
            vidaPikachu = vidaPikachu - Math.ceil(ataquesPotenciales(0,movimientos.chispa,6));
            barraUsuario.innerText = vidaPikachu + "/35";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Voltorb uso chispa. Pikachu pierde "+ Math.ceil(ataquesPotenciales(0,movimientos.chispa,6)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 2){
            vidaUsuario.innerHTML = "";
            vidaSnorlax = vidaSnorlax - Math.ceil(ataquesPotenciales(3,movimientos.chispa,6));
            barraUsuario.innerText = vidaSnorlax + "/160";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Voltorb uso chispa. Snorlax pierde "+ Math.ceil(ataquesPotenciales(3,movimientos.chispa,6)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 3){
            vidaUsuario.innerHTML = "";
            vidaLugia = vidaLugia - Math.ceil(ataquesPotenciales(5,movimientos.chispa,6));
            barraUsuario.innerText = vidaLugia + "/106";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Voltorb uso chispa. Lugia pierde "+ Math.ceil(ataquesPotenciales(5,movimientos.chispa,6)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        };
    } else if (0.25 <= movimientoEnemigo < 0.50){
        if (objetivo == 1){
            vidaUsuario.innerHTML = "";
            vidaPikachu = vidaPikachu - Math.ceil(ataquesEspecialesYPotenciales(0,movimientos.rayoCarga,6));
            barraUsuario.innerText = vidaPikachu + "/35";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Voltorb uso rayo carga. Pikachu pierde "+ Math.ceil(ataquesEspecialesYPotenciales(0,movimientos.rayoCarga,6)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 2){
            vidaUsuario.innerHTML = "";
            vidaSnorlax = vidaSnorlax - Math.ceil(ataquesEspecialesYPotenciales(3,movimientos.rayoCarga,6));
            barraUsuario.innerText = vidaSnorlax + "/160";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Voltorb uso rayo carga. Snorlax pierde "+ Math.ceil(ataquesEspecialesYPotenciales(3,movimientos.rayoCarga,6)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 3){
            vidaUsuario.innerHTML = "";
            vidaLugia = vidaLugia - Math.ceil(ataquesEspecialesYPotenciales(5,movimientos.rayoCarga,6));
            barraUsuario.innerText = vidaLugia + "/106";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Voltorb uso rayo carga. Lugia pierde "+ Math.ceil(ataquesEspecialesYPotenciales(5,movimientos.rayoCarga,6)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        };
    } else if (0.50 <= movimientoEnemigo < 0.75){
        estadisticas[6].ataqueEspecial = estadisticas[6].ataqueEspecial * 1.5;
        Toastify({
            text: "Voltorb uso carga. Su ataque especial subio",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            className: "comentario",
            onClick: function(){} // Callback after click
        }).showToast();
    } else {
        if (objetivo == 1){
            vidaUsuario.innerHTML = "";
            vidaPikachu = vidaPikachu - 30;
            barraUsuario.innerText = vidaPikachu + "/35";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Voltorb uso bomba sonica. Pikachu pierde "+ 30 +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 2){
            vidaUsuario.innerHTML = "";
            vidaSnorlax = vidaSnorlax - 30;
            barraUsuario.innerText = vidaSnorlax + "/160";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Voltorb uso bomba sonica. Snorlax pierde "+ 30 +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 3){
            vidaUsuario.innerHTML = "";
            vidaLugia = vidaLugia - 30;
            barraUsuario.innerText = vidaLugia + "/106";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Voltorb uso bomba sonica. Lugia pierde "+ 30 +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        };
    };
    derrota();
};
function ataqueeEevee(movimientoEnemigo,objetivo){
    if (movimientoEnemigo < 0.25){
        if (objetivo == 1){
            vidaUsuario.innerHTML = "";
            vidaPikachu = vidaPikachu - Math.ceil(ataquesPotenciales(0,movimientos.placaje,1));
            barraUsuario.innerText = vidaPikachu + "/35";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Eevee uso placaje. Pikachu pierde "+ Math.ceil(ataquesPotenciales(0,movimientos.placaje,1)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 2){
            vidaUsuario.innerHTML = "";
            vidaSnorlax = vidaSnorlax - Math.ceil(ataquesPotenciales(3,movimientos.placaje,1));
            barraUsuario.innerText = vidaSnorlax + "/160";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Eevee uso placaje. Snorlax pierde "+ Math.ceil(ataquesPotenciales(3,movimientos.placaje,1)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 3){
            vidaUsuario.innerHTML = "";
            vidaLugia = vidaLugia - Math.ceil(ataquesPotenciales(5,movimientos.placaje,1));
            barraUsuario.innerText = vidaLugia + "/106";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Eevee uso placaje. Lugia pierde "+ Math.ceil(ataquesPotenciales(5,movimientos.placaje,1)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        };
    } else if (0.25 <= movimientoEnemigo < 0.50){
        if (objetivo == 1){
            vidaUsuario.innerHTML = "";
            vidaPikachu = vidaPikachu - Math.ceil(ataquesPotenciales(0,movimientos.ataqueRapido,1));
            barraUsuario.innerText = vidaPikachu + "/35";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Eevee uso ataque rapido. Pikachu pierde "+ Math.ceil(ataquesPotenciales(0,movimientos.ataqueRapido,1)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 2){
            vidaUsuario.innerHTML = "";
            vidaSnorlax = vidaSnorlax - Math.ceil(ataquesPotenciales(3,movimientos.ataqueRapido,1));
            barraUsuario.innerText = vidaSnorlax + "/160";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Eevee uso ataque rapido. Snorlax pierde "+ Math.ceil(ataquesPotenciales(3,movimientos.ataqueRapido,1)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 3){
            vidaUsuario.innerHTML = "";
            vidaLugia = vidaLugia - Math.ceil(ataquesPotenciales(5,movimientos.ataqueRapido,1));
            barraUsuario.innerText = vidaLugia + "/106";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Eevee uso ataque rápido. Lugia pierde "+ Math.ceil(ataquesPotenciales(5,movimientos.ataqueRapido,1)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        };
    } else if (0.50 <= movimientoEnemigo < 0.75){
        if (vidaEevee <= 48){
            vidaRival.innerHTML = "";
            vidaEevee = vidaEevee + 7;
            barraRival.innerText = vidaEevee + "/55";
            vidaRival.appendChild(barraRival);
            Toastify({
                text: "Eevee uso recuperación. Eevee recupera 7 de vida",
                duration: 2000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if (vidaEevee > 48){
            vidaRival.innerHTML = "";
            vidaEevee = 55;
            barraRival.innerText = vidaEevee + "/55";
            vidaRival.appendChild(barraRival);
            Toastify({
                text: "Eevee uso recuperación. Eevee recupera 7 de vida",
                duration: 2000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        };
    } else {
        if (objetivo == 1){
            vidaUsuario.innerHTML = "";
            vidaPikachu = vidaPikachu - Math.ceil(ataquesPotenciales(0,movimientos.cabezazo,1));
            barraUsuario.innerText = vidaPikachu + "/35";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Eevee uso cabezazo. Pikachu pierde "+ Math.ceil(ataquesPotenciales(0,movimientos.cabezazo,1)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 2){
            vidaUsuario.innerHTML = "";
            vidaSnorlax = vidaSnorlax - Math.ceil(ataquesPotenciales(3,movimientos.cabezazo,1));
            barraUsuario.innerText = vidaSnorlax + "/160";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Eevee uso cabezazo. Snorlax pierde "+ Math.ceil(ataquesPotenciales(3,movimientos.cabezazo,1)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 3){
            vidaUsuario.innerHTML = "";
            vidaLugia = vidaLugia - Math.ceil(ataquesPotenciales(5,movimientos.cabezazo,1));
            barraUsuario.innerText = vidaLugia + "/106";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Eevee uso cabezazo. Lugia pierde "+ Math.ceil(ataquesPotenciales(5,movimientos.cabezazo,1)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        };
    };
    derrota();
};
function ataquesSnorlax(movimiento,objetivo){
    if (turno === true){
        turno = false;
        if(movimiento === 1){
            if (objetivo === 1){
                vidaRival.innerHTML = "";
                vidaEevee = vidaEevee - Math.ceil(ataquesPotenciales(1,movimientos.golpe,2));
                barraRival.innerText = vidaEevee + "/55";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Snorlax uso golpe. Eevee pierde " + Math.ceil(ataquesPotenciales(1,movimientos.golpe,2)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 2){
                vidaRival.innerHTML = "";
                vidaPidgeot = vidaPidgeot - Math.ceil(ataquesPotenciales(3,movimientos.golpe,2));
                barraRival.innerText = vidaPidgeot + "/83";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Snorlax uso golpe. Pidgeot pierde " + Math.ceil(ataquesPotenciales(3,movimientos.golpe,2)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 3){
                vidaRival.innerHTML = "";
                vidaVoltorb = vidaVoltorb - Math.ceil(ataquesPotenciales(4,movimientos.golpe,2));
                barraRival.innerText = Math.ceil(vidaVoltorb) + "/40";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Snorlax uso golpe. Voltorb pierde " + Math.ceil(ataquesPotenciales(4,movimientos.golpe,2)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 4){
                vidaRival.innerHTML = "";
                vidaDragonite = vidaDragonite - Math.ceil(ataquesPotenciales(7,movimientos.golpe,2));
                barraRival.innerText = Math.ceil(vidaDragonite) + "/91";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Snorlax uso golpe. Dragonite pierde " + Math.ceil(ataquesPotenciales(7,movimientos.golpe,2)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            };
            ataqueYCambio(2);
        } else if(movimiento === 2){
            if (objetivo === 1){
                vidaRival.innerHTML = "";
                vidaEevee = vidaEevee - Math.ceil(ataquesPotenciales(1,movimientos.cabezazo,2));
                barraRival.innerText = vidaEevee + "/55";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Snorlax uso cabezazo. Eevee pierde " + Math.ceil(ataquesPotenciales(1,movimientos.cabezazo,2)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 2){
                vidaRival.innerHTML = "";
                vidaPidgeot = vidaPidgeot - Math.ceil(ataquesPotenciales(3,movimientos.cabezazo,2));
                barraRival.innerText = vidaPidgeot + "/83";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Snorlax uso cabezazo. Pidgeot pierde " + Math.ceil(ataquesPotenciales(3,movimientos.cabezazo,2)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 3){
                vidaRival.innerHTML = "";
                vidaVoltorb = vidaVoltorb - Math.ceil(ataquesPotenciales(4,movimientos.cabezazo,2));
                barraRival.innerText = Math.ceil(vidaVoltorb) + "/40";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Snorlax uso cabezazo. Voltorb pierde " + Math.ceil(ataquesPotenciales(4,movimientos.cabezazo,2)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 4){
                vidaRival.innerHTML = "";
                vidaDragonite = vidaDragonite - Math.ceil(ataquesPotenciales(7,movimientos.cabezazo,2));
                barraRival.innerText = Math.ceil(vidaDragonite) + "/91";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Snorlax uso cabezazo. Dragonite pierde " + Math.ceil(ataquesPotenciales(7,movimientos.cabezazo,2)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            };
            ataqueYCambio(2);
        } else if (movimiento === 3){
            if (vidaSnorlax <= 150){
                vidaUsuario.innerHTML = "";
                vidaSnorlax = vidaSnorlax + 10;
                barraUsuario.innerText = Math.ceil(vidaSnorlax) + "/160";
                vidaUsuario.appendChild(barraUsuario);
                Toastify({
                    text: "Snorlax uso descanso. Snorlax recupera 10 de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else{
                vidaUsuario.innerHTML = "";
                vidaSnorlax = estadisticas[2].ps;
                barraUsuario.innerText = Math.ceil(vidaSnorlax) + "/160";
                vidaUsuario.appendChild(barraUsuario);
                Toastify({
                    text: "Snorlax uso descanso. Snorlax recupera 10 de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            };
            ataqueYCambio(2);
        }else if (movimiento == 4){
            if (objetivo === 1){
                vidaRival.innerHTML = "";
                vidaEevee = vidaEevee - Math.ceil(ataquesPotenciales(1,movimientos.pisoton,2));
                barraRival.innerText = vidaEevee + "/55";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Snorlax uso pisoton. Eevee pierde " + Math.ceil(ataquesPotenciales(1,movimientos.pisoton,2)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 2){
                vidaRival.innerHTML = "";
                vidaPidgeot = vidaPidgeot - Math.ceil(ataquesPotenciales(3,movimientos.pisoton,2));
                barraRival.innerText = vidaPidgeot + "/83";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Snorlax uso pisoton. Pidgeot pierde " + Math.ceil(ataquesPotenciales(3,movimientos.pisoton,2)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 3){
                vidaRival.innerHTML = "";
                vidaVoltorb = vidaVoltorb - Math.ceil(ataquesPotenciales(4,movimientos.pisoton,2));
                barraRival.innerText = Math.ceil(vidaVoltorb) + "/40";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Snorlax uso pisoton. Voltorb pierde " + Math.ceil(ataquesPotenciales(4,movimientos.pisoton,2)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            } else if (objetivo === 4){
                vidaRival.innerHTML = "";
                vidaDragonite = vidaDragonite - Math.ceil(ataquesPotenciales(7,movimientos.pisoton,2));
                barraRival.innerText = Math.ceil(vidaDragonite) + "/91";
                vidaRival.appendChild(barraRival);
                Toastify({
                    text: "Snorlax uso pisoton. Dragonite pierde " + Math.ceil(ataquesPotenciales(7,movimientos.pisoton,2)) +" de vida",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    className: "comentario"
                }).showToast();
            };
            ataqueYCambio(2);
        };
    };
};
function ataquesPidgeot(movimientoEnemigo,objetivo){
    if (movimientoEnemigo < 0.25){
        if (objetivo == 1){
            vidaUsuario.innerHTML = "";
            vidaPikachu = vidaPikachu - Math.ceil(ataques(0,movimientos.placaje,3));
            barraUsuario.innerText = vidaPikachu + "/35";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Pidgeot uso ataque rapido. Pikachu pierde "+ Math.ceil(ataques(0,movimientos.placaje,3)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 2){
            vidaUsuario.innerHTML = "";
            vidaSnorlax = vidaSnorlax - Math.ceil(ataques(2,movimientos.placaje,3));
            barraUsuario.innerText = vidaSnorlax + "/160";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Pidgeot uso ataque rapido. Snorlax pierde "+ Math.ceil(ataques(2,movimientos.placaje,3)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 3){
            vidaUsuario.innerHTML = "";
            vidaLugia = vidaLugia - Math.ceil(ataques(5,movimientos.placaje,3));
            barraUsuario.innerText = vidaLugia + "/106";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Pidgeot uso ataque rapido. Lugia pierde "+ Math.ceil(ataques(5,movimientos.placaje,3)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        };
    } else if (0.25 <= movimientoEnemigo < 0.50){
        if (objetivo == 1){
            vidaUsuario.innerHTML = "";
            vidaPikachu = vidaPikachu - Math.ceil(ataquesEspecialesYPotenciales(0,movimientos.aireAfilado,3));
            barraUsuario.innerText = vidaPikachu + "/35";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Pidgeot uso aire afilado. Pikachu pierde "+ Math.ceil(ataquesEspecialesYPotenciales(0,movimientos.aireAfilado,3)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 2){
            vidaUsuario.innerHTML = "";
            vidaSnorlax = vidaSnorlax - Math.ceil(ataquesEspecialesYPotenciales(2,movimientos.aireAfilado,3));
            barraUsuario.innerText = vidaSnorlax + "/160";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Pidgeot uso aire afilado. Snorlax pierde "+ Math.ceil(ataquesEspecialesYPotenciales(2,movimientos.aireAfilado,3)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 3){
            vidaUsuario.innerHTML = "";
            vidaLugia = vidaLugia - Math.ceil(ataquesEspecialesYPotenciales(5,movimientos.aireAfilado,3));
            barraUsuario.innerText = vidaLugia + "/106";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Pidgeot uso aire afilado. Lugia pierde "+ Math.ceil(ataques(5,movimientos.aireAfilado,3)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        };
    } else if (0.50 <= movimientoEnemigo < 0.75){
        if (vidaPidgeot <= 68){
            vidaRival.innerHTML = "";
            vidaPidgeot = vidaPidgeot + 15;
            barraRival.innerText = vidaPidgeot + "/83";
            vidaRival.appendChild(barraRival);
            Toastify({
                text: "Pidgeot uso respiro. Pidgeot recupera 15 de vida",
                duration: 2000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if (vidaPidgeot > 68){
            vidaRival.innerHTML = "";
            vidaPidgeot = 83;
            barraRival.innerText = vidaPidgeot + "/83";
            vidaRival.appendChild(barraRival);
            Toastify({
                text: "Pidgeot uso respiro. Pidgeot recupera 15 de vida",
                duration: 2000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        };
    } else {
        if (objetivo == 1){
            vidaUsuario.innerHTML = "";
            vidaPikachu = vidaPikachu - Math.ceil(ataquesPotenciales(0,movimientos.vuelo,3));
            barraUsuario.innerText = vidaPikachu + "/35";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Pidgeto uso vuelo. Pikachu pierde "+ Math.ceil(ataquesPotenciales(0,movimientos.vuelo,3)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 2){
            vidaUsuario.innerHTML = "";
            vidaSnorlax = vidaSnorlax - Math.ceil(ataquesPotenciales(2,movimientos.vuelo,3));
            barraUsuario.innerText = vidaSnorlax + "/160";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Pidgeot uso vuelo. Snorlax pierde "+ Math.ceil(ataquesPotenciales(2,movimientos.vuelo,3)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 3){
            vidaUsuario.innerHTML = "";
            vidaLugia = vidaLugia - Math.ceil(ataquesPotenciales(5,movimientos.vuelo,3));
            barraUsuario.innerText = vidaLugia + "/106";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Pidgeot uso vuelo. Lugia pierde "+ Math.ceil(ataquesPotenciales(5,movimientos.vuelo,3)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        };
    };
    derrota();
}; 
function ataquesDragonite(movimientoEnemigo,objetivo){
    if (movimientoEnemigo < 0.25){
        if (objetivo == 1){
            vidaUsuario.innerHTML = "";
            vidaPikachu = vidaPikachu - Math.ceil(ataquesEspeciales(0,movimientos.hiperRayo,7));
            barraUsuario.innerText = vidaPikachu + "/35";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Dragonite uso hiper rayo. Pikachu pierde "+ Math.ceil(ataquesEspeciales(0,movimientos.hiperRayo,7)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 2){
            vidaUsuario.innerHTML = "";
            vidaSnorlax = vidaSnorlax - Math.ceil(ataquesEspeciales(3,movimientos.hiperRayo,7));
            barraUsuario.innerText = vidaSnorlax + "/160";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Dragonite uso hiper rayo. Snorlax pierde "+ Math.ceil(ataquesEspeciales(3,movimientos.hiperRayo,7)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 3){
            vidaUsuario.innerHTML = "";
            vidaLugia = vidaLugia - Math.ceil(ataquesEspeciales(5,movimientos.hiperRayo,7));
            barraUsuario.innerText = vidaLugia + "/106";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Dragonite uso hiper rayo. Lugia pierde "+ Math.ceil(ataquesEspeciales(5,movimientos.hiperRayo,7)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        };
    } else if (0.25 <= movimientoEnemigo < 0.50){
        if (objetivo == 1){
            vidaUsuario.innerHTML = "";
            vidaPikachu = vidaPikachu - Math.ceil(ataquesEspecialesYPotenciales(0,movimientos.rayo,6));
            barraUsuario.innerText = vidaPikachu + "/35";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Dragonite uso rayo. Pikachu pierde "+ Math.ceil(ataquesEspecialesYPotenciales(0,movimientos.rayo,6)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 2){
            vidaUsuario.innerHTML = "";
            vidaSnorlax = vidaSnorlax - Math.ceil(ataquesEspecialesYPotenciales(3,movimientos.rayo,6));
            barraUsuario.innerText = vidaSnorlax + "/160";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Dragonite uso rayo. Snorlax pierde "+ Math.ceil(ataquesEspecialesYPotenciales(3,movimientos.rayo,6)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 3){
            vidaUsuario.innerHTML = "";
            vidaLugia = vidaLugia - Math.ceil(ataquesEspecialesYPotenciales(5,movimientos.rayo,6));
            barraUsuario.innerText = vidaLugia + "/106";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Dragonite uso rayo. Lugia pierde "+ Math.ceil(ataquesEspecialesYPotenciales(5,movimientos.rayo,6)) +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        };
    } else if (0.50 <= movimientoEnemigo < 0.75){
        estadisticas[6].ataqueEspecial = estadisticas[6].ataqueEspecial * 2;
        Toastify({
            text: "Dragonite uso maquinacion. Su ataque especial subio mucho",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            className: "comentario",
            onClick: function(){} // Callback after click
        }).showToast();
    } else {
        if (objetivo == 1){
            vidaUsuario.innerHTML = "";
            vidaPikachu = vidaPikachu - 40;
            barraUsuario.innerText = vidaPikachu + "/35";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Dragonite uso furia dragon. Pikachu pierde "+ 40 +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 2){
            vidaUsuario.innerHTML = "";
            vidaSnorlax = vidaSnorlax - 40;
            barraUsuario.innerText = vidaSnorlax + "/160";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Dragonite uso furia dragon. Snorlax pierde "+ 40 +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        } else if(objetivo == 3){
            vidaUsuario.innerHTML = "";
            vidaLugia = vidaLugia - 40;
            barraUsuario.innerText = vidaLugia + "/106";
            vidaUsuario.appendChild(barraUsuario);
            Toastify({
                text: "Dragonite uso furia dragon. Lugia pierde "+ 40 +" de vida",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                className: "comentario",
                onClick: function(){} // Callback after click
            }).showToast();
        };
    };
    derrota();
}; 
function paralizar(){    
}
/* Daño = 0.01 x (((1 + ataque x poder de ataque)/25xDefensa)+2) */