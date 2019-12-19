var money = +prompt("Введи свой бюджет на месяц.");
while (isNaN(money))                                          //защита на ввод не числа
{money =  +prompt("Введи число.");} 

var time = prompt("Введите дату в формате YYYY-MM-DD");


var questionExpenses = prompt("Введи обязательную статью расходов");
var questHowMuch = +prompt("Восколько обойдётся?");
while (isNaN(questHowMuch))
{questHowMuch =  +prompt("Введи число.");}                     //защита на ввод не числа

var appData = {
    expenses:{},
    optionalExpenses :{},
    income:[],
    savings : false,
    budget : money,
    timeData : time,
//  calculation : (budget-expenses.questionExpenses)/30
};
// appData["budget"] = money;
// appData["timeData"] = time;
// appData.expenses = questionExpenses;
// appData.expenses = questHowMuch;

appData.expenses.questionExpenses=questHowMuch; 
var calculation = (appData.budget-appData.expenses.questionExpenses)/30;

// console.log(typeof(appData.budget));
// console.log(typeof(appData.expenses.questionExpenses));

console.log(appData);
alert("Ваш бюджет на день: " + calculation);