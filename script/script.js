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
    amount2 = prompt('Во сколько это обойдется?'),
    budgetMonth = parseInt(amount1) + parseInt(amount2),
    countMonth;
    console.log(budgetMonth);

    money = 1*money;
    console.log(money);

    money = money - budgetMonth;
    countMonth = Math.ceil(mission/money);
    console.log('колличество месяцев = ' + countMonth);

    console.log('Период равен ' + period + ' месяцев');
    console.log('Цель заработать ' + mission + ' долларов');
    console.log((addExpenses.toLowerCase()).split(', '));
    budgetDay = money / 30;
    console.log('Дневной доход: ', Math.floor(budgetDay = money / 30));

    if (budgetDay >= 1200){
        alert ('У вас высокий уровень дохода');
    }   else if ((budgetDay < 1200) || (budgetDay > 600)){
            alert ('У вас средний уровень дохода');
        }
           else if ((budgetDay >=0) || (budgetDay <= 600)) {
                alert ('К сожалению у вас уровень дохода ниже среднего');
            }   else if(budgetDay < 0) {
                    alert ('Что то пошло не так');
                }  