let intervalId;
let seconds = 0;
let minutes = 0;
let hours = 0;
let lapCount = 0;

const displayElement = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause'); // corrected id
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapList = document.getElementById('laps');

startButton.addEventListener('click', startStopwatch);
pauseButton.addEventListener('click', stopStopwatch); // corrected event listener
resetButton.addEventListener('click', resetStopwatch);
lapButton.addEventListener('click', recordLap);

function startStopwatch() {
    if (!intervalId) { // Prevent multiple intervals from starting
        intervalId = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            if (minutes === 60) {
                hours++;
                minutes = 0;
            }
            updateDisplay();
        }, 1000);
    }
}

function stopStopwatch() {
    clearInterval(intervalId);
    intervalId = null; // Reset intervalId
}

function resetStopwatch() {
    clearInterval(intervalId);
    intervalId = null; // Reset intervalId
    seconds = 0;
    minutes = 0;
    hours = 0;
    lapCount = 0;
    lapList.innerHTML = '';
    updateDisplay();
}

function pad(number) {
    return (number < 10 ? '0' : '') + number;
}

function updateDisplay() {
    const displayString = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    displayElement.textContent = displayString;
}

function recordLap() {
    lapCount++;
    const lapTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`; // Corrected template literal syntax
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`; // Corrected template literal syntax
    lapList.appendChild(lapItem);
}
