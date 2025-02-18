let number1 = +prompt('Enter number 1');
let number2 = +prompt('Enter number 2');

if (number1 > number2) {
    console.log(number1);
} else if (number1 < number2) {
    console.log(number2);
} else if (number1 === number2) {
    console.log('Введені рівні числа');
} else {
    console.log('Wrong');
}
