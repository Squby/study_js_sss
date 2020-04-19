'use strict';
let cancel = document.getElementById('cancel');
let start = document.getElementById('start');
let butnPlusIncome = document.getElementsByTagName('button')[0];
let butnPlusExpenses = document.getElementsByTagName('button')[1];
let depCheck = document.querySelector('#deposit-check');
let additionalIncomeValue = document.querySelectorAll('.additional_income-item');
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let additionalIncome = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesyValue = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
let expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let incomeItems = document.querySelectorAll('.income-items');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let depositCheck = document.querySelector('#deposit-check');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');

let allInput = document.querySelectorAll('input[type=text]');


// let isNumber = function(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
//     };
// let isString = function(n){
//     return !isNumber(n) && n !== '' && n !== null;
// };

let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    expensesMonth: 0,
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    period: 3,
    reset: function(){
        for (let i = 0; i < allInput.length; i++) {
            allInput[i].value = '';
            allInput[i].readOnly = false;
        }

        cancel.style.display = 'none';
        start.style.display = 'block';
        appData.budget = 0;
        appData.budgetDay = 0;
        appData.budgetMonth = 0;
        appData.income = {};
        appData.incomeMonth = 0;
        appData.addIncome = [];
        appData.expenses = {};
        appData.expensesMonth = 0;
        appData.addExpenses = [];
        appData.deposit = false;
        appData.percentDeposit = 0;
        appData.moneyDeposit = 0;

    },
    start: function (){
        
        salaryAmount.addEventListener('input', function(){
            if(salaryAmount.value === ''){
                start.disabled = true;
                return;
            }else{
                start.disabled = false;
              
            }
        });
        if (salaryAmount.value !== '') {
            start.style.display = 'none';
            cancel.style.display = 'block';  
        }
        for (let i = 0; i < allInput.length; i++) {
            allInput[i].readOnly = true;
        }
       
    
    appData.budget = +salaryAmount.value;

    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
   // appData.getAddExpenses();
    appData.getAddIncome(); 
    appData.getBudget();
    
    appData.showResult();

    },
    showResult: function(){
        
        budgetMonthValue.value = Math.ceil(this.budgetMonth);
        budgetDayValue.value = Math.ceil(this.budgetDay);
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesyValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcSavedMoney();


    },
    changeValue: function(){
        let periodAmount = document.querySelector('.period-amount');
        periodAmount.textContent = periodSelect.value;
        incomePeriodValue.value = appData.calcSavedMoney();
        //incomePeriodValue.value = appData.budgetMonth * periodSelect.value;

    } ,
    addExpensensbLock: function(){

        let cloneExpensesItems = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, butnPlusExpenses);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
            butnPlusExpenses.style.display = 'none';
    }
},
    getExpenses: function(){
        
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
            appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    addIncomeBlock: function(){

        let cloneIncomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, butnPlusIncome);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3){
            butnPlusIncome.style.display = 'none';
    }
},
    getIncome: function(){
        incomeItems.forEach(function(item){
            let incomeItems = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(incomeItems !== '' && cashIncome !== ''){
            appData.expenses[incomeItems] = cashIncome;
            }
        });


    //     if(confirm('Есть ли у вас дополнительый источник заработка?')){
    //         let itemIncome = prompt('Какой?', "Таксую"); 
    //         let cashIncome = prompt('Сколько в месяц вы зарабатываете?', 10000);
    //         appData.income[itemIncome] = cashIncome;
    //     }
    //     for(let key in appData.income){
    //         appData.incomeMonth += +appData.income[key];
    //     }
    // },
    // getAddExpenses: function(){
    //     let addExpenses = additionalExpensesItem.value.split(', ');
    //     addExpenses.forEach(function(item){
    //         item = item.trim();
    //         if(item !== ''){
    //             appData.addExpenses.push(item);
    //         }
    //     });
    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        });
    },
    getInfoDeposit:function(){
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        if (appData.deposit) {
            appData.percentDeposit = prompt('Какой годовой процент?',"10");
            appData.moneyDeposit = prompt('Какая сумма заложена?',100000);
        }
    },
    getExpensesMonth: function(){
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }

    },
    getBudget: function (){
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = this.budgetMonth/30;
    },

    getTargetMonth: function (){
        return targetAmount.value / this.budgetMonth;
    },

    getStatusIncome: function () {
        console.log(this);
        if (appData.budgetDay >= 1200){
            return ('У вас высокий уровень дохода');
        }   else if ((appData.budgetDay < 1200) || (appData.budgetDay > 600)){
            return ('У вас средний уровень дохода');
            }
               else if ((appData.budgetDay >=0) || (appData.budgetDay <= 600)) {
                return ('К сожалению у вас уровень дохода ниже среднего');
                }   else if(appData.budgetDay < 0) {
                    return ('Что то пошло не так');
                    }  
    },
    calcSavedMoney:function(){
       return this.budgetMonth * periodSelect.value;
    }
};
start.addEventListener('click', appData.start);
cancel.addEventListener('click', appData.reset);
butnPlusExpenses.addEventListener('click',appData.addExpensensbLock);
butnPlusIncome.addEventListener('click',appData.addIncomeBlock);

periodSelect.addEventListener('change', appData.changeValue);
// if (appData.getTargetMonth () > 0){
//     console.log('Цель будет достигнута за ' + appData.getTargetMonth() + ' месяцев');
// }   else {
//     console.log('Цель не будет достигнута');
// } 