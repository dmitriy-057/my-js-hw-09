import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
require("flatpickr/dist/themes/dark.css");

const refs = { 
    btn: document.querySelector("button[data-start]"),
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]"),
}

let selectedDate;
let intervalId = null;
refs.btn.disabled = true;

// Настройки библиотеки flatpickr
const optional_config = {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    minuteIncrement: 1,
    defaultDate: new Date(),
    
    onClose(targetDates) {
        console.log('targetDates', targetDates);

        if(targetDates[0] < Date.now()) {
            console.log('targetDates[0]', targetDates[0]);

            refs.btn.disabled = true;
            alert("Пожалуйста выберите дату в будующем");
            return;
        }

        refs.btn.disabled = false;
        selectedDate = targetDates[0];
        console.log('selectedDate', selectedDate)
    }
};

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    if (!ms) {
        return;
    };
    // Вычесляем остаток дней, часов, минут...
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
 
    refs.days.textContent = days < 10 ? `${days}` : days;
    refs.hours.textContent = hours < 10 ? `${hours}` : hours;
    refs.minutes.textContent = minutes < 10 ? `${minutes}` : minutes;
    refs.seconds.textContent = seconds < 10 ? `${seconds}` : seconds;
      
    return { days, hours, minutes, seconds };
  };

  refs.btn.addEventListener("click", ()=> {
    intervalId =  setInterval(() => {
        if(selectedDate > Date.now()) {
            refs.btn.disabled = true;
           return convertMs(selectedDate - Date.now())
        };

        clearInterval(intervalId);
    }, 1000);
  })





flatpickr("input", optional_config);



