/* eslint-disable prefer-const */
/* eslint-disable strict */
window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //Timer
    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
        let indexOfInterval;
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
                indexOfInterval = setInterval(updateClock, 1000);
            }
            clearInterval(indexOfInterval);
        }
        updateClock();
    }
    countTimer('01 december 2020');

    //menu
    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);
        menu.addEventListener('click', () => {
            let target = event.target;

            if (!target.classList.contains('close-btn')) {
                target = target.closest('li');
            }

            if (target) { handlerMenu(); }
        });
    };

    toggleMenu();

    //popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn');

        popupBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                let count = 0,
                    indexSetInterval;
                popup.style.display = 'block';
                function opacityAdd() {
                    count += 0.1;
                    popup.style.opacity = count;
                    console.log(count);
                    if (count >= 1) {
                        clearInterval(indexSetInterval);
                        count = 0;
                    }
                }
                if (screen.width > 768) {
                    popup.style.opacity = 0;

                    indexSetInterval = setInterval(() => opacityAdd(), 50);
                    console.log(indexSetInterval);
                }
            });
        });

        popup.addEventListener('click', event => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popup.style.display = 'none';
                }
            }
        });
    };
    togglePopUp();

    //tabs
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                }   else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', event => {
            let target = event.target;
            target = target.closest('.service-header-tab');
            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };
    tabs();
    //slider
    const slider = () => {
        const  slider = document.querySelector('.portfolio-content'),
            slide = document.querySelectorAll('.portfolio-item'),
            ul = slider.querySelector('.portfolio-dots');

        ul.innerHTML = '<li class="dot dot-active"></li>';
        for (let i = 0; i < slide.length - 1; i++) {
            ul.innerHTML += '<li class="dot"></li>';
        }
        const dot = document.querySelectorAll('.dot');

        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide =  (elem, index, strClass) => {
            elem[index].classList.add(strClass);

        };

        const autoPlaySlider = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlider, time);
        };

        const stopSlide = () => {
            clearInterval(interval);

        };
        slider.addEventListener('click', event => {
            event.preventDefault();
            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            if (target.matches('#arrow-right')) {
                currentSlide++;
            }   else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', event => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            }
        });
        slider.addEventListener('mouseout', event => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide();
            }
        });
        startSlide(1500);
    };

    slider();

    //ChengeIMG
    function ChengeIMG() {
        const imgAll = document.querySelectorAll('.command__photo');
        imgAll.forEach((element, i) =>  {
            imgAll[i].addEventListener('mouseenter', () => {
                event.target.src = event.target.dataset.img;
            });
        });
    }
    ChengeIMG();


    //ValidationFormInput
    function ValidationFormInput() {
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
    }
    ValidationFormInput();
    // todo
    const validationFormSend = () => {
        const formName = document.querySelectorAll('.form-name'),
            formPhone = document.querySelectorAll('.form-phone'),
            mess = document.querySelector('.mess');

        formPhone.forEach(elem => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/[^0-9+]/, '');
            });
        });

        mess.addEventListener('input', () => {
            mess.value = mess.value.replace(/[^а-яА-ЯёЁ]/, '');
            console.log(mess.value);
        });


        formName.forEach(elem => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/[^а-яА-ЯёЁ]/, '');
            });
        });

    };
    validationFormSend();

    //calculator

    const calc = (price = 100) => {
        const calcType = document.querySelector('.calc-type'),
            calcBlock = document.querySelector('.calc-block'),
            calcSquare = document.querySelector('.calc-square'),
            calcCount = document.querySelector('.calc-count'),
            calcDay = document.querySelector('.calc-day'),
            totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeVlue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
                console.log(countValue);
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            }   else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (typeVlue && squareValue) {
                total = price * typeVlue * squareValue * countValue * dayValue;
            }
            totalValue.textContent = total;
        };


        calcBlock.addEventListener('change', event => {
            const target = event.target;
            if (target.matches('select') || target.matches('input')) {
                countSum();
            }
        });

    };

    calc(100);

    //send-ajax-form

    const sendForm = () => {
        const errorMessage = 'Что-то пошло не так',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжимся!',
            forms = document.querySelectorAll('form');
        let indexForm;
        forms.forEach((elem, index) => {
            elem.addEventListener('click', event => {
                if (event.target.classList[0] === 'btn') {
                    indexForm = index + 1;
                    const form = document.getElementById(`form${indexForm}`);
                    const statusMessage = document.createElement('div');
                    statusMessage.style.cssText = 'font-size: 2rem; color : white;';
                    form.addEventListener('submit', event => {
                        event.preventDefault();
                        form.appendChild(statusMessage);
                        statusMessage.textContent = loadMessage;
                        const formData = new FormData(form);
                        let body = {};

                        const postData = body => new Promise((resolve, reject) => {
                            const request = new XMLHttpRequest();

                            request.addEventListener('readystatechange', () => {
                                if (request.readyState !== 4) {
                                    return;
                                }
                                if (request.status === 200) {
                                    resolve();
                                } else {
                                    reject(request.status);
                                }
                            });

                            request.open('POST', './server.php');
                            request.setRequestHeader('Content-Type', 'application/json');
                            request.send(JSON.stringify(body));
                        });

                        formData.forEach((val, key) => {
                            body[key] = val;
                        });
                        postData(body)
                            .then(() => statusMessage.textContent = successMessage)
                            .catch(error => {
                                console.log(error);
                                statusMessage.textContent = errorMessage;
                            });
                    });
                }
            });
        });


    };
    sendForm();


});



