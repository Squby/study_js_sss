'use strict';

const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
    };
const getRandomNum = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

const getCounter = function() {
  let counter = 0;
  return function() {
    return ++counter;
  };
};

const gameRandom = function(attemps) {
  const randomNum = getRandomNum(1, 100);
  const counter = getCounter();
  console.log(randomNum);

  return (function checkNumber() {
    const count = counter();
    const userNumber = prompt('Попробуй угадать число');
    if (isNumber(userNumber)) {
      let repeat = false;
      if (count < attemps) {
        const num = +userNumber;
        if (num > randomNum) {
          alert ('Загадоное число меньше');
          return checkNumber();
        }
        if (num < randomNum){
          alert ('Загаданное число больше');
          return checkNumber();
        }
        const repeat = confirm('Вы угадали, молодец, молодец! Хотите сыграть еще?');
        if (repeat) {gameRandom(attemps);}
      } else {
        const repeat = confirm('Количество попыток закончилось! Хотите сыграть еще?');
      }
    } else {
      if (userNumber !== null) {
      alert ("Введите число");
      checkNumber();
    }
    }
    alert ('Пока друг!');
  }());
};

gameRandom(10);
