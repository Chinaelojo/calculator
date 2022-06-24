var num1 = window.prompt('Enter a number')
var operator = window.prompt('Enter operator(+, -, *, /)') 
var num2 = window.prompt('Enter a number')


num1 = parseFloat(num1);
num2 = parseFloat(num2);

let result;

if (operator === '+') {
    result = num1 + num2
} else if (operator ==='-') {
   result = num1 - num2
} else if (operator === '*') {
    result = num1 * num2
} else if (operator ==='/') {
    result = num1 / num2
}

alert(result)

