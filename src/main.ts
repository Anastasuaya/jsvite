
import './style.css'

// console.log('Hello world')
// document.write('<div id="main" style="background: lightcyan;">rain</div>')

// var a = 0
// console.log(a)
// var a = 2
// console.log(a)

// Создание переменной
// let newVar = 5
// newVar = 5

// let noVal
// noVal = 'g'
// console.log(noVal)

// let theValue

// Создание константы
// const DAI_IN_WEEK = 7
// Ошибка не можем изменять константы


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

  //! ------------------------------------------------------------------------------------------------------------------------

//TODO Практика 1.1. Сделано всё!!!!

// Практика 1. задание 1
// Запросите у пользоватея число, возведите число во 2 степень, выведите на экран

// let numbr = parseInt('Введите число', 4)

// alert('Ваше число, возведенное во 2 степень' + numbr ** 2)



// Практика 1. Задание 2
// Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.

let num = 10
console.log(num)
let numm = 11
console.log(numm)

// alert('Среднее арифметическое ваших чисел' + num + numm)

console.log(num + numm)

// практика 1. Задание 3
// Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.

let numb = 4
// alert('Площадь квадрата равна' + numb * numb)

console.log('Площадь квадрата равна', numb * numb)

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

let HoursNow = 17
let MinutesNow = 51

let HoursTomorrow = 24 - HoursNow
let MinutesTomorrow = 60 - MinutesNow

console.log('До следующего дня осталось', HoursTomorrow, 'часов', MinutesTomorrow, 'минут')


// Практика 1. Задание 8
// Запросите у пользователя трехзначное число и выведите
// вторую цифру этого числа. Для решения задачи используйте
// оператор % (остаток от деления).

let nuum = 398

let Result = (nuum / 10) % 10

console.log(Result)

// Практика 1. Задание 9
// Запросите у пользователя пятизначное число и переме-
// стите последнюю цифру в начало (из числа 12345 должно
// получиться число 51234).

let Number = 45981

let Number2 = ((Number % 10) * 1000) + ((Number / 10) % 10000)

console.log(Number2)

// Практика 1. Задание 10
// Зарплата работника составляет $250 + 10% от продаж.
// Запросите общую сумму продаж за месяц и посчитайте
// зарплату.

const SALARY = 250
const PERCENT = 0.1

let TotalSum = 37648

let TotalSalary = SALARY + (TotalSum * PERCENT)

console.log(TotalSalary)

  //! ------------------------------------------------------------------------------------------------------------------------

// TODO Домашка 1.1. В процессе. Сделаны 1,2,3,4,5,6,7,8,10

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

// const GB_IN_MB = 1024

// let filesize = 820

// let VolymeInGb = parseInt(prompt('Укажите объем флешки в гб', '1') as string)

// let QuantityFiles = ((VolymeInGb * GB_IN_MB) / filesize)

// console.log(QuantityFiles)

// Домашка 1. Задание 8
// Пользователь вводит сумму денег в кошельке и цену одной
// шоколадки. Программа выводит сколько шоколадок может
// купить пользователь и сколько сдачи у него останется.

let summ = 600
let chocolate = 70

let QuantityChocolate = (summ / chocolate)

console.log(QuantityChocolate, 'Количество шоколадок, которые вы можете купить')

let change = summ - (QuantityChocolate * chocolate)

console.log(change, 'Ваша сдача')

// Домашка 1. Задание 9
// Запросите у пользователя трехзначное число и выведите
// его задом наперед. Для решения задачи вам понадобится
// оператор % (остаток от деления).


// Домашка 1. Задание 10
// Запросите у пользователя целое число и выведите в ответ,
// четное число или нет. В задании используйте логические
// операторы. В задании не надо использовать if или switch.

let number = 13

if (number % 2 == 0) {
    console.log(number, 'четное')
} else console.log(number, 'нечетное')


//! В JavaScript есть 8 основных типов данных.

// Семь из них называют «примитивными» типами данных:
//* number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253 - 1).
//* bigint для целых чисел произвольной длины.
//* string для строк.Строка может содержать ноль или больше символов, нет отдельного символьного типа.
//* boolean для true / false.
//* null для неизвестных значений – отдельный тип, имеющий одно значение null.
//* undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
//* symbol для уникальных идентификаторов.
// И один не является «примитивным» и стоит особняком:
//* object для более сложных структур данных.
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

  //! ------------------------------------------------------------------------------------------------------------------------

// TODO Практика 1.2. Выполнено всё!

// Практика 2. Задание 1
// Запросить у пользователя число и определить, оно поло-
// жительное, отрицательное или ноль.

let num3 = -47

if (num3 > 0) {
    console.log(num3, 'положительное')
} else (num3 < 0)
console.log(num3, 'отрицательное')


console.log(num3)


// Практика 2. Задание 2
// Запросить у пользователя его возраст и проверить кор-
// ректность введенных данных (0–120 лет).

let Age = 10

if (Age > 0 && Age < 120) {
    console.log('Ваш возраст', Age)
} else if (Age == 0) {
    console.log('Вы малыш')
} else if (Age > 120) {
    console.log('Вы ооочень взрослый')
} else console.log('Кажется, вы еще не родились')

// Практика 2. Задание 3
// Запросить у пользователя число и вывести его модуль
// (|7| = 7, |-7| = 7).

let modul = -8

if (modul < 0) {
    modul *= -1
}

console.log(modul)

//! || (ИЛИ)
//! ||= (Оператор логического присваивания ИЛИ)
//! && (И)
//! &&= (Оператор логического присваивания И)


// Практика 2. Задание 4
// Запросить у пользователя время (часы, минуты, секунды)
// и проверить корректность введенных данных.

let hours = 24
let minutes = 370
let seconds = 60

if (hours > 24 || hours < 0
    || minutes > 60 || minutes < 0
    || seconds > 60 || seconds < 0) {
    console.log('Вы ввели некорректные данные')
}

if (hours > 24 || hours < 0) {
    console.log('Время должно быть в диапазоне от 0 до 24 часов')
}
if (minutes > 60 || minutes < 60) {
    console.log('Время должно быть в диапазоне от 0 до 24 минут')
}
if (seconds > 60 || seconds < 60) {
    console.log('Время должно быть в диапазоне от 0 до 24 секунд')
}

// Практика 2. Задание 5
// Запросить координаты точки (x, y) и определить номер
// четверти, в которую попала эта точка. Необходимо учесть
// случаи попадания точки на оси X или Y или в начало
// координат.

let dotX = -12
let dotY = 9

if (dotX == 0 && dotY == 0) {
    console.log('Точка в начале координат')
}

if (dotX == 0 && dotY != 0) {
    console.log('Точка на оси Y')
}

if (dotX != 0 && dotY == 0) {
    console.log('Точка на оси X')
}

if (dotX > 0 && dotY > 0) {
    console.log('Точка в I четверти')
}

if (dotX < 0 && dotY > 0) {
    console.log('Точка во II четверти')
}

if (dotX < 0 && dotY < 0) {
    console.log('Точка в III четверти')
}

if (dotX > 0 && dotY < 0) {
    console.log('Точка в IV четверти')
}

// Использовать switch
// Практика 2. Задание 6
// Запросить у пользователя номер месяца и вывести на экран
// его название.

let months = '06'

switch (months) {
    case '01':
        console.log('Январь')
        break

    case '02':
        console.log('Февраль')
        break

    case '03':
        console.log('Март')
        break

    case '04':
        console.log('Апрель')
        break

    case '05':
        console.log('Май')
        break

    case '06':
        console.log('Июнь')
        break

    case '07':
        console.log('Июль')
        break

    case '08':
        console.log('Август')
        break

    case '09':
        console.log('Сентябрь')
        break

    case '10':
        console.log('Октябрь')
        break

    case '11':
        console.log('Ноябрь')
        break

    case '12':
        console.log('Декабрь')
        break

    default:
        break
}


// Практика 2. Задание 7
// Реализовать калькулятор. Пользователь вводит 2 числа и
// знак (+ - * /). В зависимости от введенного знака решить
// пример и вывести результат.

let number1 = 3
let number2 = 5
let operator = '-'
let res = 0

switch (operator) {

    case '+':
        res = number1 + number2
        break

    case '-':
        res = number1 - number2
        break

    case '/':
        res = number1 / number2
        break

    case '*':
        res = number1 * number2
        break

    default:
        break
}

console.log(number1, operator, number2, '=', res)

// Исп. тернарный оператор
// Практика 2. Задание 8
// Запросить 2 числа и вывести большее из них.

let Num = 136
let Num1 = 449

Num > Num ? console.log(Num) : console.log(Num1)


// Практика 2. Задание 9
// Запросить 1 число и проверить, оно кратно 5 или нет.

let Numm = 351

Numm % 5 == 0 ? console.log(Numm, 'Кратно') : console.log(Numm, 'Не кратно')

// Практика 2. Задание 10
// Запросить у пользователя название планеты. Если поль-
// зователь ввел «Земля» или «земля», то вывести «Привет,
// землянин!», в остальных случаях вывести «Привет, ино-
// планетянин!».

let earth = 'Марс'

earth == 'Земля' || earth == 'Земля' ? console.log('Привет, землянин!') : console.log('Привет, инопланетянин!')

  //! ------------------------------------------------------------------------------------------------------------------------

// TODO домашка 1.2. Сделано всё, кроме 8 задания

//* Задание 1
// Запросить у пользователя его возраст и определить, кем он
// является: ребенком (0–2), подростком (12–18), взрослым
// (18_60) или пенсионером (60– ...).
let Age1 = 19

if (Age1 >= 0 && Age1 <= 2) {
    console.log('Вы ребенок')

} else if (Age1 >= 3 && Age1 <= 11) {
    console.log('Вы ребенок постарше')

} else if (Age1 >= 12 && Age1 <= 18) {
    console.log('Вы подросток')

} else if (Age1 >= 19 && Age1 <= 60) {
    console.log('Вы взрослый')

} else if (Age1 < 0) {
    console.log('Вы еще не родились')

} else console.log('Вы пенсионер')

//* Задание 2
// Запросить у пользователя число от 0 до 9 и вывести ему
// спецсимвол, который расположен на этой клавише (1–!,
// 2–@, 3–# и т. д).

let WhenClick = '8'

switch (WhenClick) {

    case '1':
        console.log('!')
        break

    case '2':
        console.log('@')
        break

    case '3':
        console.log('#')
        break

    case '4':
        console.log('$')
        break

    case '5':
        console.log('%')
        break

    case '6':
        console.log('^')
        break

    case '7':
        console.log('&')
        break

    case '8':
        console.log('*')
        break

    case '9':
        console.log('(')
}

//* Задание 3
// Запросить у пользователя трехзначное и число и проверить,
// есть ли в нем одинаковые цифры.

let num4 = 345

console.log(num4 / 100 % 10)

if ((num4 / 100 % 10) == (num4 / 10 % 10) ||
    (num4 / 100 % 10) == num4 % 10 ||
    (num4 / 10 % 10) == num4 % 10)
    console.log(num4, 'Одинаковые цифры есть')

//* Задание 4
// Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100

let year = 2024
let dayinyear = 0

if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0 ||
    (year % 4 == 0 && year % 100 != 0 && year % 400 != 0)) {
    dayinyear = 366

    console.log('Год високосный')
} else {

    dayinyear = 365

    console.log('Год не високосный')
}

//* Задание 5
// Запросить у пользователя пятиразрядное число и опреде-
// лить, является ли оно палиндромом.

let num5 = 121

let num6 = (num5 % 10) * 100 + ((num5 / 10) % 10) * 10 + (num5 / 100) % 10

console.log(num6)

num5 == num6 ? console.log('Число палиндром') : console.log('Число не палидром')


//* Задание 6
// Написать конвертор валют. Пользователь вводит количе-
// ство USD, выбирает, в какую валюту хочет перевести: EUR,
// UAN или AZN, и получает в ответ соответствующую сумму.

const DOLLAR_IN_EUR = 1.09
const DOLLAR_IN_UAN = 0.14
const DOLLAR_IN_AZN = 0.59

let USD = 15
let selection = 'AZN'
let resultt = 0

switch (selection) {
    case 'EUR':
        resultt = USD / DOLLAR_IN_EUR
        break

    case 'UAN':
        resultt = USD / DOLLAR_IN_UAN
        break

    case 'AZN':
        resultt = USD / DOLLAR_IN_AZN
        break

    default:
        break
}
console.log(resultt)


//* Задание 7
// Запросить у пользователя сумму покупки и вывести сумму
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
// до 500 – 5%, от 500 и выше – 7%.

let PurchaseAmount = 2099

let AmoundToBePaid = 0

if (PurchaseAmount >= 200 && PurchaseAmount <= 300) {

    AmoundToBePaid = PurchaseAmount - (PurchaseAmount * 0.3)

} else if (PurchaseAmount >= 300 && PurchaseAmount <= 500) {

    AmoundToBePaid = PurchaseAmount - (PurchaseAmount * 0.5)

} else if (PurchaseAmount > 500) {

    AmoundToBePaid = PurchaseAmount - (PurchaseAmount * 0.7)

} else {

    AmoundToBePaid = PurchaseAmount
}
console.log(AmoundToBePaid)


//* Задание 8
// Запросить у пользователя длину окружности и периметр
// квадрата. Определить, может ли такая окружность поме-
// ститься в указанный квадрат.

//* Задание 9
// Задать пользователю 3 вопроса, в каждом вопросе по 3 ва-
// рианта ответа. За каждый правильный ответ начисляется 2
// балла. После вопросов выведите пользователю количество
// набранных баллов.

//! let questions = ''
//! let points = 0

//* questions = prompt('Вопрос 1. Когда отменили крепостное право? \n a. В 1961 \n b. В 1761 \n c. В 1861') as string
//*if (questions == 'c') points += 2

//* questions = prompt('Вопрос 2. || - Что это? \n a. Оператор логического присваивания ИЛИ \n b. Оператор логического присваивания И \n c. Массив') as string

//* if (questions == 'a') points += 2

//* questions = prompt('Вопрос 3. Сколько в JavaScript основных типов данных? \n a. 5 \n b. 8 \n c. 10 ') as string

//* if (questions == 'b') points += 2

//* alert('Вы набрали' + ' ' + points + '' + 'баллов')

//* console.log('Сумма набранных баллов:' , points)

//* Задание 10
// Запросить дату (день, месяц, год) и вывести следующую
// за ней дату. Учтите возможность перехода на следующий
// месяц, год, а также високосный год.
//? Переменные для пользовательского ввода: день, месяц, год

let Youday = 22
let Youmonths = 11
let Youyear = 2004

if (Youmonths >= 1 && Youmonths <= 12) {

    // Если в месяце 30 дней:
    if (Youmonths == 4 || Youmonths == 6 || Youmonths == 9 || Youmonths == 11) {
        if (Youday >= 1 && Youday <= 29)
            Youday++
    } else if (Youday == 30) {
        Youday = 1
        Youmonths++
    } else {
        console.log('Введите существующую дату')
    }
} else if (Youmonths == 2)
    // Если февраль

    // Если февраль в високосный год
    if (Youyear % 4 == 0 && Youyear % 100 == 0 && Youyear % 400 == 0 ||
        (Youyear % 4 == 0 && Youyear % 100 != 0 && Youyear % 400 != 0)) {

        if (Youday >= 1 && Youday <= 28) {
            Youday++
        } else if (Youday == 1) {

            Youday = 1
            Youmonths++
        } else {
            console.log('Введите существующую дату')
        }
        // Если февраль не високосный
    } else {
        if (Youday >= 1 && Youday <= 27) {
            Youday++
        } else if (Youday == 28) {
            Youday = 1
            Youmonths++
        } else {
            console.log('Введите существующую дату')
        }
        // Если декабрь, то переход на следующий год    
    } else if (Youmonths == 12) {
        if (Youday >= 1 && Youday <= 30) {
            Youday++
        } else if (Youday == 31) {

            Youday = 1
            Youmonths = 1
            Youyear++
        } else {
            console.log('Введите существующую дату')
        }

        // Если в месяце 31 день
    } else {
    if (Youday >= 1 && Youday <= 30) {
        Youday++
    } else if (Youday == 31) {
        Youday = 1
        Youmonths++
    } else {
        console.log('Введите существующую дату')
    }

}

console.log(Youday, Youmonths, Youyear)

  //! ------------------------------------------------------------------------------------------------------------------------

//! ЦИКЛЫ

// TODO практика 1.3. Вcё!

//* Практика 3. Задание 1
// Вывести # столько раз, сколько указал пользователь.

let i = 0
let userInput = 10
let text = ''

while (i < userInput) {
    text = text + '#'
    i++
}
console.log(text)



//* Практика 3. Задание 2
// Пользователь ввел число, а на экран вывелись все числа от введенного до 0


userInput = 10
text = ''
while (userInput) {
    text = text + userInput + '_'
    userInput--
}

console.log(text)


//*  Практика 3. Задание 3
// Запросить число и степень. Возвести число в указанную степень и вывести результат.

let nummber = 10
let count = 3
let result = 1
while (count) {
    result *= nummber
    count--
}
console.log(result)

//* Практика 3. Задание 4
// Запросить 2 числа и найти все общие делители.

let Numm1 = 416
let Numm2 = 793

text = ''
let minimum = Numm1 < Numm2 ? Numm1 : Numm2

while (minimum) {
    if (Numm1 % minimum == 0 && Numm2 % minimum == 0) {
        text += minimum + ''
    }
    minimum--
}

console.log(text)

//* Практика 3. Задание 5 
// Посчитать факториал введенного пользователем числа.

let y = 5
let X = 1
let resultat = 24

while (X) {
    resultat *= y
    X--
}

console.log(resultat)

//* Практика 3. Задание 6
// Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно.

num = 2
result = 6

do {
    (num + num * num);
    num++;
} while (num < 6);

console.log(num)

  //! ------------------------------------------------------------------------------------------------------------------------

// TODO Домашка 1.3. В процессе. Сделано с 1 по 6

//* Задание 1
// Подсчитать сумму всех чисел в заданном пользователем
// диапазоне.

let from = 1
let before = 7
let sum1 = 0

for (i = from; i <= before; i++) {
    sum1 += i
}
console.log(sum1)


//* Задание 2
// Запросить 2 числа и найти только наибольший общий
// делитель.

let one = 75
let two = 90
let nod = 0

for (i = 1; i <= two; i++) {
    if (one % i == 0 && two % i == 0)
        nod = i
}
console.log(nod)

//* Задание 3
// Запросить у пользователя число и вывести все делители
// этого числа.

let n = 90

for (i = 1; i <= n; i++) {
    if (n % i == 0)
        console.log(i)
}

//* Задание 4
// Определить количество цифр в введенном числе

let nummm = 121

let Howmanydigits = 0

while (nummm > 0) {

    nummm = Math.floor(nummm /= 10)

    Howmanydigits++
}
console.log(Howmanydigits)

//* Задание 5
// Запросить у пользователя 10 чисел и подсчитать, сколько
// он ввел положительных, отрицательных и нулей. При этом
// также посчитать, сколько четных и нечетных. Вывести
// статистику на экран. Учтите, что достаточно одной пере-
// менной (не 10) для ввода чисел пользователем.

let n1 = 1567

let PozNumber = 0
let NegNumber = 0
let OddNumber = 0
let EvenNumber = 0
let NullNumber = 0

for (i = 1; i <= n1; i++) {
    n1 = -90
    if (n1 > 0) {
        PozNumber += 1
    } else if (n1 < 0) {
        NegNumber += 1
    } else {
        NullNumber += 1
    }

    !(n1 % 2) ? (OddNumber += 1) : (EvenNumber += 1)
}
console.log(`Положительных чисел оказалось ${PozNumber}`, `Отрицательных чисел оказалось ${NegNumber}`,
    `Нулей оказалось ${NullNumber}`, `Четных чисел оказалось ${OddNumber}`, `Нечетных чисел оказалось ${EvenNumber}`
)

//* Задание 6
// Зациклить калькулятор. Запросить у пользователя 2 числа
// и знак, решить пример, вывести результат и спросить, хо-
// чет ли он решить еще один пример. И так до тех пор, пока
// пользователь не откажется.


//? do {
//?    let number11 = parseInt(prompt('Введите первое число') as string)
//?    let number20 =  parseInt(prompt('Введите второе число') as string)
//?   let operatorr =  (prompt('Введите знак + , - , / , *') as string)

//?     switch (operatorr) {

//?         case '+':

//?             alert (number11 + number20)
//?             break

//?         case '-':
//?              alert (number11 - number20)
//?         break

//?         case '/':
//?             alert (number11 / number20)
//?             break

//?     case '*':
//?             alert (number11 * number20)
//?             break

//?         default:
//?             break
//?     }
//? } while (confirm('хотите решить ещё 1 пример?'))



//* Задание 7
// Запросить у пользователя число и на сколько цифр его
// сдвинуть. Сдвинуть цифры числа и вывести результат (если
// число 123456 сдвинуть на 2 цифры, то получится 345612).

//* Задание 8
// Зациклить вывод дней недели таким образом: «День недели.
// Хотите увидеть следующий день?» и так до тех пор, пока
// пользователь нажимает OK.

//* Задание 9
// Вывести таблицу умножения для всех чисел от 2 до 9
// Каждое число необходимо умножить на числа от 1 до 10

//* Задание 10
// Игра «Угадай число». Предложить пользователю загадать
// число от 0 до 100 и отгадать его следующим способом:
// каждую итерацию цикла делите диапазон чисел пополам,
// записываете результат в N и спрашиваете у пользователя
// «Ваше число > N, < N или == N?». В зависимости от того
// что указал пользователь, уменьшаете диапазон. Начальный
// диапазон от 0 до 100, поделили пополам и получили 50
// Если пользователь указал, что его число > 50, то изменили
// диапазон на от 51 до 100 И так до тех пор, пока пользова-
// тель не выберет == N.




//! Функции

// showMessage(..)     // показывает сообщение
// getAge(..)          // возвращает возраст (получая его каким-то образом)
// calcSum(..)         // вычисляет сумму и возвращает результат
// createForm(..)      // создаёт форму (и обычно возвращает её)
// checkPermission(..) // проверяет доступ, возвращая true/false

  //! ------------------------------------------------------------------------------------------------------------------------

// TODO Практика 1.4. в процессе

// Практика 4. Задание 1
// Написать функцию, которая принимает 2 числа и возвращает меньшее из них.

function min(a: number, b: number): number {
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

console.log(checkNum(-70))



// Практика 4. Задание 5
// Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. Вызовите функцию для всех чисел от 2 до 9




// Практика 4. Задание 6
// Написать функцию, которая реализует работу оператора %. Функция принимает 2 параметра и возвращает остаток от деления первого параметра на второй. 
// В функции использовать только + - * /, оператор % не использовать.





// Практика 4. Задание 7
// Написать функцию, которая принимает от 1 до 5 чисел и возвращает их сумму.


// function sum(a: number, b: number, c: number, x: number, n: number) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(x)
//     console.log(n)

//     return a + b + c + x + n

// }

// let sumOf2And4 = sum(10, 4, 6, 8, 10)
// console.log(sumOf2And4)

// Практика 4. Задание 8
// Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них.

function max(num1: number, num2: number) {

    return num1 > num2 ? num1 : num2;

}

let num1 = 6
let num2 = 13


console.log(max(num1, num2))


// Практика 4. Задание 9

  //! ------------------------------------------------------------------------------------------------------------------------

// TODO Практика 1.5. Всё выполнено.

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

  //! ------------------------------------------------------------------------------------------------------------------------

// TODO Домашка 1.5. Всё сделано

//* Задание 1
// Написать функцию возведения числа в степень.

function NumberToPow(n: number, x: number): number {
    if (X == 1) {
        return n
    } else {
        return pow(n, x - 1)
    }
}

console.log(NumberToPow(4, 3))

//* Задание 2
// Написать функцию поиска наибольшего общего делителя.

function Nod(x: number, y: number): number {
    if (y % x == 0) {
        return x
    } else {
        x > y ? x %= y : y %= x
        x += y
    } return y
}

console.log(Nod(2, 12))

//* Задание 3
// Написать функцию для поиска максимальной цифры в числе.

function MaxNumber(num: number): number {
    if (num == 0) {
        return 0
    } else {
        return Math.max(num % 10, MaxNumber(Math.floor(num / 10)))
    }
}

console.log(MaxNumber(198))

//* Задание 4
// Написать функцию, которая определяет простое ли пере-
// данное число.

function SimpleNumber(num: number) {
    if (num % 2 !== 0) {
        return true
    } else (num % 2 == 0)
    return false

}

console.log(SimpleNumber(24))

//* Задание 5
// Написать функцию для вывода всех множителей передан-
// ного числа в возрастающем порядке.
// Например: число 18 – множители 2 * 3 * 3

function OutpitOfMult(num: number): string {
    if (num == 1) {
        return ''
    }
    for (i == 2; i <= num; i++) {
        if (num % i == 0) {
            return (' ' + i + ' ' + OutpitOfMult(num / i)).trim().replace(/\ /g, '*')
        }
    }
    return ''
}

console.log(OutpitOfMult(333))

//* Задание 6
// Написать функцию, которая возвращает число Фибоначчи
// по переданному порядковому номеру.
// Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на
// том, что каждое число равно сумме двух предыдущих чисел.
// Например: порядковый номер 3 – число 2, порядковый
// номер 6 – число 8


function FibonacciNum(num: number): number {

    return num <= 1 ? num : FibonacciNum(num - 1) + FibonacciNum(num - 2)
}

console.log(FibonacciNum(3))

  //! ------------------------------------------------------------------------------------------------------------------------


// TODO Практика 2.1 всё выполнено!!!

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

function pointRectangle(rectangle: Rectangle, x: number, y: number) {
    if ((x >= rectangle.topLeft.x && x <= rectangle.bottomRight.x) && (y >= rectangle.topLeft.y && y <= rectangle.bottomRight.y)) {
        return true
    }
    return false
}
console.log(pointRectangle(rectangle, 12, 15))

  //! ------------------------------------------------------------------------------------------------------------------------

//TODO Домашка 2.1. Всё сделано

//* Задание 1
// Создать объект, описывающий автомобиль (производитель,
// модель, год выпуска, средняя скорость), и следующие функции
// для работы с этим объектом.

type Car = {
    name: string,
    age: number,
    color: string,
    speed: number,
}

let car: Car = {
    name: 'Jaguar XK 150',
    age: 1961,
    color: 'red',
    speed: 217,
}

// 1. Функция для вывода на экран информации об автомобиле.

function GetCarInfo(car: Car) {
    console.log(car.name, car.age, car.color, car.speed)
}
GetCarInfo(car)


// 2. Функция для подсчета необходимого времени для пре-
// одоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необхо-
// димо делать перерыв на 1 час.

function GetTimeDist(car: Car, distance: number) {

    const TIME = distance / car.speed

    const REST_TIME = TIME / 4 ? Math.floor((distance / car.speed) / 4) - 1 : Math.floor((distance / car.speed) / 4)

    return TIME + REST_TIME
}
console.log(GetTimeDist(car, 12000))

//* Задание 2
// Создать объект, хранящий в себе отдельно числитель и зна-
// менатель дроби, и следующие функции для работы с этим объ-
// ектом.

type Fraction = {
    numenator: number,
    denominator: number
}

const fraction1: Fraction = {
    numenator: 2,
    denominator: 6
}

const fraction2 = {
    numenator: 4,
    denominator: 5
} as Fraction

function TransformToCommonDenominator(fr1: Fraction, fr2: Fraction) {
    return {
        fr1: {
            numenator: fr1.numenator * fr2.denominator,
            denominator: fr1.denominator * fr2.denominator
        },
        fr2: {
            numenator: fr2.numenator * fr1.denominator,
            denominator: fr1.denominator * fr2.denominator
        }
    }
}
// 1. Функция сложения 2-х объектов-дробей.

function GetSumOfFraction(fr1: Fraction, fr2: Fraction) {

    const commonFraction = TransformToCommonDenominator(fr1 , fr2)
    return {
        numenator: commonFraction.fr1.numenator + commonFraction.fr2.numenator,
        denominator: commonFraction.fr1.denominator
    }
}

console.log(GetSumOfFraction(fraction1 , fraction2))

function getRedusedSumOfFractions(fr1: Fraction , fr2: Fraction) {

    const result = GetSumOfFraction(fr1 , fr2)

    return getReductedFraction(result)
}

console.log(getRedusedSumOfFractions(fraction1 , fraction2))

// 2. Функция вычитания 2-х объектов-дробей.

function getSubtrOfFractions(fr1: Fraction , fr2: Fraction) {
    const commonFraction = TransformToCommonDenominator(fr1 , fr2)
    const result = {
        numenator: commonFraction.fr1.numenator - commonFraction.fr2.numenator,
        denominator: commonFraction.fr1.denominator
    } 
    return getReductedFraction(result)
}

console.log(getSubtrOfFractions(fraction1, fraction2))

// 3. Функция умножения 2-х объектов-дробей.

function getMulOfFractions(fr1: Fraction , fr2: Fraction) {

    const result = {
        numenator: fr1.numenator * fr2.numenator,
        denominator: fr1.denominator * fr2.denominator
    } 
    return getReductedFraction(result)
}

console.log(getMulOfFractions(fraction1 , fraction2))


// 4. Функция деления 2-х объектов-дробей.

function getDivOfFractions(fr1: Fraction , fr2: Fraction) {

    const result = {
        numenator: fr1.numenator * fr2.denominator,
        denominator: fr1.denominator * fr2.numenator
    }
    return getReductedFraction(result)
}

console.log(getDivOfFractions(fraction1 , fraction2))

// 5. Функция сокращения объекта-дроби.

function getReductedFraction(fr: Fraction) {

    const min = fr.numenator < fr.denominator ? fr.numenator : fr.denominator

    for(let i = min; i > 1; i--) {
        if (fr.numenator % i == 0 && fr.denominator%i==0) {
            fr.numenator /=i
            fr.denominator /=i
            return getReductedFraction(fr)
        }

        return fr
    }
}

//* Задание 3
// Создать объект, описывающий время (часы, минуты, секун-
// ды), и следующие функции для работы с этим объектом.

type time = {
    hours: number,
    minutes: number,
    seconds: number
}

const Time : time = {
    hours: 4,
    minutes: 50,
    seconds: 30
}

Time.hours++
Time.minutes++
Time.seconds++

// 1. Функция вывода времени на экран.

function getTimeInScreen(Time: time) {

    const TimeStr = Time.hours + ':' + Time.minutes + ':' + Time.seconds
    console.log(TimeStr)
    return TimeStr
}

// 2. Функция изменения времени на переданное количество
// секунд.

function SecondChange(Time: time, seconds: number) {

    const NewSeconds = Time.seconds + seconds
    Time.seconds = NewSeconds % 60

    const NewMinutes = Time.minutes + Math.trunc(NewSeconds / 60)
    Time.minutes = NewMinutes % 60

    const NewHours = Time.hours + Math.trunc(NewMinutes / 60)
    Time.minutes = NewHours % 60

}

// 3. Функция изменения времени на переданное количество
// минут.

function MinuteChange(Time: time, minutes: number) {

    SecondChange(Time, minutes * 60)
}

// 4. Функция изменения времени на переданное количество
// часов.

function HoursChange(Time: time, hours: number) {

    SecondChange(Time, hours * 60 * 60)

}

console.log(getTimeInScreen(Time))
SecondChange(Time, 98)
console.log(getTimeInScreen(Time))
MinuteChange(Time, 89)
console.log(getTimeInScreen(Time))
HoursChange(Time, 39)
console.log(getTimeInScreen(Time))

// Учтите, что в последних 3-х функциях, при изменении одной
// части времени, может измениться и другая. Например: если ко
// времени «20:30:45» добавить 30 секунд, то должно получиться
// «20:31:15», а не «20:30:75».



//! ------------------------------------------------------------------------------------------------------------------------
//! Практика массивы!!!!

// 1.1.  Написать функцию возвращающую массив целых чисел от 0 до 10

// const arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// function Array(arr: number[]) {
//     return { arr }
// }
// console.log(Array(arr))

// 1.2.  Добавить в функцию параметры опциональные параметры начального и конечного значения массива
//(если конечный элемент массива не передат, то он больше нечального на 10) . Вызвать функцию несаколько раз

function parametrArray(start = 0, end = start + 10) {
    return { start, end }
}

console.log(parametrArray())
console.log(parametrArray(20))
console.log(parametrArray(20, 50))

// 1.3*. Написать функцию возвращающюю массив случайных целых чисел. Функция принимает 1 параметр, количество элементов в будущем массиве

// function generateArray ( start=0 , end =) {
//     return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// }

// console.log(generateArray())
// console.log(generateArray(20))
// console.log(generateArray(20, 50))

// 2.1. В файле html создать пустой div с произвольным id
// 2.2. Получить объект div'а в js при помощи метода document.getElementById(ваш id) as HTMLDivElement
const Div = document.getElementById("app") as HTMLDivElement

// 2.3. Вывесли в полученный div текст, "Привет, пользователь"

Div.innerHTML = ` <p>Привет, пользователь!</p> `


// 2.4. Написать функцию, которая возвращает текст "Привет, пользователь" или "Привет, <имяПользователя>" 
// в зависимости от переданных параметров и использовать её в задании 2.3.

// function HelloName(Hello + 'Пользователь') {

// }
// function DivHtml(Div) {
//     return(Div.innerHTML)
// }
// console.log(DivHtml)

// 2.2. Написать функцию, принимающую массив работников и ключ объекта, по которому сделать сортировку массива
// Учесть, что строковые параметры сортируются при помощи метода localeCompare, а числовые,- вычитанием
// 2.3. Написать функцию, аналогичную описанной в задании 2.2., но сортирующую в обратном порядке
// 2.4. Написать функцию, принимающую массив работников и имя, и возвращающую объект сотрудника или undefined
// 2.5. Написать функцию, принимающую массив работников и название отдела, и возвращающую новый массив, содержащий только сотрудников переданного отдела
// 2.6. Написать функцию, принимающую массив работников и возвращающую сумму зарплат. Вызвать функцию по каждому отделу и по общему массиву


  //! ------------------------------------------------------------------------------------------------------------------------

// *Есть массив объектов

type Employees = {
    name: string,
    department: string,
    salary: number
}

const employees: Employees[]  = [
    { name: 'Федотова Арина Глебовна', department: 'ads', salary: 2100 },
    { name: 'Голикова Мария Филипповна', department: 'prog', salary: 3500 },
    { name: 'Панин Александр Германович', department: 'ads', salary: 2100 },
    { name: 'Романов Эмиль Макарович', department: 'prog', salary: 3100 },
    { name: 'Смирнов Никита Александрович', department: 'prog', salary: 3800 },
    { name: 'Александрова Майя Вячеславовна', department: 'prog', salary: 4500 },
    { name: 'Крылов Богдан Максимович', department: 'disign', salary: 2100 },
    { name: 'Мухина Айша Константиновна', department: 'disign', salary: 2100 },
  ]

//* Все функции вызывать несколько раз с разными параметрами

 //* 3.1. Создать функцию, принимающую массив работников, и возвращающую массив уникальных отделов (department)
// deps.includes
// [ads, prog, disign]
function arrEmpl(arr: Employees[], department: string) {
    return arr.filter((el) => el.department == department)
}

arrEmpl(employees, 'ads')
console.log(arrEmpl(employees, 'ads'))

function ShowElem(arr: Employees[]) {
    console.log(arr)
    console.log(arr[0])
    console.log(arr[0].name)
    console.log(arr[0].department)
    console.log(arr[0].salary)

    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i].name)
    }

    for(let empl of arr) {
        console.log(empl.name)

        const newArr = [12, 30, 7]
        return newArr
    }
}

const getFunc = ShowElem(employees)
console.log(getFunc)



// 3.2. Написать функцию, принимающую массив работников и ключ объекта, по которому сделать сортировку массива
// Учесть, что строковые параметры сортируются при помощи метода localeCompare, а числовые,- вычитанием

function sortEmpl(arr: Employees[], key: 'name' | 'department' |'salary') {
    return arr.sort((a,b) => {
        if (a[key] > b[key]) return 1 
        if (a[key] < b[key]) return -1
        return 0
    })
}

console.log(sortEmpl(employees, 'name'))
console.log(sortEmpl(employees, 'department'))
console.log(sortEmpl(employees, 'salary'))


// 3.3. Написать функцию, аналогичную описанной в задании 2.2., но сортирующую в обратном порядке

function ReturnsortEmpl(arr: Employees[], key: 'name' | 'department' | 'salary') {
    return arr.sort((a,b) => {
        if (a[key] < b[key]) return 1
        if (a[key] > b[key]) return -1
        return 0
    })
}

console.log(ReturnsortEmpl(employees, 'name'))
console.log(ReturnsortEmpl(employees, 'department'))
console.log(ReturnsortEmpl(employees, 'salary'))


// 3.4. Написать функцию, принимающую массив работников и имя, и возвращающую объект сотрудника или undefined

function findEmplByName(arr: Employees[], name:string) {
    for(let el of arr) {
        if (el.name == name) {
            return el
        }
    }
    return undefined
}

console.log(findEmplByName(employees, 'Голикова Мария Филипповна'))
console.log(findEmplByName(employees, 'Мария'))

// 3.5. Написать функцию, принимающую массив работников и название отдела, и возвращающую новый массив, содержащий только сотрудников переданного отдела

function getEmpl(arr: Employees[], department: string) {
   return arr.filter((el) => el.department == department)
}

getEmpl(employees, 'prog')

console.log(getEmpl(employees, 'prog'))
console.log(getEmpl(employees, 'ads'))


// 3.6. Написать функцию, принимающую массив работников и возвращающую сумму зарплат. Вызвать функцию по каждому отделу и по общему массиву

// 3.7. В HTML создать div для кнопок, задать ему id и получить объект div'a в js, аналогично заданию 2.2.

// 3.8. Используя массив, полученный в 3.1. Вывести кнопки с названиями отделов + кнопку "Все отделы"
//      использовать data-атрибут (data-dep), в который поместить название отдела. Для кнопки "Все отделы" data-dep="all" 

// 3.9. Так же как в 3.7 создать ul (as HTMLUListElement) для вывода списка и div для вывода итого 

// 3.10. Используя div, полученный в задании 3.7
// div37.addEventListener('click', function (e) {
//   const target = e.target as HTMLElement
//   if (target.tagName == 'BUTTON' && target.dataset.dep) {
//      в зависимости от значения dep выводить в список (ul 3.9) тех сотрудников, которые работают в данном отделе, либо всех, если target.dataset.dep=='all'. 
// Используем логическое ветвление и уже написанные функции
//      в div (3.9) выводить сумму зарплат
//   }
// })

//! ------------------------------------------------------------------------------------------------------------------------

// const arr1: number[] = [0, 4, 6, 5, 8, 5, 3, 3, 8, 0]
// const arr2: number[] = [5, 8, 1, 9, 3]

// function fillArrayRandomNumbers(arr: number[], length: number) {
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random() * 10))
//     }
// }

// fillArrayRandomNumbers(arr1, 10)
// fillArrayRandomNumbers(arr2, 5)


// console.log(arr1)
// console.log(arr2)
// console.log(arr2.includes(0))

  //! ------------------------------------------------------------------------------------------------------------------------

//TODO Практика 2.2 Всё сделано.

//* Задание 1
// Создать массив из 10 случайных чисел и написать несколько
// функций для работы с ним.

const Arr: number[] = []

// 1. Функция принимает массив и выводит его на экран.

function RandomNumber(Arr: number[] , length: number) {
    for(let i = 0; i < length; i++) {
        Arr.push(Math.floor(Math.random() * 10))
    }
}

RandomNumber(Arr, 10)

console.log(Arr)

// 2. Функция принимает массив и выводит только четные
// элементы.

function OnlyEvenNumber(Arr: number[]) {
    const Arr1 = []

    for(i = 0; i < Arr.length; i++) {
        if (Arr[i] % 2 === 0) {
            Arr1.push(Arr[i])
        }
    }
    console.log(Arr1)
}
console.log(OnlyEvenNumber(Arr))

// 3. Функция принимает массив и возвращает сумму всех
// элементов массива.

function ArrSumNumber(Arr: number[]) {
    let sum = 0 
    for(i = 0; i < Arr.length; i++) {
        sum += Arr[i]
    }
    console.log(sum)
}

console.log(ArrSumNumber(Arr))

// 4. Функция принимает массив и возвращает его максималь-
// ный элемент.

function ArrMaxElem(Arr: number[]) {
    return(Math.max(...Arr))
}

console.log(ArrMaxElem(Arr))

// 5. Функция добавления нового элемента в массив по ука-
// занному индексу.

function NewElement(Arr: number[], el: number, index: number) {
    Arr.splice(index, 0, el)
    console.log(Arr)
}

console.log(NewElement(Arr, 6, 9))
console.log(NewElement(Arr, 2, 5))


// 6. Функция удаления элемента из массива по указанному
// индексу.
function DeleteElement(Arr: number[], index: number) {
    Arr.splice(index, 1)
    console.log(Arr)
}
console.log(DeleteElement(Arr, 5))

//* Задание 2
// Создать еще один массив из 5 случайных чисел и написать
// следующие функции.

const arr: number[] = []
const arr1: number[] = []

function RandomFiveNumber(arr: number[] , length: number) {
    for(let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 10))
    }
}

RandomFiveNumber(arr, 10)
RandomFiveNumber(arr1, 5)

console.log(arr)
console.log(arr1)

// 1. Функция принимает 2 массива и возвращает новый мас-
// сив, в котором собраны все элементы из двух массивов
// без повторений.

function getNewArr(arr: number[], arr1: number[]) {

    const arr2: number[] = []

    for(let el of arr) {
        if(!arr2.includes(el)) {
            arr2.push(el)
        }
    }

    for(let el of arr1) {
        if(!arr2.includes(el)) {
            arr2.push(el)
        }
    }

    return arr2
}

console.log(getNewArr(arr, arr1))


// 2. Функция принимает 2 массива и возвращает новый массив,
// в котором собраны общие элементы (то есть элементы,
// которые встречаются и в первом и во втором массивах)
// без повторений.

function getElemTwoArr(arr: number[], arr1: number[]) {

    const arr2: number[] = []

    for(let el of arr) {
        if(arr.includes(el) && arr1.includes(el)) {
            if(!arr2.includes(el)) {
                arr2.push(el)
            }
        }
    }
    return arr2
}

console.log(getElemTwoArr(arr, arr1))


// 3. Функция принимает 2 массива и возвращает новый мас-
// сив, в котором собраны все элементы из первого массива,
// которых нет во втором массиве.

function getElemNotArr(arr: number[], arr1: number[]) {

    const arr2: number[] = []

    for(let el of arr) {
        if(!arr1.includes(el)) {
            if(!arr2.includes(el))
            arr2.push(el)
        }
    }
    return arr2
}

console.log( getElemNotArr(arr, arr1))

//* Задание 3
// Создать массив фруктов и отсортировать его по алфавиту.
// Написать следующие функции.

type fruits = {
    name: string,
}

 const FruitsSort: fruits[] = [
    {name: 'banana'},
    {name: 'peach'},
    {name: 'pineapple'},
    {name: 'orange'},
    {name: 'apple'},
    {name: 'mango'},
    {name: 'pear'}
 ]

// 1. Вывод на экран с помощью document.write() в виде списка
// (с помощью тегов ul и li).

let html = ``

console.log(FruitsSort.sort((a, b) => a.name.localeCompare(b.name)))

FruitsSort.sort((a,b) => +a - +b).forEach((el) => {
    html = `<p>${el.name}</p>`
})

console.log(html)


// 2. Поиск фрукта в массиве. Функция принимает название
// фрукта и возвращает индекс найденного элемента или -1,
// если не найден. Поиск должен быть нерегистрозависимым.

function SearchFruits(name: string, arr: fruits[]) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].name == name) {
            return i
        }
    }
    return -1
}
console.log(SearchFruits('banana', FruitsSort))

  //! ------------------------------------------------------------------------------------------------------------------------

//TODO Домашка 2.2  СДЕЛАНО!!! УРА

//* Задание 1
// Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта, необ-
// ходимое количество и куплен или нет. Написать несколько функ-
// ций для работы с таким массивом.

type products = {
    name: string,
    count: number,
    isBuyed: boolean,
}

const toBuyList: products[] = [

    {name: 'milk', count: 1, isBuyed: true},
    {name: 'cheese', count: 1, isBuyed: true},
    {name: 'chocolate', count: 1, isBuyed: false},
    {name: 'eggs', count: 10, isBuyed: false},
    {name: 'bread', count: 1, isBuyed: true},
]

// 1. Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные.

const toBuyListOl = document.getElementById('toBuyList') as HTMLOListElement

console.log(toBuyListOl)

function renderBuyList(arr: products[]) {

    let html = ''

    for(let el of arr) {
        if(!el.isBuyed) {
            html += `<li style = "color: brown">${el.name} ${el.count}</li>`
        }
    }

    for(let el of arr) {
        if(el.isBuyed) {
            html += `<li style = "color: darkgreen">${el.name} ${el.count}</li>`
        }
    }

    toBuyListOl.innerHTML = html
}

renderBuyList(toBuyList)

// 2. Добавление покупки в список. Учтите, что при добавлении
// покупки с уже существующим в списке продуктом, необ-
// ходимо увеличивать количество в существующей покупке,
// а не добавлять новую.

const productNameImput = document.getElementById('productName') as HTMLInputElement
const productCountInput = document.getElementById('productCount') as HTMLInputElement
const productAddButton = document.getElementById('Addproduct') as HTMLInputElement

function AddBuyList(arr: products[], name: string, count: number) {
    let InList = false
    for(let el of arr) {
        if(el.name == name && !el.isBuyed) {
            el.count += count
            InList = true
        }
    }
    if (!InList) {
        arr.push({ name, count, isBuyed: false })
    }

    renderBuyList(arr)
}

AddBuyList(toBuyList, 'oil', 1)

productAddButton.addEventListener('click', function(){
    const count = parseFloat(productCountInput.value.replace(',', '.'))
    AddBuyList(toBuyList, productNameImput.value, count)
    productNameImput.value = ''
    productCountInput.value = ''
})


// 3. Покупка продукта. Функция принимает название продукта
// и отмечает его как купленный.

const setBuyedButton = document.getElementById('setBuyed') as HTMLButtonElement

function setBuyed(arr: products[], name: string) {
    for(let el of arr) {
        if(el.name == name) {
            el.isBuyed = true
        }
    }
    renderBuyList(arr)
}

setBuyed(toBuyList, 'buckweat')

setBuyedButton.addEventListener('click', function() {
    setBuyed(toBuyList, productNameImput.value)
    productNameImput.value = ''
    productCountInput.value = ''
})

toBuyListOl.addEventListener('click', function(e) {
    const target = e.target as HTMLElement
    if (target.tagName == 'BUTTON' && target.dataset.name) {
        setBuyed(toBuyList, target.dataset.name)
    }
})


//* Задание 2
// Создать массив, описывающий чек в магазине. Каждый эле-
// мент массива состоит из названия товара, количества и цены за
// единицу товара. Написать следующие функции.

type check = {
    name: string,
    count: number,
    price: number,
}

const ProductInCheck: check[] = [
    {name: 'potato', count: 10, price: 120},
    {name: 'sugar', count: 2, price: 190},
    {name: 'chocolate', count: 3, price: 180},
    {name: 'fish', count: 1, price: 300},
    {name: 'ham', count: 1, price: 250}
]

// 1. Распечатка чека на экран.

const ProductInCheckOl = document.getElementById('ProductInCheck') as HTMLOListElement

function getCheck(arr: check[]) {
    let html = '<h3>"ООО Магнит"</h3>'
    html += '<hr>'
    html += '<h3>Чек № 134</h3>'
    html += '<hr>'
    html += `<table><tr>
    <th>name</th>
    <th>count</th>
    <th>price</th>
    </tr>`

    for(let el of arr) {
        html += `<tr>
        <td>${el.name}</td>
        <td>${el.count}</td>
        <td>${el.price}</td>
        </tr>`
    }

    html += '</table>'
    html += '<hr>'
    html += `<h3>К оплате: ${sumCheck(arr)}руб.</h3>`

    ProductInCheckOl.innerHTML = html
}
getCheck(ProductInCheck)

// 2. Подсчет общей суммы покупки.

function sumCheck(arr: check[]) {
    let sum = 0

    for(let el of arr) {
        console.log(el)
        sum += el.count * el.price
    }
    return sum
}

console.log(sumCheck(ProductInCheck))

// 3. Получение самой дорогой покупки в чеке.

function MaxSum(arr: check[]) {
    let max = 0 
    for(i = 0; i < arr.length; i++) {
        if(arr[i].count * arr[i].price > max) {
            max = arr[i].count * arr[i].price
        }
        return max
    }
}

console.log(MaxSum(ProductInCheck))

// 4. Подсчет средней стоимости одного товара в чеке.

function MidCheck(arr: check[]) {
    return sumCheck(arr) / arr.length
}

console.log(MidCheck(ProductInCheck))

//* Задание 3
// Создать массив css-стилей (цвет, размер шрифта, выравнива-
//     ние, подчеркивание и т. д.). Каждый элемент массива – это объ-
//     ект, состоящий из двух свойств: название стиля и значение стиля.
//     Написать функцию, которая принимает массив стилей и
//     текст, и выводит этот текст с помощью document.write() в тегах
//     <p></p>, добавив в открывающий тег атрибут style со всеми сти-
//     лями, перечисленными в массиве.

const stylesText = [
    {'color': 'green'},
    {'font-size': '30px'},
    {'text-aligin': 'center'},
    {'padding': '13px'},
]

function StyleForText(styles: any[], text: string) {
    let Styletext = ''
    for(let el of styles) {
        for(let key in el) {
            Styletext += `${key}:${el[key]}`
        }
    }

    const RenderText = `<p style = "${Styletext}>${text}</p>`
    document.body.insertAdjacentHTML('beforeend', RenderText)
}

StyleForText(stylesText, 'Hello, World')

//! ------------------------------------------------------------------------------------------------------------------------
//TODO обязательно сделать!!!!!!!!!!!
//* Задание 4
// Создать массив аудиторий академии. Объект-аудитория со-
// стоит из названия, количества посадочных мест (от 10 до 20) и
// названия факультета, для которого она предназначена.
// Написать несколько функций для работы с ним.

// 1. Вывод на экран всех аудиторий.

// 2. Вывод на экран аудиторий для указанного факультета.

// 3. Вывод на экран только тех аудиторий, которые подходят для
// переданной группы. Объект-группа состоит из названия,
// количества студентов и названия факультета.

// 4. Функция сортировки аудиторий по количеству мест.

// 5. Функция сортировки аудиторий по названию (по алфа-
// виту).
//! ------------------------------------------------------------------------------------------------------------------------


//! ------------------------------------------------------------------------------------------------------------------------

console.log(0.1 + 0.2)

let str10 = '';

for (let i = 128513; i <= 128613; i++) {
    str10 += String.fromCodePoint(i);
}

console.log(str10)

//! ------------------------------------------------------------------------------------------------------------------------


//! Строки
// TODO Практика 2.3. Всё сделано!!!

//* Задание 1
// Написать функцию, которая принимает 2 строки и срав-
// нивает их длину. Функция возвращает 1, если в первой
// строке больше символов, чем во второй; -1 – если во вто-
// рой больше символов, чем в первой; или 0 – если строки
// одинаковой длины.

function compareStr(str1: string, str2: string) {
    for(let i = 0; i < str1.length && str2.length; i++) {
        if(str1.length > str2.length)
            return 1
    } if(str2.length > str1.length) {
        return -1
    } else (str1.length == str2.length)
    return 0
}
console.log(compareStr('Собака', 'кошка'))

//* Задание 2
// Написать функцию, которая переводит в верхний регистр
// первый символ переданной строки.

function UpStr(str: string) {
    for(let i = 0; i < str.length; i++ ) {
        return str
    }
}

console.log(UpStr('Феодосия'[0].toUpperCase()))

//* Задание 3
// Написать функцию, которая считает количество гласных
// букв в переданной строке.

let letter = ['a', 'e', 'i', 'o', 'u', 'y']

summ = 0 

function LetterInStr(str: string) {
    for(let chat of str.toLowerCase()) {
        if(letter.includes(chat)) {
            summ += 1
        }
    }
    return summ
}
console.log(LetterInStr('banana'))

//* Задание 4
// Написать функцию для проверки спама в переданной
// строке. Функция возвращает true, если строка содержит
// спам. Спамом считать следующие слова: 100% бесплатно,
// увеличение продаж, только сегодня, не удаляйте, ххх.
// Функция должна быть нечувствительна к регистру.

function chekSpam(str: string) {

    let loverStr = str.toLowerCase();
    if (loverStr.includes('как заработать косарь?') || loverStr.includes('ольга 300м от вас') || 
    loverStr.includes('моя спина не болит, потому что...') || loverStr.includes('получи фрибет')) {
   return true
    } else 
    return false
}

console.log(chekSpam('banana'))
console.log(chekSpam('как заработать косарь?'))
console.log(chekSpam('Ольга 300м от вас'))
console.log(chekSpam('Моя спина не болит, потому что...'))
console.log(chekSpam('Получи фрибет'))


//* Задание 5
// Написать функцию сокращения строки. Функция прини-
// мает строку и ее максимальную длину. Если длина строки
// больше, чем максимальная, то необходимо отбросить
// лишние символы, добавив вместо них троеточие.
// Например: truncate(“Hello, world!”, 8) должна вернуть
// “Hello...”.

function reductionStr(str: string, maxlength: number) {
    if(str.length > maxlength) {
        return str.slice(0, maxlength -1) + '...'
    }
}

console.log(reductionStr('Hello, world', 6))

//* Задание 6
// Написать функцию, которая проверяет, является ли пере-
// данная строка палиндромом.

function palindromeStr(str: string) {
    return  str.split('').reverse().join('') == str
}

console.log(palindromeStr('шалаш'))

//* Задание 7
// Написать функцию, которая считает количество слов в
// предложении.

function quantityWords(str: string) {
    return str.split(``).length
}

console.log(quantityWords('Дождь, ну и пусть'))

//* Задание 8
// Написать функцию, которая возвращает самое длинное
// слово из предложения.

function retLongWord(str: string) {

    const arrWord = str.split(` `)

    let longWord = arrWord[0]

    for(const words of arrWord) {
        if(words.length > longWord.length) {
            longWord = words
        }
    }
    return longWord
}

console.log(retLongWord(`всё идёт по плану`))

//* Задание 9
// Написать функцию, которая считает среднюю длину слова
// в предложении.

summ = 0

function mediumLength(str: string) {
    str.replaceAll(',' , '').replaceAll('.','').replaceAll(':','').replaceAll('?','').replaceAll('!','')

    const word = str.split(` `)

    for(let words of word) {
        summ += words.length
    }

    return summ / word.length
}

console.log(mediumLength(`Всё: идёт! по, плану?`))

//* Задание 10
// Написать функцию, которая принимает строку и символ
// и выводит индексы, по которым находится этот символ в
// строке. Также вывести, сколько всего раз встречается этот
// символ в строке.

function indexSymbol(str: string, char: string) {

    const info = {
        sumchar: 0,
        position: [] as number[]
    }

    for(let i = 0; i < str.length; i++) {
        if (char == str[i]) {
            info.position.push(1)
            info.sumchar++
        }
    }

    return info
}

console.log(indexSymbol('лалала' , 'л'))

  //! ------------------------------------------------------------------------------------------------------------------------


//TODO Домашка 2.3

//* Задание 1
// Написать функцию, которая принимает строку и выводит
// статистику о ней: количество букв, количество цифр и
// количество других знаков.

function newStr(str: string) {

    const infoStr = {

        sumLetter: 0,
        sumFigure: 0,
        sumSign: 0,
    }

    let letters = 'абвгдеёжзийклмнопрстуфхцчэюяabcdefghijklmnopqrstuvwxyz'

    let figure = '1234567890'

    let sign =  '/.,;:"!&%$#@*-+=\\'

    let allLetters = letters + letters.toUpperCase()

    for(let char of str) {
        if (allLetters.includes(char)) {
            infoStr.sumLetter++
        } 
        if (figure.includes(char)) {
            infoStr.sumFigure++
        } 
        if (sign.includes(char)) {
            infoStr.sumSign++
        }
    }
    return infoStr
}
console.log(newStr('\\//...гдееж666'))

//* Задание 2
// Написать функцию, которая принимает двузначное число
// и возвращает его в текстовом виде.
// Например: 35 – тридцать пять, 89 – восемьдесят девять,
// 12 – двенадцать.

function WriteLet(num: number) {

    let units = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять']

    let dozens = ['десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать']

    let rounds = [, , 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']

    if(num >= 0 && num <= 9) {
        return units[num]
    }
    if(num >= 10 && num <= 20) {
        return dozens[num - 10]
    }
    if(num >= 20 && num <= 99) {
        if(num % 10 == 0) {
            return rounds[num/10]
        }
    }

    return rounds[Math.trunc(num / 10)] + ' ' + units[num % 10]
}

console.log(WriteLet(34))

//* Задание 3
// Написать функцию, которая заменяет в полученной строке
// большие буквы на маленькие, маленькие – на большие, а
// цифры – на знак нижнего подчеркивания.

function replaceStr(str: string) {

    let newstr = ''

    for(let char of str){
        if ('1234567890'.includes(char)) {
            newstr += '_'
        }
        else if (char == char.toLowerCase()) {
            newstr += char.toUpperCase()
        }
        else if (char == char.toUpperCase()) {
            newstr += char.toLowerCase()
        }
    }
    return newstr
}

console.log(replaceStr('ГдеЁж666'))

//* Задание 4
// Написать функцию, которая преобразует названия css-
// стилей с дефисом в название в СamelСase стиле: font-size
// в fontSize, background-color в backgroundColor, text-
// align в textAlign.

function replaceCss(str: string) {

    return str.split('-').map((el, i) => i ? el[0].toUpperCase()+ el.slice(1) : el).join('')

}
console.log(replaceCss('font-size'))
console.log(replaceCss('background-color'))
console.log(replaceCss('text-aligin'))


//* Задание 5
// Написать функцию, которая принимает словосочетание
// и превращает его в аббревиатуру.
// Например: cascading style sheets в CSS, объектно-
// ориентированное программирование в ООП.

function Abbr(str: string) {
    return str.replaceAll('-', ' ').split(' '). map(el => el[0].toUpperCase()).join('')
}

console.log(Abbr('cascading style sheets'))
console.log(Abbr('объектно-ориентированное программирование'))
console.log(Abbr('организация объединенных наций'))

//* Задание 6
// Написать функцию, которая принимает любое коли-
// чество строк, объединяет их в одну длинную строку и
// возвращает ее.

function contStr(...arr: string[]) {
    return arr.join(';')
}

console.log(contStr('123, 123, 123'))
//* Задание 7
// Написать функцию – калькулятор. Функция принимает
// строку с примером, определяет, какое действие необходимо
// выполнить (+ - * /), переводит операнды в числа, решает
// пример и возвращает результат.

function calculator(str:string):number {

    str = str.replaceAll(' ', '')
    if (str.includes('+')) {
      const arr = str.split('+')
      let sum = 0
      arr.forEach(el => sum += +calculator(el))     
      return sum

    } else if (str.includes('-')) {
      const arr = str.split('-')
      let sum = +calculator(arr[0])
      arr.forEach((el, i) => sum -= i ? +calculator(el) : 0)
      return sum
      // return +calculator(arr[0]) - (+calculator(arr[1]))

    } else if (str.includes('*')) {
      const arr = str.split('*')
      let sum = 1 
      arr.forEach(el => sum *= +calculator(el))     
      return sum
      // return +calculator(arr[0]) * (+calculator(arr[1]))

    } else if (str.includes('/')) {
      const arr = str.split('/')
      let sum = +arr[0] 
      arr.forEach((el, i) => sum /= i ? +calculator(el): 1)     
      return sum
    //   return +calculator(arr[0]) / (+calculator(arr[1]))
    }
    
    return +str
  }

  console.log(calculator('18 + 9 * 7 / 2 / 3.5 - 5 + 10 * 2 * 4'))
  console.log(calculator('8 * 89/8 + 1'))


//* Задание 8
// Написать функцию, которая получает url и выводит под-
// робную информацию о нем.
// Например: url “https://itstep.org/ua/about”, информация
// “протокол: https, домен: itstep.org, путь: /ua/about”.

function ForUrl(url: string) {

    let protocol
    let domain
    let way
    let arr1 = url.split(`://`)
    let arr2

    for(let i = 0; i < arr1.length; i++) {

        protocol = arr1[0]

        arr2 = arr1[1].split(`/`)

        domain = arr2[0]

        arr2.shift()

        way = arr2.join(`/`)
    }

    return "Информация: протокол:" + protocol + "," + "домен:" + domain + "," + "путь:" + way
}

console.log(ForUrl(`https://itstep.org/ua/about`))

//* Задание 9
// Написать функцию, которая принимает строку и раздели-
// тель и возвращает массив подстрок, разбитых с помощью
// указанного разделителя.
// Например: строка “10/08/2020”, разделитель “/”, результат:
// “10”, “08”, “2020”.

function datestr(str: string, separator: any) {

    let lastContent = 0
    const arr = []

    for (let i = 0; i < str.length; i++) {
        if(str[i] == separator) {
            arr.push(str.slice(lastContent, i))
            lastContent = i + 1
        }
    }
    if(str.slice(lastContent)) {
        arr.push(str.slice(lastContent))
    }
    return arr
}
console.log(datestr("15/06/2024" , "/"))

  

//* Задание 10
// Написать функцию вывода текста по заданному шаблону.
// Функция принимает первым параметром шаблон, в тексте
// которого может использоваться %, после символа % ука-
// зывается индекс входного параметра. При выводе вместо
// %индекс необходимо вывести значение соответствующего
// входного параметра.
// Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10,
// 8, 2020) должна вывести “Today is Monday 10.8.2020”.
  
function outputText(template: string, ...values: any[]) {

    for (let i = 0; i < template.length; i++) {
        template = template.replace('%' + (i + 1), values[i])
    }

    return template
}

console.log(outputText("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020))



//! ------------------------------------------------------------------------------------------------------------------------

// Object.keys(obj) / Object.values(obj) / Object.entries(obj) – возвращают массив всех перечисляемых собственных строковых ключей/значений/пар ключ-значение.
// Object.getOwnPropertySymbols(obj) – возвращает массив всех собственных символьных ключей.
// Object.getOwnPropertyNames(obj) – возвращает массив всех собственных строковых ключей.
// Reflect.ownKeys(obj) – возвращает массив всех собственных ключей.
// obj.hasOwnProperty(key): возвращает true, если у obj есть собственное (не унаследованное) свойство с именем key.

//! ------------------------------------------------------------------------------------------------------------------------


//! Классы
//TODO Практика 2.4 

//* Задание 1
// Реализовать класс
// ■ размера шрифта;
// ■ цвета шрифта;
// ■ семейства шрифта;
// ■ метода print(), который принимает текст и печатает его
// соответствующим шрифтом с помощью
// Создать объект такого класса и продемонстрировать работу
// метода.

const pmDiv = document.getElementById('pm') as HTMLDivElement

class PrintMachine {

    tag: string
    fSize = 24
    color = 'darkgreen'
    fFamily = 'roboto'

    constructor(fSize: number, color: string, fFamily: string, tag = 'p') {
        this.tag = tag
        this.fSize = fSize
        this.color = color
        this.fFamily = fFamily
    }

    print(text:string) {
        pmDiv.innerHTML += `<${this.tag} style ="font-size: ${this.fSize}; font-family: ${this.fFamily}; color: ${this.color}">${text}</${this.tag}>`
    }

}

const mee = new PrintMachine(400, 'white', 'arial')
mee.print('Hi, I love Alxaitham (this is written by a pm)')
let mee2 = new PrintMachine(200, 'orange', 'verdana')
mee2.print('Eula is my wife')



//* Задание 2
// Реализовать класс, описывающий новость (заголовок, текст,
// массив тегов, дата публикации). В классе необходимо реализовать
// один метод print, который выводит всю информацию в таком
// виде, как на рисунке 1

  // Класс HtmlElement должен содержать внутри себя:
  // ■ название тега;
  // ■ самозакрывающийся тег или нет;
  // ■ текстовое содержимое;
  // ■ массив атрибутов;
  // ■ массив стилей;
  // ■ массив вложенных таких же тегов;
  // ■ метод для установки атрибута;
  // ■ метод для установки стиля;
  // ■ метод для добавления вложенного элемента в конец текущего элемента;
  // ■ метод для добавления вложенного элемента в начало текущего элемента;
  // ■ метод getHtml(), который возвращает html код в виде
  //   строки, включая html код вложенных элементов.
  // С помощью написанного класса реализовать следующий блок
  // и добавить его на страницу с помощью document.write().

//   const newsDiv = document.getElementById('news') as HTMLDivElement
//   const newsTitleInput = document.getElementById('title') as HTMLDivElement
//   const newsTextInput = document.getElementById('text') as HTMLDivElement
//   const newsTagInput = document.getElementById('tag') as HTMLDivElement
//   const newsDateInput = document.getElementById('date') as HTMLDivElement
//   const newsAInput = document.getElementById('a') as HTMLDivElement
//   const newsAddButton = document.getElementById('addbutton') as HTMLDivElement


//   newsAddButton.addEventListener('click', () => {
//     newsF.addNews(newsTitleInput.value, newsTextInput.value, newsTagInput.value, newsDateInput.value, newsAInput.value)
//   })

// //?   Удалить новость

//   const newsFindInput = document.getElementById('Finput') as HTMLDivElement
//   const newsDelInput = document.getElementById('Dinput') as HTMLDivElement

//   newsDelInput.addEventListener('click', () => {
//     newsFindInput.deleteNews(+newsFindInput.value)
//   })

// //?   Найти новость по тегу

// const findInput = document.getElementById('find') as HTMLDivElement
// const findIdInp = document.getElementById('IdInp') as HTMLDivElement

// findIdInp.addEventListener('click', () => {
//     newsF.searchNewsByTag(findInput.value)
// })

// class news {
//     heading
//     date
//     text
//     hashtag
//     a

//     constructor(heading: string, date: string, text: string, hashtag: string, a: string ) {
//         this.heading = heading
//         this.date = date
//         this.text = text
//         this.hashtag = hashtag
//         this.a = a 
//     }

//     getDate() {
//         let today = new Date()
//         let dTime = Math.abs(today.getTime() - this.date.getTime())
//         let dDays = dDays / (1000 * 60 * 60 * 24)

//         if (dDays < 1) {
//             return 'Today'

//         } else if (dDays < 7) {
//             return `${dDays} дней назад`

//         } else {
//             return this.date.toLocaleDateString()
//         }
//     }

//     print() {
//         return `<h1>${this.heading}</h1>
//         <p class ="">${this.getDate()}</p>
//         <p>${this.text}</p>
//         <a href = "https://www.nytimes.com/2024/04/25/arts/design/san-francisco-museum-sound.html">${this.a}</a>
//         <p>${this.hashtag}</p>`
//     }
// } 

//*  Задание 3.
// Реализовать класс, описывающий новостную ленту.
// Класс должен содержать:
// ■ массив новостей;
// ■ свойство, которое возвращает количество новостей;
// ■ метод для вывода на экран всех новостей;
// ■ метод для добавления новости;
// ■ метод для удаления новости;
// ■ метод для сортировки новостей по дате (от последних новостей до старых);
// ■ метод для поиска новостей по тегу (возвращает массив
// новостей, в которых указан переданный в метод тег).
// Продемонстрировать работу написанных методов.


//     print() {
//         return `<h1>${this.heading}</h1>
//         <p class="">${this.getDate()}</p>
//         <p>${this.text}</p>
//         <a href=" https://www.nytimes.com/2024/04/25/arts/design/san-francisco-museum-sound.html">${this.a}</a>
//         <p>${this.hashtag}</p>`
//     }
// }
// const newNews = new News('Music Is More Than Just Sound', 'Music is music. But music is also the stuff surrounding the music.Beethoven`s Fifth Symphony, “The White Album,” Coltrane live at Birdland: On their own, these are but air molecules vibrating across our eardrums. Music becomes sacred partly through the material culture it inspires.And just as music shapes design — think jazz album cover versus metal album cover — design also codes how we hear music. In an old Xeroxed flyer for a punk show was information on how to absorb those songs; in an iconic ad for Maxell cassette  tapes lurked signals about the spirit of rock...', '#music #song #TheNYT', '2024-04-07T18:50:20', ' More')

// newNews.print()

//! ---------------------------------------------------------------------------------------------------------------------------------

//TODO Домашка 2.4


//* Задание 1
// Реализовать класс, описывающий окружность. В классе долж-
// ны быть следующие компоненты:
// ■ поле, хранящее радиус окружности;
// ■ get-свойство, возвращающее радиус окружности;
// ■ set-свойство, устанавливающее радиус окружности;
// ■ get-свойство, возвращающее диаметр окружности;
// ■ метод, вычисляющий площадь окружности;
// ■ метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.

class Circle {
    #radius: number
    constructor(radius: number) {
       this.#radius = radius
    }
    get radius() {
        console.log('getter worked', this.#radius)
        return this.#radius
    }
    set radius(val: number) {
        if (val <= 0) {
            throw Error('nizza')
        }
        console.log('setter worked', val)
         this.#radius = val
    }
    squareCircle() {
        return Math.PI * this.#radius ** 2
    }
    lengthCircle() {
        return 2 * Math.PI * this.#radius
    }
}

const c = new Circle(10)

console.log(c.radius)

c.radius = 15

console.log(c.radius)
console.log(c.squareCircle())
console.log(c.lengthCircle())

//* Задание 2
// Реализовать класс, описывающий html элемент.
// Класс HtmlElement должен содержать внутри себя:
// ■ название тега;
// ■ самозакрывающийся тег или нет;
// ■ текстовое содержимое;
// ■ массив атрибутов;
// ■ массив стилей;
// ■ массив вложенных таких же тегов;
// ■ метод для установки атрибута;
// ■ метод для установки стиля;
// ■ метод для добавления вложенного элемента в конец теку-
// щего элемента;
// ■ метод для добавления вложенного элемента в начало те-
// кущего элемента;
// ■ метод getHtml(), который возвращает html код в виде
// строки, включая html код вложенных элементов.
// С помощью написанного класса реализовать следующий блок
// и добавить его на страницу с помощью document.write().

// class HtmlElement {
//     offsetWidth: any
//     clientWidth: any
//     innerHTML() {
//       throw new Error('Method not implemented.')
//     }
//     tag: string
//     isSingle: boolean
//     text: string
//     atributes = [] as any[]
//     styles = [] as any[]
//     elements = [] as HtmlElement[]
//     constructor(tag: string, text = '') {
//       const singleArr = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']
//       this.tag = tag
//       this.text = text
//       this.isSingle = singleArr.includes(tag) ? true : false
//     }
//     setAtribute(name: string, value: string) {
//       this.atributes.push({ name, value })
//     }
//     setStyle(name: string, value: string) {
//       this.styles.push({ name, value })
//     }
//     prepend(el: HtmlElement) {
//       this.elements.unshift(el)
//     }
//     append(el: HtmlElement) {
//       this.elements.push(el)
//     }
//     getHtml(): string {
//       const styles = this.styles.map(el => el.name + ':' + el.value).join(';')
//       const attrCopy = [...this.atributes]
//       if (this.styles.length) {
//         attrCopy.push({ name: 'style', value: styles })
//       }
//       if (this.isSingle) {
//         if (this.text) {
//           attrCopy.push({ name: 'area-label', value: this.text })
//         }
//         const atributes = attrCopy.map(el => el.name + '="' + el.value + '"').join(' ')
//         return `<${this.tag} ${atributes}>`
//       } else {
//         const atributes = attrCopy.map(el => el.name + '="' + el.value + '"').join(' ')
//         return `<${this.tag} ${atributes}>${this.text}${this.elements.map(el => el.getHtml()).join('\n')}</${this.tag}>`
//       }
//     }
//   }
  
//   const wrapper = new HtmlElement('div')
//   wrapper.setAtribute('id', 'wrapper')
//   wrapper.setAtribute('class', 'wrap')
//   let div = new HtmlElement('div')
//   div.setAtribute('class', 'block')
//   const h3 = new HtmlElement('h3', 'Lorem')
//   const img = new HtmlElement('img')
//   img.setAtribute('class', 'img')
//   img.setAtribute('src', 'vite.svg')
//   img.setAtribute('alt', 'Lorem')
//   const p = new HtmlElement('p', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla assumenda inventore voluptas natus obcaecati mollitia ad eos adipisci delectus quia odit, earum culpa sunt, molestiae doloribus in explicabo! Illo, harum!')
//   p.setAtribute('class', 'text')
//   const a = new HtmlElement('a', 'More...')
//   a.setAtribute('href', 'https://www.lipsum.com/')
//   a.setAtribute('target', '_blank')
//   p.append(a)
//   div.append(img)
//   div.append(p)
//   div.prepend(h3)
//   wrapper.append(div)
//   wrapper.append(div)
  
//   const heDiv = document.getElementById('he') as HTMLDivElement
//   heDiv.innerHTML = wrapper.getHtml()
  
//! Обратите внимание. Чтобы получить весь этот html в виде
//! строки должно быть достаточно вызвать метод getHtml только
//! у тега с идентификатором wrapper.

//* Задание 3
// Реализовать класс, который описывает css класс.
// Класс CssClass должен содержать внутри себя:
// ■ название css класса;
// ■ массив стилей;
// ■ метод для установки стиля;
// ■ метод для удаления стиля;
// ■ метод getCss(), который возвращает css код в виде строки.

// class CssClass {
//     style = [] as any[]
//     name: string
//     constructor(name: string) {
//         this.name = name
//     }

//     setStyle(name: any, value: any) {
//         this.style.push({name, value})
//     }

//     removePr( name: string) {
//         const index = this.style.findIndex(el => el.name == name)
//         if(index != -1) this.style.splice(index, 1)
//     }

//     getCss() {
//         const styles = this.style.map((el: {name: string, value: string}) => el.name + ':' + el.value).join(';')
//         return `.${this.name}{${styles}}`
//     }
// }

// const desCss = document.getElementById('st') as HTMLDivElement
// const bred = new CssClass('bred')

// bred.setStyle("color", "red")
// bred.setStyle("color", "green")
// bred.setStyle("font-size", "30px")
// bred.setStyle("font-family", "Arial")
// console.log(bred.getCss())

// bred.removePr("font-family")
// bred.removePr("color")
// console.log(bred.getCss())

// desCss.innerHTML += bred.getCss()


//* Задание 4
// Реализовать класс, описывающий блок html документ.
// Класс HtmlBlock должен содержать внутри себя:
// ■ коллекцию стилей, описанных с помощью класса CssClass;
// ■ корневой
// элемент,
// описанный
// с
// помощью
// класса
// HtmlElement;
// ■ метод getCode(), который возвращает строку с html ко-
// дом (сначала теги style с описанием всех классов, а потом
// все html содержимое из корневого тега и его вложенных
// элементов).
// С помощью написанных классов реализовать следующий блок
// (см. рис. 2) и добавить его на страницу с помощьюdocument.write().

// class HTMLBlock {
//     style = [] as CssClass[]
//     element: HTMLElement
//     constructor(style: CssClass[], element: HTMLElement) {
//         this.element = element
//         this.style = style
//     }

//     getCode() {
//         return {
//             style: this.style.map(el => el.getCss()).join('\n'),
//             html: this.element.gethtml()
//         }
//     }
// }

// const docCss = document.getElementById('st') as HTMLDivElement
// const docDiv = document.getElementById('gr') as HTMLDivElement
// const biGreen = new CssClass('biGreen')

// biGreen.setStyle("color", "violet")
// biGreen.setStyle("color", "darkgreen")
// biGreen.setStyle("font-size", "24px")
// biGreen.setStyle("font-family", "Roboto")
// biGreen.setStyle("margin", "7px")

// console.log(biGreen.getCss())

// const wrClass = new CssClass('wrap')
// wrClass.setStyle("display", "flex")

// const blockClass = new CssClass('block')
// blockClass.setStyle("width", "300px")
// blockClass.setStyle("margin", "7px")

// const imgClass = new CssClass('img')
// imgClass.setStyle("width", "100%")
// imgClass.setStyle("color", "darkblue")

// const textClass = new CssClass('text')
// textClass.setStyle("text-aligin", "center")

// const block = new HTMLBlock([wrClass, blockClass, imgClass, textClass], wrapper)

// docCss.innerHTML += biGreen.getCss()
// docDiv.innerHTML = wrapper.gethtml()

// const blockCode = block.getCode()

// docCss.innerHTML += blockCode.style
// docDiv.innerHTML = blockCode.html




// class HtmlBlock {
//     styles = [] as CssClass[]
//     element: HtmlElement
//     constructor(styles: CssClass[], element: HtmlElement) {
//         this.styles = styles
//         this.element = element
//     }
//     getCode() {
//         return {
//             styles: this.styles.map(el => el.getCss()).join('\n'),
//             html: this.element.getHtml()
//         }
//     }
// }
// const docCss = document.getElementById('st') as HTMLDivElement
// const bigGreen = new CssClass('bigGreen')
// const docDiv = document.getElementById('he') as HTMLDivElement
// bigGreen.setStyle("color", "pink")
// bigGreen.setStyle("color", "white")
// bigGreen.setStyle("font-size", "40px")
// bigGreen.setStyle("font-family", "Times New Roman")
// console.log(bigGreen.getCss())
// bigGreen.removeProperty("font-family")
// bigGreen.removeProperty("color")

// const wrapClass = new CssClass('wrap')
// wrapClass.setStyle("display", "flex")

// const blockClass = new CssClass('block')
// blockClass.setStyle("width", "300px")
// blockClass.setStyle("margin", "10px")

// const imgClass = new CssClass('img')
// imgClass.setStyle("width", "100%")
// imgClass.setStyle("color", "blueviolet")

// const textClass = new CssClass('text')
// textClass.setStyle("text-align", "justify")

// const block = new HtmlBlock([wrapClass, blockClass, imgClass, textClass], wrapper)

// docCss.innerHTML += bigGreen.getCss()
// docDiv.innerHTML = wrapper.getHtml()
// const blockCode = block.getCode()
// docCss.innerHTML += blockCode.styles
// docDiv.innerHTML = blockCode.html

 // const block = new HtmlBlock([bigGreen,], wrapper)
// docCss.innerHTML += bigGreen.getCss()
// docDiv.innerHTML = wrapper.getHtml()
 //! ------------------------------------------------------------------------------------------------------------------------

//! Даты
// getFullYear()
  // Получить год(4 цифры)
  // getMonth()
  // Получить месяц, от 0 до 11.
  // getDate()
  // Получить день месяца, от 1 до 31, что несколько противоречит названию метода.
  // getHours(), getMinutes(), getSeconds(), getMilliseconds()
  // Получить, соответственно, часы, минуты, секунды или миллисекунды.
  // getDay()
  // Вернуть день недели от 0(воскресенье) до 6(суббота).Несмотря на то, что в ряде стран за первый день недели принят понедельник, 
  //   в JavaScript начало недели приходится на воскресенье.

  // setFullYear(year, [month], [date])
  // setMonth(month, [date])
  // setDate(date)
  // setHours(hour, [min], [sec], [ms])
  // setMinutes(min, [sec], [ms])
  // setSeconds(sec, [ms])
  // setMilliseconds(ms)
  // setTime(milliseconds)

  //* Задание 1.
 //Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

 //* Задание 2.
  //Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

//* Задание 3. 
//В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2)
// и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

//* Задание 4.
//Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

//* Задание 5.
//Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца.
//Иногда это 30, 31 или даже февральские 28/29.

//* Задание 6.
//Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

//* Задание 7.
//Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

//* Задание 8.
//Напишите функцию formatDate(date), форматирующую date по следующему принципу:
//Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
//В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
//В противном случае, если меньше часа, вывести "m мин. назад".
//В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

//! ------------------------------------------------------------------------------------------------------------------------


//TODO Домашка 2.5

//* Задание 1.
// Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
//■ поле, которое хранит цвет маркера;
//■ поле, которое хранит количество чернил в маркере (в процентах);
//■ метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех
//пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
//Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для 
//заправки маркера. Продемонстрировать работу написанных методов.

//* Задание 2.
// Реализуйте класс ExtendedDate, унаследовав его от стандартного класса Date и добавив следующие возможности:
//■ метод для вывода даты (числа и месяца) текстом;
//■ метод для проверки – это прошедшая дата или будущая
//(если прошедшая, то метод возвращает false; если будущая или текущая, то true);
//■ метод для проверки – високосный год или нет;
//■ метод, возвращающий следующую дату.
//Создайте объект класса ExtendedDate и выведите на экран результаты работы новых методов.

//* Задание 3.
// Реализовать класс Employee, описывающий работника, и создать массив работников банка.
//Реализовать класс EmpTable для генерации html кода таблицы со списком работников банка. Массив работников необходимо
//передавать через конструктор, а получать html код с помощью метода getHtml().
//Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().


//* Задание 4.
// Реализовать класс StyledEmpTable, который наследуется от класса EmpTable. Добавить метод getStyles(), который возвращает
//строку со стилями для таблицы в тегах style. Переопределить метод getHtml(), который добавляет стили к тому, что возвращает
// метод getHtml() из родительского класса. Создать объект класса StyledEmpTable и вывести на экран
//результат работы метода getHtml().


//! ------------------------------------------------------------------------------------------------------------------------

//TODO Изменение документа.

//* Задание 1.
//Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

function clear(elem: any) {
    elem.innerHTML = ''

    clear(elem)
}
console.log(clear)

//* Задание 2.
// Напишите интерфейс для создания списка.
// Для каждого пункта
// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
// Все элементы должны создаваться динамически.
// Если пользователь вводит HTML-теги, они должны обрабатываться как текст.

{
    const input = document.querySelector('#ToDo input') as HTMLInputElement
    const button = document.querySelector('#ToDo button') as HTMLButtonElement
    const list = document.querySelector('#ToDo ul') as HTMLUListElement
    
    console.log(input, button, list)
    button.addEventListener('click', () => {
        console.log('click')
        list.insertAdjacentHTML('beforeend', `<li>${input.value.trim()}</li>`)
        // if(list.lastElementChild) list.lastElementChild.textContent = input.value.trim()
        // const li = document.createElement('li')
        // li.textContent = input.value.trim()
        // list.append(li)
        input.value = ''
        input.focus()
    })
}


//* Задание 3.
// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

// Например:

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
} as Record<string, any>

let container = document.querySelector('#container ul') as HTMLUListElement

function createTree(container: HTMLUListElement, data: Record<string,any>) {
    for(let key in data) {
        if(Object.keys(data[key]).length) {
            const li = document.createElement('li')
            li.innerHTML =`${key}<ul></ul>`
            container.append(li)
            const ul = li.querySelector('ul') as HTMLUListElement
            createTree(ul, data[key])
        } else {
            container.insertAdjacentHTML('beforeend', `<li>${key}</li>`)
        }
    }
}

createTree(container, data)
console.log(data)


//* Задание 4.
// Выведите список потомков в дереве
// Есть дерево, организованное в виде вложенных списков ul/li.
// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.


data = {
    "Животные": {
      "Млекопитающие": {
        "Коровы": {},
        "Ослы": {},
        "Собаки": {},
        "Тигры": {}
      },
      "Другие": {
        "Змеи": {},
        "Птицы": {},
        "Ящерицы": {}
      }
    },
    "Рыбы": {
      "Аквариумные": {
        "Гуппи": {},
        "Скалярии": {}
      },
      "Морские": {
        "Морская форель": {}
      }
    }
   } as Record<string, any>

   container = document.querySelector('#animals ul') as HTMLUListElement

   function countObj(data: any): number {
    let sum = 0 
    for(let key in data) {
        if(Object.keys(data[key]).length) {
            sum += countObj(data[key])
        } else {
            sum++
        }
    }
    return sum
   }

   function createAnimal(container: HTMLUListElement, data: Record<string,any>) {
    for(let key in data) {
        if(Object.keys(data[key]).length) {
            const li = document.createElement('li')
            const count = countObj(data[key])
            li.innerHTML = `${key} [${count}]<ul></ul>`
            container.append(li)
            const ul = li.querySelector('ul') as HTMLUListElement
            createAnimal(ul,data[key])
        } else {
            container.insertAdjacentHTML('beforeend', `<li>${key}</li>`)
        }
    }
   }

   createAnimal(container, data)
   const descendants = document.querySelectorAll('#animals li') as NodeListOf<HTMLLIElement>
   console.log(descendants.length)
   for(let li of descendants) {
    const descendantsCount = li.querySelectorAll('li').length
    if (!descendants) continue
    li.firstChild!.textContent = li.firstChild!.textContent + '[' + descendantsCount + ']'
   }
   
//* Задание 6.
// Напишите функцию createCalendar(elem, year, month).
// Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.
// Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>.
// У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, первым днём недели должен быть понедельник.
// Например, createCalendar(cal, 2012, 9) сгенерирует в cal следующий календарь:

{
    let tableElem = document.getElementById('calendar') as HTMLTableElement
    function createCalendar(elem: any, year: number, month: number) {
      let mon = month - 1 // месяцы в JS идут от 0 до 11, а не от 1 до 12
      let d = new Date(year, mon)
      let table = '<p style ="color: white;">Календарь!!!</p><table style="border: 1px; border-color: black; border-style: solid;"><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>'
      for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>'
      }
      while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>'
  
        if (getDay(d) % 7 == 6) {
          table += '</tr><tr>'
        }
  
        d.setDate(d.getDate() + 1);
      }
      if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
          table += '<td></td>'
        }
      }
      table += '</tr></table>'
      elem.innerHTML = table
    }
    function getDay(date: Date) {
      let day = date.getDay()
      if (day == 0) day = 7 
      return day - 1
    }
    createCalendar(tableElem, 2024, 6)
  }


// {
//     let table = document.getElementById('calendar') as HTMLTableElement

// function createCalendar(elem: any, year: number, month: number) {
//     let mon = month - 1
//     let date = new Date(year,month)
//     let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>'

//     for(let i = 0; i < getDay(date); i++) {
//         table += '<td></td>'
//     }

//     while(date.getMonth() == mon) {
//     table += '<td>' + date.getDate() +'</td>'

//      if (getDay(date) % 7 == 6) {
//         table += '<tr></tr>'
//      }

//      date.setDate(date.getDate() + 1)
//     }

//     if (getDay(date) != 0) {
//         for(let i = getDay(date); i < 7; i++) {
//             table += '<td></td>'
//         }
//     }

//     table += '</tr></table>'
//     elem.innerHTML = table 
// }

// function getDay(date: Date) {
//     let day = Date.getDay()
//     if (day == 0) day = 7
//     return day - 1
// }
// createCalendar(table, 2024, 6)

// }

//* Задание 7.
// Создайте цветные часы
const clock = document.getElementById('clock') as HTMLDivElement
const buttonStart = document.getElementById('start') as HTMLButtonElement
const buttonEnd = document.getElementById('end') as HTMLButtonElement
function newDate() {
  let date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  clock.children[0].innerHTML = hours.toString().padStart(2, '0')
  clock.children[1].innerHTML = minutes.toString().padStart(2, '0')
  clock.children[2].innerHTML = seconds.toString().padStart(2, '0')
}
let timer = setInterval(newDate, 1000)
buttonStart.onclick = function clockStart() {
  clearInterval(timer)
  timer = setInterval(newDate, 1000)
}
buttonEnd.onclick = function clockStop() {
  clearInterval(timer)
}
//* Задание 8.
// Вставьте HTML в список
// Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:
// <ul id="ul">
//   <li id="one">1</li>
//   <li id="two">4</li>
// </ul>

//* Задание 9.
// Сортировка таблицы

// Вот таблица:

// <table>
// <thead>
//   <tr>
//     <th>Name</th><th>Surname</th><th>Age</th>
//   </tr>
// </thead>

// <tbody>
//   <tr>
//     <td>John</td><td>Smith</td><td>10</td>
//   </tr>
//   <tr>
//     <td>Pete</td><td>Brown</td><td>15</td>
//   </tr>
//   <tr>
//     <td>Ann</td><td>Lee</td><td>5</td>
//   </tr>
//   <tr>
//     <td>...</td><td>...</td><td>...</td>
//   </tr>
// </tbody>
// </table>
// В ней может быть больше строк.

// Напишите код для сортировки по столбцу "name".

//! ------------------------------------------------------------------------------------------------------------------------


//* Задание 1.
// Поймайте переход по ссылке
// Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" 
// пользователю выводился вопрос о том, действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.

  
  //Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.
//   let elem = document.querySelector('[data-widget-name]')
//   console.log(elem?.getAttribute('data-widget-name'))
  
  //Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.
  // найти все ссылки, атрибут href у которых содержит :// и при этом href не начинается с http://internal.com
  
//   let selector = 'a[href*="://"]:not([href^="http://internal.com"])'
//   let links = document.querySelectorAll(selector) as NodeListOf<HTMLAnchorElement>
//   links.forEach(link => link.style.color = 'orange')
  
  
  // добавление класса
  //document.body.classList.add('article')

//! ------------------------------------------------------------------------------------------------------------------------

// Отследить одновременное нажатие

// Создайте функцию runOnKeys(func, code1, code2, ... code_n), которая запускает func при одновременном нажатии клавиш с кодами code1, code2, …, code_n.

// Например, код ниже выведет alertпри одновременном нажатии клавиш "Q" и "W" (в любом регистре, в любой раскладке)

// runOnKeys(
//     () => alert("Привет!"),
//     "KeyQ",
//     "KeyW"
//   );

//! ------------------------------------------------------------------------------------------------------------------------

//TODO Прокрутка мыши. Практика.

//* Задание 1.
// Создайте бесконечную страницу. Когда посетитель прокручивает её до конца, 
// она автоматически добавляет текущие время и дату в текст (чтобы посетитель мог прокрутить ещё).

//* Задание 2.
// Создайте кнопку «наверх», чтобы помочь с прокруткой страницы.
// Она должна работать следующим образом:
// Пока страница не прокручена вниз хотя бы на высоту окна – кнопка невидима.
// Когда страница прокручена вниз больше, чем на высоту окна – появляется стрелка «наверх» в левом верхнем углу. Если страница прокручивается назад, стрелка исчезает.
// Когда нажимается стрелка, страница прокручивается вверх.

//* Задание 3.
// Допустим, у нас есть клиент с низкой скоростью соединения, и мы хотим сэкономить его трафик.

// Для этого мы решили не показывать изображения сразу, а заменять их на «макеты», как тут:

// <img src="placeholder.svg" width="128" height="128" data-src="real.jpg">

// То есть, изначально, все изображения – placeholder.svg. Когда страница прокручивается до того положения, 
// где пользователь может увидеть изображение – мы меняем src на значение из data-src, и таким образом изображение загружается.

// Требования:

// При загрузке страницы те изображения, которые уже видимы, должны загружаться сразу же, не ожидая прокрутки.
// Некоторые изображения могут быть обычными, без data-src. Код не должен касаться их.
// Если изображение один раз загрузилось, оно не должно больше перезагружаться при прокрутке.
// P.S. Если можете, реализуйте более продвинутое решение, которое будет загружать изображения на одну страницу ниже/после текущей позиции.

// P.P.S. Достаточно обрабатывать вертикальную прокрутку, горизонтальную не требуется.