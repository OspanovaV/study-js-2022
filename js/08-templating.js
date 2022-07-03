/*
 * Свойство innerHTML // возвращает всю вложенную разметку(весь контент) в виде одной строки
 * - чтение
 * - запись
 */

const titleEl = document.querySelector('.title');
// titleEl.innerHTML = '<a href="">Это ссылка)</a>';//.innerHTML распарсит и создаст новые теги
// titleEl.innerHTML = ''; //очищает быстро всё содержимое тега

/*
 * Вставка разметки с insertAdjacentHTML()
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-manipulation.html#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-insertadjacenthtml
 */

////добавить новую строку в разметку
titleEl.insertAdjacentHTML( //передаём два значения:позиция, строка
  'beforeend', //позиция(куда поставить)-в конце
  '<a href="" class="title__link">Это ссылка)</a>', //что добавить(строку, которую хочу добавить)
);
