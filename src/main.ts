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

console.log(num + numm)

// практика 1. Задание 3
// Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.

let numb = 4
alert('Площадь квадрата равна' + numb * numb)

console.log(numb * numb)

// Практика 1. Задание 4
// Реализуйте конвертор из километров в мили(пользователь вводит километры, программа выводит мили). 1 км = 0, 621371 миль.Это значение укажите в коде как константу.

let km = 80

// km = parseInt(prompt ('Километры в мили') as string)

const KM_IN_MILE = 0.621371

const miles = KM_IN_MILE * km
console.log(miles)

// Практика 1. Задание 5
// Реализуйте калькулятор. Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами.

let numm1 = 4
console.log(numm1)
let numm2 = 19
console.log(numm2)

console.log(numm1 + numm2)
console.log(numm1 - numm2)
console.log(numm1 * numm2)
console.log(numm1 / numm2)
console.log(numm1 ** numm2)

// Практика 1. Задание 6
// Пользователь вводит значения a и b для формулы a * x + b = 0, а программа считает и выводит значение x.

let a = 6
let b = 30

let x = b / a
console.log(x)

// Практика 1. Задание 7
// Запросите у пользователя текущее время (часы и минуты)
// и выведите, сколько часов и минут осталось до следующего
// дня.

// let TimeNow = 

// console.log()


// Практика 1. Задание 8
// Запросите у пользователя трехзначное число и выведите
// вторую цифру этого числа. Для решения задачи используйте
// оператор % (остаток от деления).

// let nuum = 398

// Практика 1. Задание 9
// Запросите у пользователя пятизначное число и переме-
// стите последнюю цифру в начало (из числа 12345 должно
// получиться число 51234).



// Практика 1. Задание 10
// Зарплата работника составляет $250 + 10% от продаж.
// Запросите общую сумму продаж за месяц и посчитайте
// зарплату.



// Домашка 1. Задание 1
// Запросите у пользователя его имя и выведите в ответ:
// «Привет, его имя!».

let name = 'Antony'

console.log('Hello' + ',' + name + '!')


// Домашка 1. Задание 2
// Запросите у пользователя год его рождения, посчитайте,
// сколько ему лет и выведите результат. Текущий год укажите
// в коде как константу.

let date = 2005

let date1 = 2024

let age = date1 - date

console.log(age)


// Домашка 1. Задание 3
// Запросите у пользователя длину стороны квадрата и вы-
// ведите периметр такого квадрата.

let width = 10

let square = width + width + width + width

console.log(square)


// Домашка 1. Задание 4
// Запросите у пользователя радиус окружности и выведите
// площадь такой окружности.
let r = 19
let A = 3.14 * r ** 2

console.log(A)


// Домашка 1. Задание 5
// Запросите у пользователя расстояние в км между двумя
// городами и за сколько часов он хочет добраться. Посчи-
// тайте скорость, с которой необходимо двигаться, чтобы
// успеть вовремя.

let km1 = 160
let hour = 2

let distance = km1 / hour

console.log(distance)

// Домашка 1. Задание 6
// Реализуйте конвертор валют. Пользователь вводит долла-
// ры, программа переводит в евро. Курс валюты храните в
// константе.

let dollar = 100

const DOLLAR_IN_EURO = 0.93

const CONVERT = DOLLAR_IN_EURO * dollar

console.log(CONVERT)


// Домашка 1. Задание 7
// Пользователь указывает объем флешки в Гб. Программа
// должна посчитать сколько файлов размером в 820 Мб по-
// мещается на флешку.

const GB_IN_MB = 1024

let filesize = 820

let VolymeInGb = parseInt(prompt('Укажите объем флешки в гб', '1') as string)

let QuantityFiles = ((VolymeInGb * GB_IN_MB) / filesize)

console.log(QuantityFiles)


// Домашка 1. Задание 8
// Пользователь вводит сумму денег в кошельке и цену одной
// шоколадки. Программа выводит сколько шоколадок может
// купить пользователь и сколько сдачи у него останется.

let summ = 600
let chocolate = 70

let QuantityChocolate = (summ / chocolate)

console.log(QuantityChocolate , 'Количество шоколадок, которые вы можете купить')

let change = summ - (QuantityChocolate * chocolate)

console.log(change , 'Ваша сдача')

// Домашка 1. Задание 9
// Запросите у пользователя трехзначное число и выведите
// его задом наперед. Для решения задачи вам понадобится
// оператор % (остаток от деления).

let num11 = 749

let num21 = ((num11 % 10) * 100) + (((num11/10) % 10)) * 10 + (((num11/100) % 10))

console.log(num21)

// Домашка 1. Задание 10
// Запросите у пользователя целое число и выведите в ответ,
// четное число или нет. В задании используйте логические
// операторы. В задании не надо использовать if или switch.




// В JavaScript есть 8 основных типов данных.

// Семь из них называют «примитивными» типами данных:
// number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253 - 1).
// bigint для целых чисел произвольной длины.
// string для строк.Строка может содержать ноль или больше символов, нет отдельного символьного типа.
// boolean для true / false.
// null для неизвестных значений – отдельный тип, имеющий одно значение null.
// undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
// symbol для уникальных идентификаторов.
// И один не является «примитивным» и стоит особняком:
// object для более сложных структур данных.
// Оператор typeof позволяет нам увидеть, какой тип данных сохранён в переменной.

// Имеет две формы: typeof x или typeof (x).
// Возвращает строку с именем типа.Например, "string".
// Для null возвращается "object" – это ошибка в языке, на самом деле это не объект.
// В следующих главах мы сконцентрируемся на примитивных значениях, а когда познакомимся с ними, перейдём к объектам.

// Операторы сравнения возвращают значения логического типа.
// Строки сравниваются посимвольно в лексикографическом порядке.
// Значения разных типов при сравнении приводятся к числу.Исключением является сравнение с помощью операторов строгого равенства / неравенства.
// Значения null и undefined равны == друг другу и не равны любому другому значению.
// Будьте осторожны при использовании операторов сравнений вроде > и < с переменными, которые могут принимать значения 
// null / undefined.Хорошей идеей будет сделать отдельную проверку на null / undefined.




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

function calcSum(x: number, n: number) {
    console.log(x)
    console.log(n)

    return x + n
}
let calc = calcSum(10, 5)

console.log(calc)



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
    console.log(start)
    printNumberForvard(start + 1, end)

}


printNumberForvard(1, 5)

function printNumberBackward(start: number, end: number): void {
    if (start < end) {
        return
    }
    console.log(start)
    printNumberBackward(start - 1, end)


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



// Задание. практика 2.1
// Создать объект, описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.



type Rectangle = {
    topLeft: { x: number, y: number },
    bottomRight: { x: number, y: number },
}

let rectangle: Rectangle = {
    topLeft: { x: 0, y: 0 },
    bottomRight: { x: 15, y: 15 },
}

// Задание 1.
// Функция принимает объект-прямоугольник и выводит
// информацию о нем (где какая точка расположена).

function getInfoRectangle(rectangle: Rectangle) {

    console.log(rectangle.topLeft.x, rectangle.topLeft.y)
    console.log(rectangle.bottomRight.x, rectangle.bottomRight.y)
}

getInfoRectangle(rectangle)

// Задание 2
// Функция принимает объект-прямоугольник и возвращает
// его ширину.
function getWidthRectangle(rectangle: Rectangle) {
    return Math.abs(rectangle.bottomRight.x) - Math.abs(rectangle.topLeft.x)
}

console.log(getWidthRectangle(rectangle))

// Задание 3
// Функция принимает объект-прямоугольник и возвращает
// его высоту.
function getHeightRectangle(rectangle: Rectangle) {
    return Math.abs(rectangle.bottomRight.y) - Math.abs(rectangle.topLeft.y)
}

console.log(getHeightRectangle(rectangle))


// Задание 4
// Функция принимает объект-прямоугольник и возвращает
// его площадь.
function getAreaRectangle(rectangle: Rectangle) {
    return getWidthRectangle(rectangle) * getHeightRectangle(rectangle)
}

console.log(getAreaRectangle(rectangle))
// Задание 5
// Функция принимает объект-прямоугольник и возвращает
// его периметр.

function getPerinetrRectangle(rectangle: Rectangle) {
    return getWidthRectangle(rectangle) + getHeightRectangle(rectangle) * 2
}

console.log(getPerinetrRectangle(rectangle))


// Задание 6
// Функция изменения ширины прямоугольника. Она прини-
// мает объект-прямоугольник и на сколько единиц изменить
// ширину.

function getNewWidthRectangle(rectangle: Rectangle, x: number) {

    return rectangle.bottomRight.x += x
}

console.log(getNewWidthRectangle(rectangle, 5))

// Задание 7
// Функция изменения высоты прямоугольника. Она прини-
// мает объект-прямоугольник и на сколько единиц изменить
// высоту.
function getNewHeightRectangle(rectangle: Rectangle, y: number) {
    return rectangle.bottomRight.y += y
}

console.log(getNewHeightRectangle(rectangle, 5))

// Зaдание 8
// Функция изменения ширины и высоты прямоугольника.
// Она принимает объект-прямоугольник и два значения –
// для изменения ширины и высоты.

function widthHeightRectangle(rectangle: Rectangle, x: number, y: number) {

    getNewWidthRectangle(rectangle, x)
    getNewHeightRectangle(rectangle, y)

}

widthHeightRectangle(rectangle, 6, 7)
console.log(rectangle)
// Задание 9
// Функция смещения прямоугольника по оси X. Она при-
// нимает объект-прямоугольник и на сколько единиц его
// сдвинуть.
function moveX(rectangle: Rectangle, x: number) {

    rectangle.bottomRight.x += x
    rectangle.topLeft.x += x
}

moveX(rectangle, 5)
console.log(rectangle)

// Задание 10
// Функция смещения прямоугольника по оси Y. Она при-
// нимает объект-прямоугольник и на сколько единиц его
// сдвинуть.

function moveY(rectangle: Rectangle, y: number) {

    rectangle.bottomRight.y += y
    rectangle.topLeft.y += y
}

moveY(rectangle, 5)
console.log(rectangle)


// Задание 11
// Функция смещения прямоугольника и по оси X и по
// оси Y. Она принимает объект-прямоугольник и два значе-
// ния: сдвиг по оси X и сдвиг по оси Y.

function moveXY(rectangle: Rectangle, x: number, y: number) {

    moveX(rectangle, x)
    moveY(rectangle, y)
}

moveXY(rectangle, 5, 7)
console.log(rectangle)

// Задание 12
// Функция для проверки, находится ли точка внутри пря-
// моугольника. Она принимает объект-прямоугольник и
// координаты точки

function pointRectangle (rectangle: Rectangle, x: number, y: number) {
    if ((x>= rectangle.topLeft.x && x<= rectangle.bottomRight.x) && (y>= rectangle.topLeft.y && y<= rectangle.bottomRight.y)) {
        return true
    }
    return false
}
console.log(pointRectangle(rectangle, 12,15))


// Практика 2.2

// Задание 1
// Создать массив из 10 случайных чисел и написать несколько
// функций для работы с ним.

const arr1: number[] = [0, 4, 6, 5, 8, 5, 3, 3, 8, 0]
const arr2: number[] = [5, 8, 1, 9, 3]

function fillArrayRandomNumbers(arr:number[], length:number) {
  for (let i=0; i<length; i++) {
    arr.push(Math.floor(Math.random()*10))
  }
}

fillArrayRandomNumbers(arr1, 10)
fillArrayRandomNumbers(arr2, 5)


console.log(arr1)
console.log(arr2)
console.log(arr2.includes(0))
