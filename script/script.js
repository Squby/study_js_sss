'use strict';
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
    };

let money,
    start = function (){
        do {
        money = prompt('Ваш месячный даход?');
    } while (!isNumber(money));
    };
start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    asking: function(){
        let addExpenses = prompt('Перечислети статьи раходов через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        let temp = 0,sum = 0;
        for (let i = 0; i < 2; i++) {
            
            let answer =  prompt('Введите обязательную статью расходов?', 'еда');
            do {
                temp = prompt('Во сколько это обойдется?');}
                while (!isNumber(temp));
            appData.expenses [answer] = temp;
        }
        
    },
    expensesMonth: function(){
        let elements = 0;
        for (const key in appData.expenses) {
            const element = appData.expenses[key];
            elements = elements +  1*element;     
        }
        return(elements);
    },

    getBudget: function (){
        appData.budgetMonth = money - appData.expensesMonth();
        appData.budgetDay = appData.budgetMonth/30;
    },

    getTargetMonth: function (){
        return (Math.ceil(appData.mission/appData.budgetMonth));
    },

    getStatusIncome: function () {
        if (appData.budgetDay >= 1200){
            return ('У вас высокий уровень дохода');
        }   else if ((appData.budgetDay < 1200) || (appData.budgetDay > 600)){
            return ('У вас средний уровень дохода');
            }
               else if ((appData.budgetDay >=0) || (appData.budgetDay <= 600)) {
                return ('К сожалению у вас уровень дохода ниже среднего');
                }   else if(appData.budgetDay < 0) {
                    return ('Что то пошло не так');
                    }  }
};
appData.asking();
appData.getBudget();


// let expenseAmount = appData.expensesMonth(),
//     accumulatedMonth = appData.budgetMonth;

    
if (appData.getTargetMonth () > 0){
    console.log('Цель будет достигнута за ' + appData.getTargetMonth() + ' месяцев');
}   else {
    console.log('Цель не будет достигнута');
}

console.log('Дневной доход: ', Math.floor(appData.budgetDay));
console.log('Расходы за месяц: ' + appData.expensesMonth());
console.log(appData.getStatusIncome());
console.log('Наша программа включает в себя данные:');
for (const key in appData) {
    console.log('Свойство: ' + key + ' Значене: '+appData[key]);}