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

let numbr = parseInt('Введите число', 4)

alert('Ваше число, возведенное во 2 степень' + numbr ** 2)


// Практика 1. Задание 2
// Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.

let num = 10
console.log(num)
let numm = 11
console.log(numm)

alert('Среднее арифметическое ваших чисел' + num + numm)

console.log(num+numm)

// практика 1. Задание 3
// Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.

let numb = 4
alert('Площадь квадрата равна' + numb * numb)

console.log(numb * numb)

// Практика 1. Задание 4
// Реализуйте конвертор из километров в мили(пользователь вводит километры, программа выводит мили). 1 км = 0, 621371 миль.Это значение укажите в коде как константу.

let km = 80

km = parseInt(prompt ('Километры в мили') as string)

const KM_IN_MILE = 0.621371

const miles = KM_IN_MILE * km
console.log(miles)

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

// Практика 1. Задание 7
// Запросите у пользователя текущее время (часы и минуты)
// и выведите, сколько часов и минут осталось до следующего
// дня.



// Практика 1. Задание 8
// Запросите у пользователя трехзначное число и выведите
// вторую цифру этого числа. Для решения задачи используйте
// оператор % (остаток от деления).



// Практика 1. Задание 9
// Запросите у пользователя пятизначное число и переме-
// стите последнюю цифру в начало (из числа 12345 должно
// получиться число 51234).



// Практика 1. Задание 10
// Зарплата работника составляет $250 + 10% от продаж.
// Запросите общую сумму продаж за месяц и посчитайте
// зарплату.



// Практика 2. Задание 1
// Запросить у пользователя число и определить, оно поло-
// жительное, отрицательное или ноль.



// Практика 2. Задание 2
// Запросить у пользователя его возраст и проверить кор-
// ректность введенных данных (0–120 лет).



// Практика 2. Задание 3
// Запросить у пользователя число и вывести его модуль
// (|7| = 7, |-7| = 7).

// Практика 2. Задание 4
// Запросить у пользователя время (часы, минуты, секунды)
// и проверить корректность введенных данных.

// Практика 2. Задание 5
// Запросить координаты точки (x, y) и определить номер
// четверти, в которую попала эта точка. Необходимо учесть
// случаи попадания точки на оси X или Y или в начало
// координат.


// Использовать switch
// Практика 2. Задание 6
// Запросить у пользователя номер месяца и вывести на экран
// его название.

// Практика 2. Задание 7
// Реализовать калькулятор. Пользователь вводит 2 числа и
// знак (+ - * /). В зависимости от введенного знака решить
// пример и вывести результат.


// Исп. тернарный оператор
// Практика 2. Задание 8
// Запросить 2 числа и вывести большее из них.

// Практика 2. Задание 9
// Запросить 1 число и проверить, оно кратно 5 или нет.

// Практика 2. Задание 10
// Запросить у пользователя название планеты. Если поль-
// зователь ввел «Земля» или «земля», то вывести «Привет,
// землянин!», в остальных случаях вывести «Привет, ино-
// планетянин!».



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

// Практика 3. Задание 2
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

let nummber = 10
let count = 3
let result = 1
while (count) {
    result *= nummber
    count--
}
console.log(result)

// Практика 3. Задание 4
// Запросить 2 числа и найти все общие делители.

// let num1 = 416
// let num2 = 793

// text = ''
// let min = num1 < num2 ? num1 : num2

// while (min) {
//     if (num1 % min == 0 && num2 % min == 0) {
//         text += min + ''
//     }
//     min--
// }

// console.log(text)

// Практика 3. Задание 5 
// Посчитать факториал введенного пользователем числа.

// let y = 5
// let x = 1
//  let result = 24

// while (x) {
//     result *= y
//     x--
// }

// console.log(result)

// Практика 3. Задание 5
// Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно.

// num = 2
// result = 6

// do {
//     alert(num + num * num);
//     num++;
// } while (num< 6);

// console.log(num)



// Функции

// showMessage(..)     // показывает сообщение
// getAge(..)          // возвращает возраст (получая его каким-то образом)
// calcSum(..)         // вычисляет сумму и возвращает результат
// createForm(..)      // создаёт форму (и обычно возвращает её)
// checkPermission(..) // проверяет доступ, возвращая true/false

// Практика 4. Задание 1
// Написать функцию, которая принимает 2 числа и возвращает меньшее из них.

function min(a: number, b: number) {
    return a < b ? a : b;
}

console.log(min(101, 100))


// Практика 4. Задание 2
// Написать функцию, которая возводит переданное число в указанную степень.

function pow(x: number, n: number) {
    console.log(x)
    console.log(n)
    let result = x ** n;

    console.log(result)
    return result
}

let sumpow = pow(10, 3)
console.log(sumpow)

// Практика 4. Задание 3 (????)
// Написать функцию, которая принимает 2 числа и знак (+ - * /), считает пример и возвращает результат.

// function calcSum(x: number, n: number) {
//     console.log(x)
//     console.log(n)

//     return x + n

// }

// let calc = calcSum(10, 5)

// console.log(calc)



// Практика 4. Задание 4
// Написать функцию, которая проверяет, является ли переданное ей число простым.

function checkNum(n: number) {

    if (n <= 0) {
        return false;
    }
    else {
        return true;
    }
}

// let check = checkNum(1000)

console.log(checkNum)



// Практика 4. Задание 5
// Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. Вызовите функцию для всех чисел от 2 до 9




// Практика 4. Задание 6
// Написать функцию, которая реализует работу оператора %. Функция принимает 2 параметра и возвращает остаток от деления первого параметра на второй. 
// В функции использовать только + - * /, оператор % не использовать.





// Практика 4. Задание 7
// Написать функцию, которая принимает от 1 до 5 чисел и возвращает их сумму.


function sum(a: number, b: number, c: number, x: number, n: number) {
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(x)
    console.log(n)

    return a + b + c + x + n

}

let sumOf2And4 = sum(10, 4, 6, 8, 10)
console.log(sumOf2And4)

// Практика 4. Задание 8
// Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них.

function max(num1: number, num2: number) {

    return num1 > num2 ? num1 : num2;

}

let num1 = 6
let num2 = 13


console.log(max(num1, num2))


// Практика 4. Задание 9


// Практика 5. Задание 1
// Написать функцию, которая вычисляет факториал заданного числа.

// let y = 5
// let x = 1
//  let result = 24

// while (x) {
//     result *= y
//     x--
// }

// console.log(result)

function getFactorial(n: number): number {

    return (n == 1) ? 1 : n * getFactorial(n - 1)
}
console.log(getFactorial(5))


// Практика 5. Задание 2
// Написать функцию, которая выводит все числа из заданного пользователем диапазона в прямом порядке. И еще одну функцию – для вывода в обратном порядке.

// function printNumberForvard(start: number, end: number): void {
//     if (start > end) {
//         return
//     }

//     printNumberForvard(start , end -1)

//     console.log (end)
// }

// printNumberForvard(1, 5)

// function printNumberBackward(start: number, end: number): void {
//     if (start < end) {
//         return
//     }

//     printNumberBackward(start , end + 1)

//     console.log (end)
// }

// printNumberBackward(5, 1)

function printNumberForvard(start: number, end: number): void {
    if (start > end) {
        return
    }
    console.log (start)
    printNumberForvard(start +1 , end)

}
    

printNumberForvard(1, 5)

function printNumberBackward(start: number, end: number): void {
    if (start < end) {
        return
    }
    console.log (start)
    printNumberBackward(start -1 , end)


}

printNumberBackward(5, 1)

// Практика 5. Задание 3
// Написать функцию, которая выводит переданное ей число задом наперед. Например: число 1234 вывести как 4321

function getReverseNumber(n: number): number {
    if (n < 10) {
        return n
    } else {
        return + (n % 10 + '' + getReverseNumber(Math.floor(n / 10)))
    }
}
console.log(getReverseNumber(1234))


// Практика 5. Задание 4
// Написать функцию, которая считает сумму цифр числа. Например: число 1357, сумма 1 + 3 + 5 + 7 = 16

function sumOfDigits(n: number): number {
    if (n < 10) {
        return n
    } else {
        return + (n % 10 + sumOfDigits(Math.floor(n / 10)))
    }
}

console.log(sumOfDigits(1357))

// Практика 5. Задание 5
// Написать функцию, которая принимает число и выводит соответствующее количество вложенных пар круглых скобок. Например: число 4 – (((()))).

function getBracketsPairsByNum(n: number): string {
    if (!n) {
        return ''
    } else {
        return '(' + getBracketsPairsByNum(n - 1) + ')'
    }
}

console.log(getBracketsPairsByNum(4))

// Практика 6. Задание 1