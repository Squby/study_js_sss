'use strict';
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
    };


let income  = 'freelance', 
    mission = 10000,
    period = 4,
    budgetDay,
    money,
    addExpenses = prompt('Перечислети статьи раходов через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?');
    
    let start = function (){
         do {
            money = prompt('Ваш месячный даход?');
        } while (!isNumber(money));
    };
    start();
    let expenses = [];
     let getExpensesMonth = function (){
        let temp = 0,sum = 0;
        for (let i = 0; i < 2; i++) {

            expenses[i] =  prompt('Введите обязательную статью расходов?', 'еда');
            do {
                temp = prompt('Во сколько это обойдется?');}
                while (!isNumber(temp));
            sum += +temp;
        }
        console.log(sum);
        return sum;
    };
    let expenseAmount = getExpensesMonth();

    let showTypeof = function (data) {
        console.log(data, typeof(data));
    };
    let getAccumulatedMonth = function (){
        return (money - expenseAmount);
    };
    let accumulatedMonth = getAccumulatedMonth();

    function getTargetMonth (){
        return (Math.ceil(mission/accumulatedMonth));
    }
    if (getTargetMonth () > 0){
        console.log('Цель будет достигнута за ' + getTargetMonth() + ' месяцев');
    }   else {
        console.log('Цель не будет достигнута');
    }
    
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
