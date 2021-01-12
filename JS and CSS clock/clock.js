const secondsHand = document.querySelector('.seconds-hand');
const minutesHand = document.querySelector('.minutes-hand');
const hoursHand = document.querySelector('.hour-hand');

function showClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds /60) * 360) + 90;
    secondsHand.style.transform= `rotate(${secondsDegrees}deg)`;

    const minutesDegrees = ((minutes /60) * 360) + ((seconds/60) * 6) + 90;
    minutesHand.style.transform= `rotate(${minutesDegrees}deg)`;

    const hoursDegrees = ((hours /12) * 360) + ((minutes/60) * 30) + 90;
    hoursHand.style.transform= `rotate(${hoursDegrees}deg)`;
}

setInterval(showClock, 1000);
showClock();