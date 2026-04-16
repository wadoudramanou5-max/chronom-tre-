let secondes = 0;
let timer= null;


function afficherTemps() {
    const minutes = Math.floor(secondes / 60);
    const secondesRestantes = secondes % 60;
    const heures = Math.floor(minutes / 60);
    const minutesRestantes = minutes % 60;
    document.getElementById("display").textContent = `${heures.toString().padStart(2, '0')}:${minutesRestantes.toString().padStart(2, '0')}:${secondesRestantes.toString().padStart(2, '0')}`;
}

function start() {
    if (timer === null) {
        timer = setInterval(() => {
            secondes++;
            afficherTemps();
        }, 1000);
    }
}

function stop() {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
}

function reset() {
    stop();
    secondes = 0;
    afficherTemps();
}

