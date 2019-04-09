//  Типы данных

var a = 1; // Числовое значение
var string = 'Hello' // Строчное значение
var sym = Symbol(); // Символьное значение 
var boolean = true; // Логическое значение
null; // То, чего не существует 
undefined; // То, что существует, но не имеет значения
var obj = {}; // Коллекция данных 
// Тот самый объект
// первый способ вывода объекта
let person = {
    name: "John",
    age: 25,
    isMarried: false 
}

console.log(person.name);

// второй способ вывода объекта
let arr = ['apple.png', 'green.jpg', 'gri.bnd'];

console.log(arr[2]);

// Общение с пользователем

//alert('Hello world!');

// let answer = confirm('Are you here?');

// console.log(answer);

// let answer = prompt('Есть ли вам 18?', '');

console.log(typeof(arr));
