'use strict';
let income  = 'freelance', 
    mission = 1000,
    period = 4,
    budgetDay,
    money = prompt('Ваш месячный даход?'),
    addExpenses = prompt('Перечислети статьи раходов через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expenses1 =  prompt('Введите обязательную статью расходов?'),
    amount1 = prompt('Во сколько это обойдется?'),
    expenses2 =  prompt('Введите обязательную статью расходов?'),
    amount2 = prompt('Во сколько это обойдется?');
    // countMonth;
    money = 1*money;
    amount1 = parseInt(amount1);
    amount2 = parseInt(amount2);

    let showTypeof = function (data) {
        console.log(data, typeof(data));
    };

    function getExpensesMonth (amount1, amount2){
        return (amount1 + amount2);
        }
    console.log(getExpensesMonth (amount1, amount2));

    function getAccumulatedMonth(money, amount1, amount2){
        return (money - amount1 - amount2);
    }

    let accumulatedMonth = getAccumulatedMonth(money, amount1, amount2);

    function getTargetMonth (mission, accumulatedMonth){
        return (Math.ceil(mission/accumulatedMonth));
    }
    console.log(getTargetMonth (mission, accumulatedMonth));

   
    // console.log('колличество месяцев = ' + countMonth);
    showTypeof(money);
    showTypeof(income);
    showTypeof(deposit);

    console.log('Период равен ' + period + ' месяцев');
    console.log('Цель заработать ' + mission + ' долларов');
    console.log((addExpenses.toLowerCase()).split(', '));
    console.log('Дневной доход: ', Math.floor(budgetDay = accumulatedMonth / 30));

    let getStatusIncome = function () {
    if (budgetDay >= 1200){
        return ('У вас высокий уровень дохода');
    }   else if ((budgetDay < 1200) || (budgetDay > 600)){
        return ('У вас средний уровень дохода');
        }
           else if ((budgetDay >=0) || (budgetDay <= 600)) {
            return ('К сожалению у вас уровень дохода ниже среднего');
            }   else if(budgetDay < 0) {
                return ('Что то пошло не так');
                }  };
    console.log(getStatusIncome());




// 7) Почистить консоль логи и добавить недостающие, должны остаться:

//  - вызовы функции showTypeOf

//  - Расходы за месяц вызов getExpensesMonth

//  - Вывод возможных расходов в виде массива (addExpenses)

//  - Cрок достижения цели в месяцах (результат вызова функции getTargetMonth) 

//  - Бюджет на день (budgetDay)

//  - вызов функции getStatusIncome


// 8) Проверить, чтобы все работало и не было ошибок в консоли


// 9) Добавить папку с четвертым уроком в свой репозиторий на GitHub