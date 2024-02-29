import './style.css'

// console.log('Hello world')
// document.write('<div id="main" style="background: lightcyan;">rain</div>')

// var a = 0
// console.log(a)
// var a = 2
// console.log(a)

// // Создание переменной
// let newVar = 5
// newVar = 5

// let noVal
// noVal = 'g'
// console.log(noVal)

// let theValue

// // Создание константы
// const DAI_IN_WEEK = 7
// // Ошибка не можем изменять константы


// const countedsum = a + newVar

// console.log('1+1', 1 + 1)
// console.log('10-5', 10 - 5)
// console.log('10+5', 10 + 5)
// console.log('10*5', 10 * 5)
// console.log('10/5', 10 / 5)
// console.log('10**5', 10 ** 5) // Возведение в степень

// let userInput = parseInt('Введите число', 10)
// console.log(userInput)
// userInput = prompt('Введите число', 10)
// console.log(userInput)

// alert('Вы ввели ' + userInput)

// Практика 1. задание 1
// Запросите у пользоватея число, возведите число во 2 степень, выведите на экран

// let num = parseInt(prompt ('Введите число', 4))

// alert('Ваше число, возведенное во 2 степень' + num ** 2)

// Практика 1. Задание 2
// Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.
// имеется вопрос

// let num = parseInt(prompt('Введите число', 10))
// console.log(num)
// let num1 = parseInt(prompt('Введите число', 11))
// console.log(num1)

// alert('Среднее арифметическое ваших чисел' + num + num1)

// console.log('num+num1')

// практика 1. Задание 3
// Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.

// let num = parseInt(prompt('Введите длину стороны квадрата', 4))

// alert('Площадь квадрата равна' + num * num)

// Практика 1. Задание 4
// Реализуйте конвертор из километров в мили(пользователь вводит километры, программа выводит мили). 1 км = 0, 621371 миль.Это значение укажите в коде как константу.

// let km = parseInt(prompt ('Километры в мили') as string)
// let km = 80

// const KM_IN_MILE = 0.621371

// const miles = KM_IN_MILE * km
// console.log(miles)

// Практика 1. Задание 5
// Реализуйте калькулятор. Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами.
// Тоже вопрос
// let num = 'Введите число'
// console.log (num)
// let num1 = 'Введите ещё одно число'
// console.log (num1)
// console.log('1+1', 1 + 1)
// console.log('10-5', 10 - 5)
// console.log('10+5', 10 + 5)
// console.log('10*5', 10 * 5)
// console.log('10/5', 10 / 5)
// console.log('10**5', 10 ** 5)

// Практика 1. Задание 6
// Пользователь вводит значения a и b для формулы a * x + b = 0, а программа считает и выводит значение x.




// Практика 3. Задание 1

// Вывести # столько раз, сколько указал пользователь.

let i = 0
let userInput = 10
let text = ''

while (i < userInput) {
    text = text + '#'
    i++
}
console.log(text)

// Практика 3. Задание 1
// Пользователь ввел число, а на экран вывелись все числа от введенного до 0


userInput = 10
text = ''
while (userInput) {
    text = text + userInput + '_'
    userInput--
}

console.log(text)


//  Практика 3. Задание 3
// Запросить число и степень. Возвести число в указанную степень и вывести результат.
let num = 10
let count = 3
let result = 1
while (count) {
    result *= num
    count--
}
console.log(result)

// Практика 3. Задание 4
// Запросить 2 числа и найти все общие делители.

let num1 = 416
let num2 = 793

text = ''
let min = num1 < num2 ? num1 : num2

while (min) {
    if (num1 % min == 0 && num2 % min == 0) {
        text += min + ''
    }
    min--
}

console.log(text)

// Практика 3. Задание 5 
// Посчитать факториал введенного пользователем числа.

let y = 5
let x = 1
result = 120

while(x) {
    result*= y
    x--
}

console.log(result)
