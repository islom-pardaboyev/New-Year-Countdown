const dayEl = document.querySelector('#day');
const hourEl = document.querySelector('#hour');
const minuteEl = document.querySelector('#minute');
const secondEl = document.querySelector('#second');

const exampleYear = new Date().getFullYear() + 1;

const newYearDate = new Date(`Jan 1, ${exampleYear} 00:00:00`).getTime();

const modal = document.querySelector('#modal');
const closeModal = document.querySelector('#closeModal');

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

    setTimeout(updateCountDown, 1000); // Changed the delay to 1000 milliseconds (1 second)

    // if (now >= newYearDate) {
    //     modal.classList.remove('scale-0', 'hidden');
    // }

    // closeModal.addEventListener('click', () => {
    //     modal.classList.add('scale-0', 'hidden');
    // });
}
