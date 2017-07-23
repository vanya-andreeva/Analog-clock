const HOUR = document.querySelector("#hour");
const MINUTE = document.querySelector("#minute");
const SECOND = document.querySelector("#second");

var date = new Date();

let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let hourPosition = (hour*360/12)+(minutes*(360/60)/12);
let minutesPosition = (minutes*360/60)+(seconds*(360/60)/60);
let secondsPosition = seconds*360/60;

function runClock() {

    hourPosition = hourPosition+(3/360);
    minutesPosition = minutes+(6/60);
    secondsPosition = secondsPosition+6;

    HOUR.style.transform = "rotate(" + hourPosition + "deg)";
    MINUTE.style.transform = "rotate(" + minutesPosition + "deg)";
    SECOND.style.transform = "rotate(" + secondsPosition + "deg)";

}

var interval = setInterval(runClock, 1000);
