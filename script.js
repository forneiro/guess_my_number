'use strict';
// RECORDAR OPTIMIZAR EL CÓDIGO
var number = document.querySelector(".number"); // Selecciona el signo '?'
var secret_number = Math.ceil(Math.random() * 20); // Se elige un número secreto random
var message = document.querySelector(".message"); // Se selecciona el mensaje
var bg = document.querySelector("body"); // Selecciona el body del documento
var score = document.querySelector("#score"); // Selecciona el score
var vidas = 17;
var highscore = 0;
var again = document.querySelector("#again"); // Selecciona el botón de reset
var check = document.querySelector("#check"); // Selecciona el botón para checkear la respuesta

check.addEventListener('click', function() { // Se le asigna el evento del click al botón check y la función principal
    var guess = Number(document.querySelector(".guess").value); // Selecciona el input donde ponen el valor
    if (!guess) {
        message.textContent = "Not number!";
    } else if (guess == secret_number) {
        number.textContent = secret_number;
        message.textContent = "You got it!";
        bg.style.backgroundColor = "#31b808ff";
        if (vidas > highscore) {
            highscore = vidas;
            document.querySelector("#highscore").textContent = vidas;
        }
    } else if (guess !== secret_number) {
        if (vidas > 1) {
            vidas--;
            score.textContent = vidas;
            message.textContent = guess > secret_number ? 'Too high!': 'Too low';
        } else {
            message.textContent = 'You lost!'
            score.textContent = 0;
        }
    }
});
again.addEventListener('click', () => {
    message.textContent = "Start guessing...";
    vidas = 17;
    score.textContent = vidas;
    number.textContent = "?";
    bg.style.backgroundColor = "var(--color_fondo)";
    document.querySelector(".guess").value = '';
    secret_number = Math.ceil(Math.random() * 20);
})