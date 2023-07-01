/**
 * Calculation of rotations of hour, minute and second hands in 1 sec respectively
 * 
 * Hour hand
 * 12 hours = 360 deg => 1 hour = 30 deg => 60 min = 30 deg => 1 min = 0.5 deg => 60 sec = 0.5 deg => 1 sec = 1/120 deg
 * 
 * Minute hand
 * 60 min = 360 deg => 1 min = 6 deg => 60 sec = 6 deg => 1 sec = 0.1 deg
 * 
 * Second hand
 * 60 sec = 360 deg => 1 sec = 6 deg
 */

const clockContainerElement = document.getElementById('clock-container');
let hourElement = document.getElementById('hour');
const minuteElement = document.getElementById('minute');
const secondElement = document.getElementById('second');

const distBetweenTopOfSecondElementAndBottomOfHourElement =
hourElement.getBoundingClientRect().bottom-secondElement.getBoundingClientRect().top;
const heightOfSecondElement = 
secondElement.getBoundingClientRect().bottom - secondElement.getBoundingClientRect().top;
const y_percent = (distBetweenTopOfSecondElementAndBottomOfHourElement / heightOfSecondElement) * 100;
console.log(y_percent);
secondElement.style.transformOrigin = `50% ${y_percent}%`;

setInterval(() => {
    let time = new Date();
    let hours = time.getHours() % 12;
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let hourHandRotation = ((3600*hours)+(60*minutes)+seconds)/120;
    let minuteHandRotation = ((60*minutes)+seconds)*0.1;
    let secondHandRotation = seconds * 6;

    hourElement.style.transform = `rotate(${hourHandRotation}deg)`;
    minuteElement.style.transform = `rotate(${minuteHandRotation}deg)`;
    secondElement.style.transform = `rotate(${secondHandRotation}deg)`;
}, 1000);