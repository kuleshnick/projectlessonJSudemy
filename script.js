var money = +prompt("Введи свой бюджет на месяц.");
while (isNaN(money) || money=="" || money < 0)                                                      //защита на ввод не числа
{
  money =  +prompt("Введи положительное число бюджета или 0");
  if (money==0){
    break;
  }
} 

console.log(money);
var time = prompt("Введите дату в формате YYYY-MM-DD");


              

var appData = {
    budget : money,
    timeData : time,
    expenses:{},
    optionalExpenses :{},
    income:[],
    savings : false
  };

  console.log(appData.budget);
/*Изначально не правильно понял ДЗ, и записал всё если по одному разу задать вопрос.
Переписал как в дз, с циклом For*/

// var questionExpenses = prompt("Введи обязательную статью расходов");
// var questHowMuch = +prompt("Восколько обойдётся?");
// while (isNaN(questHowMuch))                                              //защита на ввод не числа
// {questHowMuch =  +prompt("Введи число.");}       

// appData.expenses.questionExpenses=questHowMuch; 
// var calculation = (appData.budget-appData.expenses.questionExpenses)/30; //убирал статью расходов из бюджета

console.log(typeof(appData.budget));                             //проверял на тип данных
console.log(typeof(appData.expenses.questionExpenses));

for (let i = 0; i<2;i++){
  var questionExpenses = prompt("Введи обязательную статью расходов");
  var questHowMuch = +prompt("Восколько обойдётся?"); 
  while (isNaN(questHowMuch) || questHowMuch=="" || questHowMuch<0)                //защита на ввод не числа и пустую строку
 {questHowMuch =  +prompt("Введи положительное число расхода или 0.");
 if(questHowMuch==0){
   break;
 }
 appData.expenses.questionExpenses=questHowMuch; 

 }  
}

// вариант1
//  let i = 0;
//  while (i<2){
//   var questionExpenses = prompt("Введи обязательную статью расходов");
//   var questHowMuch = +prompt("Восколько обойдётся?"); 
//   i++;
//  }
//  варианта2 
// let i = 0;
// do {
//   var questionExpenses = prompt("Введи обязательную статью расходов");
//   var questHowMuch = +prompt("Восколько обойдётся?"); 
// }
// while (i < 2);

var calculation = appData.budget/30;

console.log(appData);
alert("Ваш бюджет на день: " + calculation);