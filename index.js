const dayEl = document.querySelector('#day');
const hourEl = document.querySelector('#hour');
const minuteEl = document.querySelector('#minute');
const secondEl = document.querySelector('#second');
const newYearEl = document.querySelector('#newYear');

const nowYear = new Date().getFullYear() + 1;

const newYearDate = new Date(`Jan 1, ${nowYear} 00:00:00`).getTime();

updateCountDown();

function updateCountDown() {
    const now = new Date().getTime();
    const distance = newYearDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    dayEl.innerHTML = days;
    hourEl.innerHTML = hours;
    minuteEl.innerHTML = minutes;
    secondEl.innerHTML = seconds;
    newYearEl.innerHTML = nowYear;

    setTimeout(updateCountDown, 100);
}
