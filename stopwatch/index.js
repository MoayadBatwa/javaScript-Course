

function runStopwatch() {
    const date = new Date();
    let timerString = '00:00:00:00'

    function updateStopwatch() {
        const nowDate = new Date();
        const timer = nowDate - date;

        let hours = Math.floor(timer / 3600000);
        let minutes = Math.floor(timer / 60000 % 60);
        let seconds = Math.floor(timer / 1000 % 60);
        let milliseconds = Math.floor(timer % 1000 / 10);

        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');
        milliseconds = milliseconds.toString().padStart(2, '0');

        timerString = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }

    function timer() {
        return timerString;
    }

    return { updateStopwatch, timer }
}


let stopwatch = runStopwatch();

let timerId;

let isRunning = false;

function startTimer() {
    console.log(timerId);
    if (!isRunning) {
        isRunning = true;
        timerId = setInterval(() => {
            stopwatch.updateStopwatch();
            document.getElementById("stopwatch").textContent = stopwatch.timer()
        }, 10);
    }

}

function stopTimer() {
    if (timerId != null) {
        clearInterval(timerId);
        isRunning = false;
    }
}

function resetTimer() {
    stopTimer();
    stopwatch = runStopwatch();
    isRunning = false;
    document.getElementById("stopwatch").textContent = stopwatch.timer();
}