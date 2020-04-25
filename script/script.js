/* eslint-disable prefer-const */
/* eslint-disable strict */
window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //Timer
    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = (Math.floor(timeRemaining % 60)).toString(),
                minutes = (Math.floor((timeRemaining / 60) % 60)).toString(),
                hours = (Math.floor((timeRemaining / 60 / 60) % 24)).toString();
            if (timeRemaining <= 0) {
                seconds = '00';
                minutes = '00';
                hours = '00';
                clearInterval(2);
            }

            if (seconds.length === 1) {
                const temp = seconds;
                seconds = '0' + temp;
            }
            if (minutes.length === 1) {
                const temp = minutes;
                minutes = '0' + temp;
            }
            if (hours.length === 1) {
                const temp = hours;
                hours = '0' + temp;
            }


            return { timeRemaining, hours, minutes, seconds };

        }

        function updateClock() {
            const timer = getTimeRemaining();
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;

            if (timer.timeRemaining > 0) {
                setInterval(updateClock, 1000);
            }
        }
        updateClock();


    }
    countTimer('01 may 2020');
});
