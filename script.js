// Palabra para adivinar (puedes cambiarla)
const palabraSecreta = "AHORCADO";

// Inicialización del juego
let palabraAdivinada = Array(palabraSecreta.length).fill('_');
let intentosRestantes = 6;
let letrasUsadas = [];

// Función para mostrar la palabra adivinada en la interfaz
function mostrarPalabra() {
    document.getElementById('word-display').textContent = palabraAdivinada.join(' ');
}

// Función para actualizar la lista de letras usadas
function mostrarLetrasUsadas() {
    document.getElementById('used-letters').textContent = letrasUsadas.join(', ');
}

// Función para adivinar una letra
function guessLetter() {
    const letraIngresada = document.getElementById('guess-input').value.toUpperCase();

    if (letrasUsadas.includes(letraIngresada)) {
        alert("Ya la usaste. ¡Intenta con otra!");
        return;
    }

    letrasUsadas.push(letraIngresada);

    if (palabraSecreta.includes(letraIngresada)) {
        // La letra está en la palabra
        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letraIngresada) {
                palabraAdivinada[i] = letraIngresada;
            }
        }
    } else {
        // La letra no está en la palabra
        intentosRestantes--;
        document.getElementById('attempts').textContent = intentosRestantes;

        if (intentosRestantes === 0) {
            alert("¡AHORCADO! Perdiste tus intentos. La palabra era: " + palabraSecreta);
            reiniciarJuego();
        }
    }

    mostrarPalabra();
    mostrarLetrasUsadas();

    if (palabraAdivinada.join('') === palabraSecreta) {
        alert("¡Felicidades! Adivinaste la palabra " + palabraSecreta);
        reiniciarJuego();
    }

    // Limpiar el campo de entrada
    document.getElementById('guess-input').value = '';
}

// Función para reiniciar el juego
function reiniciarJuego() {
    palabraAdivinada = Array(palabraSecreta.length).fill('_');
    intentosRestantes = 6;
    letrasUsadas = [];
    document.getElementById('attempts').textContent = intentosRestantes;
    mostrarPalabra();
    mostrarLetrasUsadas();
}

// Mostrar la palabra al cargar la página
document.addEventListener('DOMContentLoaded', mostrarPalabra);
