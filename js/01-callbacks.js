/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называется
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

// const fnA = function (message, callback) {//в параметр callback записалась ссылка на функцию fnB
//     console.log(message);

//     console.log(callback);
//     callback(100);//тут вызываем функцию (const fnB)
// };

// const fnB = function (number) {  //обьявили функцию
//     console.log('Это лог при вызове fnB', number);
// };

// fnA('qweqwe', fnB);//тут эта функция (fnB) как аргумент функции fnA

/*
 * функция doMath(a, b, callback)
 */

const doMath = function (a, b, callback) {//записываем функцию doMath(2, 3, function (x, y) в параметр callback
    const result = callback(a, b); //вызываем callback

    console.log(result); //консолим результат
};

// doMath(2, 3, function (x, y) {//записываем третий аргумент функции в виде функции
//     return x + y; //тело функции
// });

// doMath(10, 8, function (x, y) {
//     return x - y;
// });

/*
 * Отложенный вызов: регистрация событий(вызывается функция когда-то потом по событию)
 поэтому передаем ссылку на тело
 */

const buttonRef = document.querySelector('.js-button');

const handleBtnClick = function () { //функция клик по кнопке
    console.log('Клик по кнопке ' + Date.now());
};
//передаем функцию handleBtnClick (это callback) ятобы она при событии вызывалась
// buttonRef.addEventListener('click', handleBtnClick); //когда будет клик- выполнить ссылку на функцию handleBtnClick

/*
 * Отложенный вызов: геолокация видео Репеты модуль 4 занятие 7 (34:10)
(ты мне дай внутрь и я там вызову, когда отработаю)
функцию onGetPositionSuccess передаем в первый аргумент
ф-ции window.navigator.geolocation.getCurrentPosition(строка 74)
 */

const onGetPositionSuccess = function (position) { //ф-ция запроса геолокации
    console.log('Это вызов onGetPositionSuccess');
    console.log(position);
};

const onGetPositionError = function (error) { //ф-ция которая обрабатывает ошибку
    console.log('Это вызов onGetPositionError');
    console.log(error);
};

//getCurrentPosition- говорит ты мне дай свое и я его вызову, когда я отработаю
//если-хорошо то вызову (position), если плохо вызову другую функцию(error)
// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,//первая вызывается, если получится получить геопозицию
//     onGetPositionError, //вторая вызывается, если не получится
// );


/*
 * Отложенный вызов: интервалы
 */

const callback = function () {
    console.log('Через 2 секунды внутри колбека в таймауте');
};

// console.log('В коде перед таймаутом');
// setTimeout(callback, 2000); //регистрирует отложенный вызов
// console.log('В коде после таймаута');

/*
 * Отложенный вызов: http-запрос
 * - API URL: https://pokeapi.co/api/v2/pokemon
 */

const onRequestSuccess = function (response) {
    console.log(
        'Вызов функции onRequestSuccess после успешного ответа бекенда',
    );
    console.log(response);
};

// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(res => res.json())
//     .then(onRequestSuccess);


/*
 * Фильтр
 */

const filter = function (array, test) {
    const filteredArray = []; //создание нового массива

    for (const el of array) { //перебор старого массива
        console.log(el);
        const passed = test(el);//вызов проверки

        if (passed) {
            filteredArray.push(el); //по условию добавляем
        }
    }

    return filteredArray; //возврат нового
};

// 1. надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условию то функция вернет true
// 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

const callback1 = function (value) {
    return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const callback2 = function (value) {
    return value <= 4;
};

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2);

const fruits = [
    { name: 'apples', quantity: 200, isFresh: true },
    { name: 'grapes', quantity: 150, isFresh: false },
    { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
    return fruit.quantity >= 120; //возвращаем только те у кого quantity>=120
};

const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);
