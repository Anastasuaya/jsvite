import './style.css'
import './style.scss'
console.log('Hello world')
document.write('<div id="main" style="background: lightblue;">dfgdfgdf</div>')

a = 25

var a = 0
console.log(a)
var a = 2
console.log(a)

// cоздание переменной
let newVar = 5
newVar = 15

let noVal
noVal = 'g'
console.log(noVal)

// let theValue

// cоздание константы
// const DAY_IN_WEEK = 7
// Ошибка не можем изменять константы
// DAY_IN_WEEK = 8

// const countedSum = a + newVar

console.log('10 + 5 =', 10+5)
console.log('10 - 5 =', 10-5)
console.log('10 * 5 =', 10*5)
console.log('10 / 5 =', 10/5)
console.log('10 ** 5 =', 10**5) //возведение в степень
console.log('10 % 5 =', 10%5)   //остаток от деления
console.log('3 % 2 =', 3%2)   //остаток от деления

// let userInput = prompt('Введите число', 10)
// console.log(userInput)
// console.log(typeof userInput)
// userInput = parseInt(userInput)
// console.log(userInput)
// console.log(typeof userInput)


console.log('456')
console.log(456)

console.log((5-5%2)/2)

// alert('Вы ввели ' + userInput)


// Практика 1. Задание 1
// Запросите у пользователя число, возведите это число во 2 - ю степень и выведите на экран.
// let num = parseInt(prompt('Введите число',4))
// alert ('Ваше число, возведённое во 2 степень' + num**2)

console.log(typeof 12)
console.log(typeof 12.6)
console.log(typeof (12.6/0))
console.log(typeof 12n)
console.log(12.6/0)
console.log(parseInt('a'))
console.log(parseInt('12.5adasd'))
console.log(parseFloat('12.5adasd'))
console.log(+'12.5adasd')
console.log(+'12.5')
console.log(Number('12.5'))
console.log(String(12.5))
console.log(12.5.toString())
console.log(typeof '12')
console.log(typeof true)
console.log(typeof false)
console.log(typeof [])
console.log(typeof {})
console.log(typeof undefined)
let variable
console.log(variable)
console.log(null)
console.log(typeof null)
console.log(typeof alert)
console.log(typeof '')
console.log(`В этой строке мы сложим 2 числа ${newVar + 5}. Вот так`)
console.log('В этой строке мы сложим 2 числа ' + (newVar+5) + '. Вот так')

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

let num1 = 1
let num2 = 2
console.log(2 > 1)
console.log(num1 == num2)
console.log(num1 != num2)
console.log(num1 != 1)
console.log(num1 == 1)
console.log(num1 === 1)
console.log(1 === +'1')

console.log(+false)
console.log(+true)

// Все значения, которы станут false при преобразовании в булев тип
console.log(Boolean(''))
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))
console.log(Boolean(false))

console.log('z' > 'Z')

console.log(null === undefined)
console.log(null == undefined)
console.log(null == null)

console.log(isNaN(NaN))
console.log(isNaN(1))

// Операторы сравнения возвращают значения логического типа.
// Строки сравниваются посимвольно в лексикографическом порядке.
// Значения разных типов при сравнении приводятся к числу.Исключением является сравнение с помощью операторов строгого равенства / неравенства.
// Значения null и undefined равны == друг другу и не равны любому другому значению.
// Будьте осторожны при использовании операторов сравнений вроде > и < с переменными, которые могут принимать значения null / undefined.Хорошей идеей будет сделать отдельную проверку на null / undefined.

let year = 2015
let month = 1

if (year == 2015) {
  console.log('yes')
}

if (year==2015) {
  console.log('yes')
} else {
  if (month==1) {
    console.log('mo==1')
  }
  console.log('no')
}

if (year==2015) {
  console.log('yes')
} else if (year==2010) {
  console.log('maybe')
} else {
  console.log('no')
}

let age = 18
let message
if (age>16) {
  message='hello'
} else {
  message='too yang'
}
console.log(message)


// переменная = (условие) ? Значение, которое присвоится в случае истинности условия : Значение, которое присвоится в случае ложности условия
message = age > 16 ? 'hello' : 'too yang'

message = (age < 3) ? 'Здравствуй, малыш!' :
          (age < 18) ? 'Привет!' :
          (age < 100) ? 'Здравствуйте!' : 'Какой необычный возраст!'

if (age<3) {
  message = 'Здравствуй, малыш!'
} else {
  if (age < 18) {
    message = 'Привет!'
  } else {
    if (age < 100) {
      message = 'Здравствуйте!'
    } else {
      message = 'Какой необычный возраст!'
    }
  }
}

const isThursday = new Date().getDate() == 22 ? true : false
console.log(isThursday)

alert(null || 2 & 3 || 4)