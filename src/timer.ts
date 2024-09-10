let timer: any
let isRunning = false;
let seconds = 0;

function updateDisplay() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    const display = document.getElementById('time');
    if (display) {
        display.textContent = [hours, minutes, secs]
            .map(v => v < 10 ? "0" + v : v)
            .join(":");
    }
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    updateDisplay();
}

// Check if we're on the timer page before adding event listeners
if (document.getElementById('timer')) {
    document.getElementById('start')!.addEventListener('click', startTimer);
    document.getElementById('stop')!.addEventListener('click', stopTimer);
    document.getElementById('reset')!.addEventListener('click', resetTimer);

    // Initial display
    updateDisplay();
}