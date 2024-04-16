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

console.log('Площадь квадрата равна' , numb * numb)

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

console.log('До следующего дня осталось' , HoursTomorrow , 'часов' , MinutesTomorrow , 'минут')


// Практика 1. Задание 8
// Запросите у пользователя трехзначное число и выведите
// вторую цифру этого числа. Для решения задачи используйте
// оператор % (остаток от деления).

let nuum = 398

let Result = (nuum/10) % 10

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

 } else if (Age1 >=19 && Age1 <=60) {
    console.log('Вы взрослый')
    
 } else if (Age1 < 0) {
    console.log('Вы еще не родились')

 } else console.log('Вы пенсионер')

//* Задание 2
// Запросить у пользователя число от 0 до 9 и вывести ему
// спецсимвол, который расположен на этой клавише (1–!,
// 2–@, 3–# и т. д).

let WhenClick = '8'

switch(WhenClick) {
    
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

console.log(num4/100 % 10)

if ((num4/100 % 10) == (num4/10 % 10) ||
   (num4/100 % 10) == num4 % 10 ||
   (num4/10 % 10) == num4 %  10)
   console.log(num4 , 'Одинаковые цифры есть')

//* Задание 4
// Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100

let year = 2024
let day_in_year = 0

if ( year % 4 == 0 && year % 100 == 0 && year % 400 == 0 ||
    (year % 4 == 0 && year % 100 != 0 && year % 400 != 0)) {
        day_in_year = 366

        console.log('Год високосный')
    } else {
        day_in_year = 365

        console.log('Год не високосный')
    }

//* Задание 5
// Запросить у пользователя пятиразрядное число и опреде-
// лить, является ли оно палиндромом.

let num5 = 121

let num6 = (num5 % 10) * 100 + ((num5/ 10) % 10) * 10 + (num5/100) % 10

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
        if(Youday >= 1 && Youday <= 29)
            Youday ++
    } else if(Youday == 30) {
        Youday = 1
        Youmonths ++
    } else {
        console.log('Введите существующую дату')
    }
} else if (Youmonths == 2)
// Если февраль

// Если февраль в високосный год
if (Youyear % 4 == 0 && Youyear % 100 == 0 && Youyear % 400 == 0 ||
    (Youyear % 4 == 0 && Youyear % 100 != 0 && Youyear % 400 != 0)) {

        if (Youday >= 1 && Youday <= 28) {
            Youday ++
    } else if (Youday == 1) {

        Youday = 1
        Youmonths ++ 
    } else {
        console.log('Введите существующую дату')
    }
    // Если февраль не високосный
} else {
    if (Youday >= 1 && Youday <= 27) {
        Youday ++
    } else if (Youday == 28) {
        Youday = 1
        Youmonths ++
    } else {
        console.log('Введите существующую дату')
    }
// Если декабрь, то переход на следующий год    
} else if (Youmonths == 12) {
    if (Youday >= 1 && Youday <= 30) {
        Youday ++
    } else if (Youday == 31) {

        Youday = 1
        Youmonths = 1
        Youyear ++    
    } else {
        console.log('Введите существующую дату')
    }

    // Если в месяце 31 день
} else {
    if(Youday >= 1 && Youday <= 30) {
        Youday ++
    } else if (Youday == 31) {
        Youday = 1
        Youmonths ++
    } else {
        console.log('Введите существующую дату')
    }

} 

console.log(Youday , Youmonths , Youyear)


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
} while (num< 6);

console.log(num)

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

for (i = 1; i <=n; i++) {
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

    !(n1 % 2) ? (OddNumber += 1) : (EvenNumber +=1)
}
console.log(`Положительных чисел оказалось ${PozNumber}`, `Отрицательных чисел оказалось ${NegNumber}` ,
    `Нулей оказалось ${NullNumber}` , `Четных чисел оказалось ${OddNumber}` , `Нечетных чисел оказалось ${EvenNumber}`
)

//* Задание 6
// Зациклить калькулятор. Запросить у пользователя 2 числа
// и знак, решить пример, вывести результат и спросить, хо-
// чет ли он решить еще один пример. И так до тех пор, пока
// пользователь не откажется.


//? do {
// ?   let number11 = parseInt(prompt('Введите первое число') as string)
//  ?  let number20 =  parseInt(prompt('Введите второе число') as string)
//   ? let operatorr =  (prompt('Введите знак + , - , / , *') as string)

// ?    switch (operatorr) {

//  ?       case '+':

//   ?          alert (number11 + number20)
//    ?         break
    
//     ?    case '-':
//      ?        alert (number11 - number20)
//   ?      break
    
//    ?     case '/':
//     ?        alert (number11 / number20)
//      ?       break
    
//   ?  case '*':
//    ?         alert (number11 * number20)
//     ?        break
    
//      ?   default:
//       ?      break
//  ?   }
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

// TODO Практика 1.4. в процессе

// Практика 4. Задание 1
// Написать функцию, которая принимает 2 числа и возвращает меньшее из них.

function min(a: number, b: number): number  {
    return a < b ? a : b;
}

console.log(min(101 , 100))


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

// TODO Домашка 1.5. В процессе

//* Задание 1
// Написать функцию возведения числа в степень.

function NumberToPow (n: number , x: number): number {
    if(X == 1) {
        return n
    } else {
        return  pow(n , x - 1)
    }
}

console.log(NumberToPow(4 , 3))

//* Задание 2
// Написать функцию поиска наибольшего общего делителя.

function Nod(x: number , y: number): number {
    if(y % x == 0) {
        return x
    } else {
        x > y ? x %= y : y %= x
        x += y
    } return y
}

console.log(Nod(2 , 12))

//* Задание 3
// Написать функцию для поиска максимальной цифры в числе.

function MaxNumber(num: number): number {
    if(num == 0) {
        return 0
    } else {
        return Math.max(num % 10 , MaxNumber(Math.floor(num / 10)))
    }
}

console.log(MaxNumber(198))

//* Задание 4
// Написать функцию, которая определяет простое ли пере-
// данное число.

function SimpleNumber(num: number) {
    if(num % 2 !== 0) {
        return true
    } else(num % 2 == 0 )
        return false
    
}

console.log(SimpleNumber(24))

//* Задание 5
// Написать функцию для вывода всех множителей передан-
// ного числа в возрастающем порядке.
// Например: число 18 – множители 2 * 3 * 3

function OutpitOfMult(num: number): string {
    if(num == 1) {
        return ''
    }
    for(i == 2; i <= num; i++) {
        if(num % i == 0) {
            return (' ' + i + ' ' + OutpitOfMult(num / i)).trim().replace(/\ /g , '*')
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


// Практика 2.2

// Задание 1
// Создать массив из 10 случайных чисел и написать несколько
// функций для работы с ним.

const arr1: number[] = [0, 4, 6, 5, 8, 5, 3, 3, 8, 0]
const arr2: number[] = [5, 8, 1, 9, 3]

function fillArrayRandomNumbers(arr: number[], length: number) {
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 10))
    }
}

fillArrayRandomNumbers(arr1, 10)
fillArrayRandomNumbers(arr2, 5)


console.log(arr1)
console.log(arr2)
console.log(arr2.includes(0))


//TODO Домашка 2.1 

//* Задание 1
// Создать объект, описывающий автомобиль (производитель,
// модель, год выпуска, средняя скорость), и следующие функции
// для работы с этим объектом.

// 1. Функция для вывода на экран информации об автомобиле.

// 2. Функция для подсчета необходимого времени для пре-
// одоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необхо-
// димо делать перерыв на 1 час.

//* Задание 2
// Создать объект, хранящий в себе отдельно числитель и зна-
// менатель дроби, и следующие функции для работы с этим объ-
// ектом.

// 1. Функция сложения 2-х объектов-дробей.

// 2. Функция вычитания 2-х объектов-дробей.

// 3. Функция умножения 2-х объектов-дробей.

// 4. Функция деления 2-х объектов-дробей.

// 5. Функция сокращения объекта-дроби.

//* Задание 3
// Создать объект, описывающий время (часы, минуты, секун-
// ды), и следующие функции для работы с этим объектом.

// 1. Функция вывода времени на экран.

// 2. Функция изменения времени на переданное количество
// секунд.

// 3. Функция изменения времени на переданное количество
// минут.

// 4. Функция изменения времени на переданное количество
// часов.

// Учтите, что в последних 3-х функциях, при изменении одной
// части времени, может измениться и другая. Например: если ко
// времени «20:30:45» добавить 30 секунд, то должно получиться
// «20:31:15», а не «20:30:75».



//! ------------------------------------------------------------------------------------------------------------------------
//! Практика массивы!!!!

// 1.1.  Написать функцию возвращающую массив целых чисел от 0 до 10

const arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function Array(arr: number[]) {
    return { arr }
}
console.log(Array(arr))

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

// *Есть массив объектов

// const employees = [
//     { name: 'Федотова Арина Глебовна', department: 'ads', salary: 2100 },
//     { name: 'Голикова Мария Филипповна', department: 'prog', salary: 3500 },
//     { name: 'Панин Александр Германович', department: 'ads', salary: 2100 },
//     { name: 'Романов Эмиль Макарович', department: 'prog', salary: 3100 },
//     { name: 'Смирнов Никита Александрович', department: 'prog', salary: 3800 },
//     { name: 'Александрова Майя Вячеславовна', department: 'prog', salary: 4500 },
//     { name: 'Крылов Богдан Максимович', department: 'disign', salary: 2100 },
//     { name: 'Мухина Айша Константиновна', department: 'disign', salary: 2100 },
//   ]

//* Все функции вызывать несколько раз с разными параметрами

// //* 2.1. Создать функцию, принимающую массив работников, и возвращающую массив уникальных отделов (department)

// function sortEmpl(arr, key: 'name' | 'department' | ' salary') {
//     return (arr, key)
// }


// deps.includes
//? [ads, prog, disign]
// 2.2. Написать функцию, принимающую массив работников и ключ объекта, по которому сделать сортировку массива
// Учесть, что строковые параметры сортируются при помощи метода localeCompare, а числовые,- вычитанием
// 2.3. Написать функцию, аналогичную описанной в задании 2.2., но сортирующую в обратном порядке
// 2.4. Написать функцию, принимающую массив работников и имя, и возвращающую объект сотрудника или undefined
// 2.5. Написать функцию, принимающую массив работников и название отдела, и возвращающую новый массив, содержащий только сотрудников переданного отдела
// 2.6. Написать функцию, принимающую массив работников и возвращающую сумму зарплат. Вызвать функцию по каждому отделу и по общему массиву


//* Все функции вызывать несколько раз с разными параметрами
// 3.1. Создать функцию, принимающую массив работников, и возвращающую массив уникальных отделов (department)
// 3.2. Написать функцию, принимающую массив работников и ключ объекта, по которому сделать сортировку массива
// Учесть, что строковые параметры сортируются при помощи метода localeCompare, а числовые,- вычитанием
// 3.3. Написать функцию, аналогичную описанной в задании 2.2., но сортирующую в обратном порядке
// 3.4. Написать функцию, принимающую массив работников и имя, и возвращающую объект сотрудника или undefined
// 3.5. Написать функцию, принимающую массив работников и название отдела, и возвращающую новый массив, содержащий только сотрудников переданного отдела
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

//TODO Практика 2.2

//* Задание 1
// Создать массив из 10 случайных чисел и написать несколько
// функций для работы с ним.

// 1. Функция принимает массив и выводит его на экран.

// 2. Функция принимает массив и выводит только четные
// элементы.

// 3. Функция принимает массив и возвращает сумму всех
// элементов массива.

// 4. Функция принимает массив и возвращает его максималь-
// ный элемент.

// 5. Функция добавления нового элемента в массив по ука-
// занному индексу.

// 6. Функция удаления элемента из массива по указанному
// индексу.

//* Задание 2
// Создать еще один массив из 5 случайных чисел и написать
// следующие функции.

// 1. Функция принимает 2 массива и возвращает новый мас-
// сив, в котором собраны все элементы из двух массивов
// без повторений.

// 2. Функция принимает 2 массива и возвращает новый массив,
// в котором собраны общие элементы (то есть элементы,
// которые встречаются и в первом и во втором массивах)
// без повторений.

// 3. Функция принимает 2 массива и возвращает новый мас-
// сив, в котором собраны все элементы из первого массива,
// которых нет во втором массиве.

//* Задание 3
// Создать массив фруктов и отсортировать его по алфавиту.
// Написать следующие функции.

// 1. Вывод на экран с помощью document.write() в виде списка
// (с помощью тегов ul и li).

// 2. Поиск фрукта в массиве. Функция принимает название
// фрукта и возвращает индекс найденного элемента или -1,
// если не найден. Поиск должен быть нерегистрозависимым.

//TODO Домашка 2.2

//* Задание 1
// Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта, необ-
// ходимое количество и куплен или нет. Написать несколько функ-
// ций для работы с таким массивом.

// 1. Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные.

// 2. Добавление покупки в список. Учтите, что при добавлении
// покупки с уже существующим в списке продуктом, необ-
// ходимо увеличивать количество в существующей покупке,
// а не добавлять новую.

// 3. Покупка продукта. Функция принимает название продукта
// и отмечает его как купленный.

//* Задание 2
// Создать массив, описывающий чек в магазине. Каждый эле-
// мент массива состоит из названия товара, количества и цены за
// единицу товара. Написать следующие функции.

// 1. Распечатка чека на экран.

// 2. Подсчет общей суммы покупки.

// 3. Получение самой дорогой покупки в чеке.

// 4. Подсчет средней стоимости одного товара в чеке.


//* Задание 3
// Создать массив css-стилей (цвет, размер шрифта, выравнива-
//     ние, подчеркивание и т. д.). Каждый элемент массива – это объ-
//     ект, состоящий из двух свойств: название стиля и значение стиля.
//     Написать функцию, которая принимает массив стилей и
//     текст, и выводит этот текст с помощью document.write() в тегах
//     <p></p>, добавив в открывающий тег атрибут style со всеми сти-
//     лями, перечисленными в массиве.


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

console.log( 0.1 + 0.2 )

let str10 = '';

for (let i = 128513; i <= 128613; i++) {
  str10 += String.fromCodePoint(i);
}

console.log(str10)

//! ------------------------------------------------------------------------------------------------------------------------


// TODO Практика 2.3

//* Задание 1
// Написать функцию, которая принимает 2 строки и срав-
// нивает их длину. Функция возвращает 1, если в первой
// строке больше символов, чем во второй; -1 – если во вто-
// рой больше символов, чем в первой; или 0 – если строки
// одинаковой длины.

let str 

//* Задание 2
// Написать функцию, которая переводит в верхний регистр
// первый символ переданной строки.

//* Задание 3
// Написать функцию, которая считает количество гласных
// букв в переданной строке.

//* Задание 4
// Написать функцию для проверки спама в переданной
// строке. Функция возвращает true, если строка содержит
// спам. Спамом считать следующие слова: 100% бесплатно,
// увеличение продаж, только сегодня, не удаляйте, ххх.
// Функция должна быть нечувствительна к регистру.

//* Задание 5
// Написать функцию сокращения строки. Функция прини-
// мает строку и ее максимальную длину. Если длина строки
// больше, чем максимальная, то необходимо отбросить
// лишние символы, добавив вместо них троеточие.
// Например: truncate(“Hello, world!”, 8) должна вернуть
// “Hello...”.

//* Задание 6
// Написать функцию, которая проверяет, является ли пере-
// данная строка палиндромом.

//* Задание 7
// Написать функцию, которая считает количество слов в
// предложении.

//* Задание 8
// Написать функцию, которая возвращает самое длинное
// слово из предложения.

//* Задание 9
// Написать функцию, которая считает среднюю длину слова
// в предложении.

//* Задание 10
// Написать функцию, которая принимает строку и символ
// и выводит индексы, по которым находится этот символ в
// строке. Также вывести, сколько всего раз встречается этот
// символ в строке.


//TODO Домашка 2.3

//* Задание 1
// Написать функцию, которая принимает строку и выводит
// статистику о ней: количество букв, количество цифр и
// количество других знаков.


//* Задание 2
// Написать функцию, которая принимает двузначное число
// и возвращает его в текстовом виде.
// Например: 35 – тридцать пять, 89 – восемьдесят девять,
// 12 – двенадцать.


//* Задание 3
// Написать функцию, которая заменяет в полученной строке
// большие буквы на маленькие, маленькие – на большие, а
// цифры – на знак нижнего подчеркивания.


//* Задание 4
// Написать функцию, которая преобразует названия css-
// стилей с дефисом в название в СamelСase стиле: font-size
// в fontSize, background-color в backgroundColor, text-
// align в textAlign.


//* Задание 5
// Написать функцию, которая принимает словосочетание
// и превращает его в аббревиатуру.
// Например: cascading style sheets в CSS, объектно-
// ориентированное программирование в ООП.


//* Задание 6
// Написать функцию, которая принимает любое коли-
// чество строк, объединяет их в одну длинную строку и
// возвращает ее.


//* Задание 7
// Написать функцию – калькулятор. Функция принимает
// строку с примером, определяет, какое действие необходимо
// выполнить (+ - * /), переводит операнды в числа, решает
// пример и возвращает результат.


//* Задание 8
// Написать функцию, которая получает url и выводит под-
// робную информацию о нем.
// Например: url “https://itstep.org/ua/about”, информация
// “протокол: https, домен: itstep.org, путь: /ua/about”.


//* Задание 9
// Написать функцию, которая принимает строку и раздели-
// тель и возвращает массив подстрок, разбитых с помощью
// указанного разделителя.
// Например: строка “10/08/2020”, разделитель “/”, результат:
// “10”, “08”, “2020”.


//* Задание 10
// Написать функцию вывода текста по заданному шаблону.
// Функция принимает первым параметром шаблон, в тексте
// которого может использоваться %, после символа % ука-
// зывается индекс входного параметра. При выводе вместо
// %индекс необходимо вывести значение соответствующего
// входного параметра.
// Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10,
// 8, 2020) должна вывести “Today is Monday 10.8.2020”.