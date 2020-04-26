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

    //menu
    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));
    };

    toggleMenu();

    //popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close');

        popupBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                let count = 0;
                popup.style.display = 'block';
                function opacityAdd() {
                    count += 0.1;
                    popup.style.opacity = count;
                    if (count === 1) {
                        clearTimeout(4);
                    }
                }
                if (screen.width > 768) {
                    popup.style.opacity = 0;
                    setInterval(() => opacityAdd(), 30);
                }

            });
        });
        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };
    togglePopUp();

    //ChengeIMG
    const imgAll = document.querySelectorAll('.command__photo');
    imgAll.forEach((element, i) =>  {
        imgAll[i].addEventListener('mouseenter', () => {
            event.target.src = event.target.dataset.img;
        });
    });

    //ValidationFormInput
    //document.querySelector('.calc-square').textContent.match (/[^0-9+]/g, '');
    const calcSquare = document.querySelector('.calc-square'),
        calcCount = document.querySelector('.calc-count'),
        calcDay = document.querySelector('.calc-day');

    function validationNum(inputValid) {
        inputValid.addEventListener('input', () => {
            inputValid.value = inputValid.value.replace(/\D/gi);
        });
    }
    validationNum(calcSquare);
    validationNum(calcCount);
    validationNum(calcDay);




});
