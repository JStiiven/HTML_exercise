let btnPiedra = document.getElementById("btn-piedra");
let btnPapel = document.getElementById("btn-papel");
let btnTijera = document.getElementById("btn-tijera");
let titulo = document.getElementById("titulo");
let titulo2 = document.getElementById("titulo2");
let titulo3 = document.getElementById("titulo3");
let cpu;

btnPiedra.addEventListener("click", cambiarApiedra);
btnPapel.addEventListener("click", cambiarApapel);
btnTijera.addEventListener("click", cambiarAtijera);

function cambiarApiedra() {
  titulo.textContent = "Usted eligió piedra";
  jugadorCpu();
  if (cpu == 1) {
    titulo3.textContent = "¡Empate!";
  } else if (cpu == 2) {
    titulo3.textContent = "¡Gana la CPU!";
  } else if (cpu == 3) {
    titulo3.textContent = "¡Gana el jugador!";
  }
}

function cambiarApapel() {
  titulo.textContent = "Usted eligió papel";
  jugadorCpu();
  if (cpu == 1) {
    titulo3.textContent = "¡Gana el jugador!";
  } else if (cpu == 2) {
    titulo3.textContent = "¡Empate!";
  } else if (cpu == 3) {
    titulo3.textContent = "¡Gana la CPU!";
  }
}

function cambiarAtijera() {
  titulo.textContent = "Usted eligió tijera";
  jugadorCpu();
  if (cpu == 1) {
    titulo3.textContent = "¡Gana la CPU!";
  } else if (cpu == 2) {
    jugadorCpu();
    titulo3.textContent = "¡Gana el jugador!";
  } else if (cpu == 3) {
    titulo3.textContent = "¡Empate!";
  }
}

function jugadorCpu() {
  cpu = Math.round(Math.random() * (3 - 1) + 1);
  if (cpu == 1) {
    titulo2.textContent = "La CPU eligió piedra";
  } else if (cpu == 2) {
    titulo2.textContent = "La CPU eligió papel";
  } else {
    titulo2.textContent = "La CPU eligió tijera";
  }
}

