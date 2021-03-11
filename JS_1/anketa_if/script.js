var surname = prompt('Введите вашу Фамилию:');
var mainName = prompt('Введите ваше Имя:');
var patronymic = prompt('Введите ваше Отчество:');
var age = parseInt(prompt('Введите ваш Возраст:'));
var gender = confirm('Ваш пол Мужской?');
var pension;
if (gender == true && age >= 63) {
    pension = 'Да';
    gender = 'Мужской';
} else if (gender == true && age < 63) {
    pension = 'Нет';
    gender = 'Мужской';
} else if (gender == false && age >= 58) {
    pension = 'Да';
    gender = 'Женский';
} else if (gender == false && age < 58) {
    pension = 'Нет';
    gender = 'Женский';
}
var mssg = 'Ваше ФИО: ' + surname + ' ' + mainName + ' ' + patronymic + ' \n' + 'Ваш возраст в годах: ' + age + ' \n' + 'Ваш возраст в днях: ' + (age * 365) + ' \n' + 'Через 5 лет вам будет: ' + (age + 5) + ' \n' + 'Ваш пол: ' + gender + ' \n' + 'Вы на пенсии: ' + pension;
alert(mssg);