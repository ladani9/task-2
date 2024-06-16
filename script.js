document.addEventListener('DOMContentLoaded', (event) => {
    let timer;
    let isRunning = false;
    let milliseconds = 0;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    const display = document.querySelector('.dis');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');

    function updateDisplay() {
        display.textContent = 
            (hours < 10 ? '0' : '') + hours + ':' + 
            (minutes < 10 ? '0' : '') + minutes + ':' + 
            (seconds < 10 ? '0' : '') + seconds + ':' + 
            (milliseconds < 10 ? '00' : milliseconds < 100 ? '0' : '') + milliseconds;
    }

    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            timer = setInterval(() => {
                milliseconds += 10;
                if (milliseconds >= 1000) {
                    milliseconds = 0;
                    seconds++;
                    if (seconds === 60) {
                        seconds = 0;
                        minutes++;
                        if (minutes === 60) {
                            minutes = 0;
                            hours++;
                        }
                    }
                }
                updateDisplay();
            }, 10);
        }
    }

    function stopTimer() {
        if (isRunning) {
            isRunning = false;
            clearInterval(timer);
        }
    }

    function resetTimer() {
        clearInterval(timer);
        isRunning = false;
        milliseconds = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;
        updateDisplay();
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);

    // Initialize display
    updateDisplay();
});
