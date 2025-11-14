"use strict";
// RECORDAR OPTIMIZAR EL CÓDIGO
let number = document.querySelector(".number"); // Selecciona el signo '?'
let message = document.querySelector(".message"); // Se selecciona el mensaje
let secret_number = Math.ceil(Math.random() * 20); // Se elige un número secreto random
let bg = document.querySelector("body"); // Selecciona el body del documento
let score = document.querySelector("#score"); // Selecciona el score
let again = document.querySelector("#again"); // Selecciona el botón de reset
let check = document.querySelector("#check"); // Selecciona el botón para checkear la respuesta
let vidas = 17;
let highscore = 0;
let flag = false;

check.addEventListener("click", function () {
  // Se le asigna el evento del click al botón check y la función principal
  let guess = Number(document.querySelector(".guess").value); // Selecciona el input donde ponen el valor
  if (!guess) {
    message.textContent = "Not number!";
  } else if (guess == secret_number && vidas >= 1) {
    number.textContent = secret_number;
    message.textContent = "You got it!";
    bg.style.backgroundColor = "#31b808ff";
    flag = true;
    if (vidas > highscore) {
      highscore = vidas;
      document.querySelector("#highscore").textContent = vidas;
    }
  } else if (guess !== secret_number && !flag) {
    if (vidas > 1) {
      vidas--;
      score.textContent = vidas;
      message.textContent = guess > secret_number ? "Too high!" : "Too low";
    } else {
      message.textContent = "You lost!";
      score.textContent = 0;
      vidas = 0;
      bg.style.backgroundColor = "rgba(179, 56, 19, 1)";
    }
  }
});
again.addEventListener("click", () => {
  message.textContent = "Start guessing...";
  vidas = 17;
  score.textContent = vidas;
  number.textContent = "?";
  bg.style.backgroundColor = "var(--color_fondo)";
  document.querySelector(".guess").value = "";
  secret_number = Math.ceil(Math.random() * 20);
  flag = false;
});
