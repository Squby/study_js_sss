'use strict';
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
    };

let isString = function(n) {
    return !isNumber(n) && n !== '' && n !== null;
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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    asking: function(){
        let itemIncome, cashIncome;
        if (confirm('Есть ли у вас дополнительный источник зароботка?')){
                
                do {
                    itemIncome = prompt('Какой у вас дополнительный зароботок?', 'Таксую');
                } while (!isString(itemIncome));

                do {
                    cashIncome = prompt('Сколько заробатываете на этом?',10000);
                } while (!isNumber(cashIncome));
                
            appData.income[itemIncome] = cashIncome;
        }
        let addExpenses = prompt('Перечислети статьи раходов через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        // for (let i = 0; i < appData.addExpenses.length; i++) {
        //     let temp1 = appData.addExpenses[i];
        //     temp1[1] = temp1[1].toUpperCase();  //addExpenses[i] = addExpenses[i].charAt(0).toUpperCase(); 
        //     appData.addExpenses[i] = temp1;
        // }
        let index = 0;
        for (let expenses of appData.addExpenses) {
            appData.addExpenses[index] = expenses.charAt(0).toUpperCase() + expenses.substr(1);
            //console.log(expenses);
            index++;
        }

        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        let temp = 0,sum = 0,answer;
        for (let i = 0; i < 2; i++) {
            do {
                answer =  prompt('Введите обязательную статью расходов?', 'еда');}
            while (!isString(answer));

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
                    }  },
    getInfoDeposit: function(){
        if (appData.deposit){
            do{
                appData.percentDeposit = prompt('Какой у вас годовой процент?', 10);}
            while (!isNumber(appData.percentDeposit));

            do{
                appData.moneyDeposit = prompt('Какая сумма заложена ?', 10000);}
            while (!isNumber(appData.moneyDeposit));
        }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }
};
appData.asking();
appData.getBudget();
    
if (appData.getTargetMonth () > 0){
    console.log('Цель будет достигнута за ' + appData.getTargetMonth() + ' месяцев');
}   else {
    console.log('Цель не будет достигнута');
}

console.log('Дневной доход: ', Math.floor(appData.budgetDay));
console.log('Расходы за месяц: ' + appData.expensesMonth());
console.log(appData.getStatusIncome());
appData.getInfoDeposit();
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney() );
console.log('Наша программа включает в себя данные:');
for (const key in appData) {
    console.log('Свойство: ' + key + ' Значене: '+appData[key]);}


