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
let _this;

// let isNumber = function(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
//     };
// let isString = function(n){
//     return !isNumber(n) && n !== '' && n !== null;
// };
const AppData = function () {

    _this = this;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.expensesMonth = 0;
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.period = 3;

};

AppData.prototype.reset = function() {

    for (let i = 0; i < allInput.length; i++) {
        allInput[i].value = '';
        allInput[i].readOnly = false;
    }
    
    cancel.style.display = 'none';
    start.style.display = 'block';
    _this.budget = 0;
    _this.budgetDay = 0;
    _this.budgetMonth = 0;
    _this.income = {};
    _this.incomeMonth = 0;
    _this.addIncome = [];
    _this.expenses = {};
    _this.expensesMonth = 0;
    _this.addExpenses = [];
    _this.deposit = false;
    _this.percentDeposit = 0;
    _this.moneyDeposit = 0;
};

AppData.prototype.start = function (){
        
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
   

    _this.budget = +salaryAmount.value;

_this.getExpenses();
_this.getIncome();
_this.getExpensesMonth();
// appData.getAddExpenses();
_this.getAddIncome(); 
_this.getBudget();

_this.showResult();

};

AppData.prototype.showResult = function(){
        
    budgetMonthValue.value = Math.ceil(this.budgetMonth);
    budgetDayValue.value = Math.ceil(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesyValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcSavedMoney();


};
AppData.prototype.changeValue = function(){
    let periodAmount = document.querySelector('.period-amount');
    periodAmount.textContent = periodSelect.value;
    incomePeriodValue.value = _this.calcSavedMoney();
    //incomePeriodValue.value = appData.budgetMonth * periodSelect.value;

} ;
AppData.prototype.addExpensensbLock = function(){

    let cloneExpensesItems = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItems, butnPlusExpenses);
    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3){
        butnPlusExpenses.style.display = 'none';
}
};
AppData.prototype.getExpenses = function(){
    
    expensesItems.forEach(function(item){
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== ''){
            _this.expenses[itemExpenses] = cashExpenses;
        }
    });
};
AppData.prototype.addIncomeBlock = function(){

    let cloneIncomeItems = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItems, butnPlusIncome);
    incomeItems = document.querySelectorAll('.income-items');
    if(incomeItems.length === 3){
        butnPlusIncome.style.display = 'none';
}
};
AppData.prototype.getIncome = function(){
    incomeItems.forEach(function(item){
        let incomeItems = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if(incomeItems !== '' && cashIncome !== ''){
            _this.expenses[incomeItems] = cashIncome;
        }
    });

};
AppData.prototype.getAddIncome = function(){
    additionalIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();
        if(itemValue !== ''){
            _this.addIncome.push(itemValue);
        }
    });
};
AppData.prototype.getInfoDeposit = function(){
    _this.deposit = confirm('Есть ли у вас депозит в банке?');
    if (_this.deposit) {
        _this.percentDeposit = prompt('Какой годовой процент?',"10");
        _this.moneyDeposit = prompt('Какая сумма заложена?',100000);
    }
};
AppData.prototype.getExpensesMonth = function(){
    for (let key in _this.expenses) {
        _this.expensesMonth += +_this.expenses[key];
    }

};
AppData.prototype.getBudget = function (){
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = this.budgetMonth/30;
};

AppData.prototype.getTargetMonth = function (){
    return targetAmount.value / this.budgetMonth;
};

AppData.prototype.getStatusIncome = function () {
    console.log(this);
    if (_this.budgetDay >= 1200){
        return ('У вас высокий уровень дохода');
    }   else if ((_this.budgetDay < 1200) || (_this.budgetDay > 600)){
        return ('У вас средний уровень дохода');
        }
           else if ((_this.budgetDay >=0) || (_this.budgetDay <= 600)) {
            return ('К сожалению у вас уровень дохода ниже среднего');
            }   else if(_this.budgetDay < 0) {
                return ('Что то пошло не так');
                }  
};
AppData.prototype.calcSavedMoney =function(){
   return this.budgetMonth * periodSelect.value;
};

AppData.prototype.eventListeners = function(){
    start.addEventListener('click', _this.start);
cancel.addEventListener('click', _this.reset);
butnPlusExpenses.addEventListener('click',_this.addExpensensbLock);
butnPlusIncome.addEventListener('click',_this.addIncomeBlock);

periodSelect.addEventListener('change', _this.changeValue);
};
const appData = new AppData();
AppData.prototype.eventListeners();





// if (appData.getTargetMonth () > 0){
//     console.log('Цель будет достигнута за ' + appData.getTargetMonth() + ' месяцев');
// }   else {
//     console.log('Цель не будет достигнута');
// } 