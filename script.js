'use strict';
// RECORDAR OPTIMIZAR EL CÓDIGO
var number = document.querySelector(".number"); // Selecciona el signo '?'
var secret_number = Math.ceil(Math.random() * 20); // Se elige un número secreto random
var message = document.querySelector(".message"); // Se selecciona el mensaje
console.log(secret_number);
var again = document.querySelector("#again"); // Selecciona el botón de reset
var bg = document.querySelector("body"); // Selecciona el body del documento
var guess = document.querySelector(".guess"); // Selecciona el input donde ponen el valor
var score = document.querySelector("#score"); // Selecciona el score
console.log(score.textContent)
var highscore = document.querySelector("#highscore"); // Selecciona el máximo score
console.log(highscore);
console.log(typeof highscore.textContent);
var vidas = 17;
var check = document.querySelector("#check"); // Selecciona el botón para checkear la respuesta

check.addEventListener('click', function() { // Se le asigna el evento del click al botón check y la función principal
    var user_value = Number(guess.value);
    if (user_value == secret_number) {
        number.textContent = secret_number;
        message.textContent = "You got it!";
        bg.style.backgroundColor = "green";
        if (Number(score.textContent) < Number(highscore.textContent)) {
            highscore.textContent = vidas;
        }
    } else if (user_value > secret_number) {
        vidas -= 1;
        score.textContent = vidas;
        if (vidas <= 0) {
            message.textContent = "You lose!";
        } else {
            message.textContent = "Too high"
        }
    } else if (user_value < secret_number) {
        vidas -= 1;
        score.textContent = vidas;
        if (vidas <= 0) {
            message.textContent = "You lose!";
        } else {
            message.textContent = "Too low"
        }
    };
});
again.addEventListener('click', () => {
    message.textContent = "Start guessing...";
    vidas = 17;
    score.textContent = vidas;
    number.textContent = "?";
    bg.style.backgroundColor = "var(--color_fondo)";
    guess.value = 0;
    secret_number = Math.ceil(Math.random() * 20);
    console.log(secret_number);
})