var surname = prompt('Введите вашу Фамилию:');
var mainName = prompt('Введите ваше Имя:');
var patronymic = prompt('Введите ваше Отчество:');
var age = parseInt(prompt('Введите ваш Возраст:'));
var gender = confirm('Ваш пол Мужской?');
var pension;

var genderConfirm = (gender == true) ? 'Мужской' : 'Женский';
var ageConfirm = (age >= 63 && gender == true) ? pension = 'Да' :
    (age < 63 && gender == true) ? pension = 'Нет' :
    (age >= 58 && gender == false) ? pension = 'Да' :
    (age < 58 && gender == false) ? pension = 'Нет' :
    false;
var mssg = 'Ваше ФИО: ' + surname + ' ' + mainName + ' ' + patronymic + ' \n' + 'Ваш возраст в годах: ' + age + ' \n' + 'Ваш возраст в днях: ' + (age * 365) + ' \n' + 'Через 5 лет вам будет: ' + (age + 5) + ' \n' + 'Ваш пол: ' + genderConfirm + ' \n' + 'Вы на пенсии: ' + ageConfirm;
alert(mssg);