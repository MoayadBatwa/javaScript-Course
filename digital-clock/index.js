const clock = document.getElementById('clock');

function updateClock() {
    const dateNow = new Date();

    let hours = dateNow.getHours();
    const meridiem = hours >= 12? 'PM' : 'AM';

    hours =  hours % 12 || 12;
    hours = hours.toString().padStart(2, '0');
    const minutes = dateNow.getMinutes().toString().padStart(2, '0');
    const seconds = dateNow.getSeconds().toString().padStart(2, '0');

    const clockString = `${hours}:${minutes}:${seconds} ${meridiem}`;


    clock.textContent = clockString;
}


updateClock()
setInterval(updateClock, 1000)