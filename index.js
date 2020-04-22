'use strict';
let cancel = document.getElementById('cancel'),
    start = document.getElementById('start'),
    butnPlusIncome = document.getElementsByTagName('button')[0],
    butnPlusExpenses = document.getElementsByTagName('button')[1],
    depCheck = document.querySelector('#deposit-check'),
    additionalIncomeValue = document.querySelectorAll('.additional_income-item'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    additionalIncome = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesyValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    incomeItems = document.querySelectorAll('.income-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    depositCheck = document.querySelector('#deposit-check'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    allInput = document.querySelectorAll('input[type=text]'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent');
    
let _this;

class AppData {
    constructor(){
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
}
}

AppData.prototype.reset = () => {

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

AppData.prototype.start = () => {
        
    salaryAmount.addEventListener('input', () =>{
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
_this.getAddIncome(); 
_this.getInfoDeposit();
_this.getBudget();
_this.showResult();


};

AppData.prototype.showResult = function() {
        
    budgetMonthValue.value = Math.ceil(this.budgetMonth);
    budgetDayValue.value = Math.ceil(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesyValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcSavedMoney();


};
AppData.prototype.changeValue = () => {
    const periodAmount = document.querySelector('.period-amount');
    periodAmount.textContent = periodSelect.value;
    incomePeriodValue.value = _this.calcSavedMoney();

} ;
AppData.prototype.addExpensensbLock = () => {

    const cloneExpensesItems = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItems, butnPlusExpenses);
    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3){
        butnPlusExpenses.style.display = 'none';
}
};
AppData.prototype.getExpenses = function () {
    
    expensesItems.forEach((item) => {
        const itemExpenses = item.querySelector('.expenses-title').value;
        const cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== ''){
            console.log(this);
            _this.expenses[itemExpenses] = cashExpenses;
        }
    });
};
AppData.prototype.addIncomeBlock = () => {

    const cloneIncomeItems = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItems, butnPlusIncome);
    incomeItems = document.querySelectorAll('.income-items');
    if(incomeItems.length === 3){
        butnPlusIncome.style.display = 'none';
}
};
AppData.prototype.getIncome = function () {
    incomeItems.forEach((item) => {
        const incomeItems = item.querySelector('.income-title').value;
        const cashIncome = item.querySelector('.income-amount').value;
        if(incomeItems !== '' && cashIncome !== ''){
            _this.expenses[incomeItems] = cashIncome;
        }
    });

};
AppData.prototype.getAddIncome = function()  {
    additionalIncomeItem.forEach((item) => {
        const itemValue = item.value.trim();
        if(itemValue !== ''){
            _this.addIncome.push(itemValue);
        }
    });
};
AppData.prototype.getInfoDeposit = function () {
    if (this.deposit){
        console.log(this);
        this.percentDeposit = depositPercent.value;
        this.moneyDeposit = depositAmount.value;
    }
};
AppData.prototype.getExpensesMonth = function () {
    for (let key in _this.expenses) {
        _this.expensesMonth += +_this.expenses[key];
    }

};
AppData.prototype.getBudget = function() {
    const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
    this.budgetDay = this.budgetMonth/30;
};

AppData.prototype.getTargetMonth = function () {
    return targetAmount.value / this.budgetMonth;
};

AppData.prototype.getStatusIncome = () => {
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
AppData.prototype.calcSavedMoney = function () {
   return this.budgetMonth * periodSelect.value;
};
AppData.prototype.chengePercent = function() {
    const valueSelect = this.value;
    if(valueSelect === 'other') {
        depositPercent.style.display = 'inline-block';
        depositPercent.value = valueSelect; 
        
    } else{
        depositPercent.value = valueSelect;
    }
};
AppData.prototype.depositHandler = function () {
    if (depositCheck.checked){
        console.log('check');
        depositBank.style.display = 'inline-block';
        depositAmount.style.display = 'inline-block';
        _this.deposit = true;
        depositBank.addEventListener('change', this.chengePercent);
    } else{
        console.log('uncheck');
        depositBank.style.display = 'none';
        depositAmount.style.display = 'none';
        depositBank.value = '';
        depositAmount.value = '';
        _this.deposit = false;
        depositBank.removeEventListener('change', this.chengePercent);
    }
};
AppData.prototype.changeDepositPercent = function (){
    if (((1*depositPercent.value) < 0) || ((1*depositPercent.value) > 100)){
        alert('Введите корректное значение в поле проценты');
        depositPercent.value = 0;
        start.disabled = true;
        }  else{
            start.disabled = false;
        }
};
AppData.prototype.eventListeners = function () {
    start.addEventListener('click', this.start);
cancel.addEventListener('click', this.reset);
butnPlusExpenses.addEventListener('click',this.addExpensensbLock);
butnPlusIncome.addEventListener('click',this.addIncomeBlock);
periodSelect.addEventListener('change', this.changeValue);
depositCheck.addEventListener('change', this.depositHandler.bind(this));
depositPercent.addEventListener('input', this.changeDepositPercent);
};
const appData = new AppData();
AppData.prototype.eventListeners();


