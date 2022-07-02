const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Интерфейс classList
 * - add(класс) //добавим новый класс
 * - remove(класс) //удалить класс
 * - toggle(класс) //если есть уберёт класс, если нету-добавит класс
 * - replace(старыйКласс, новыйКЛасс) //заменит один класс на другой
 * - contains(класс) //ищет содержит ли такой класс. Возвращает true или false
 */

//   const navEl = document.querySelector('.site-nav');//получим ссылку на элемент .site-nav(базовый класс)
//   console.log(navEl.classList); // .classList - это специальный интерфейс(это свойство в котором хранится обьект)
  
//   navEl.classList.add('super-cool', 'qweqwe');//добавим 2 новых класса и передаём сюда класс как строку, которую добавим на элемент
//   navEl.classList.remove('site-nav'); //можем удалить класс
//   navEl.classList.replace('super-cool', 'qwerty'); //заменим super-cool на qwerty
//   navEl.classList.contains('qwerty');// содержит ли такой класс. Возвращает true или false

// magicBtn.addEventListener('click', () => {//слушатель событий, который выполняет код по клику(кликаем на кнопку и выполняется код)
//   navEl.classList.toggle('qwerty'); //если есть уберёт класс qwerty, если нету - добавит класс qwerty
//   });


const currentPageUrl = '/contact';

const linkEl = document.querySelector(//получим ссылку на
  `.site-nav__link[href="${currentPageUrl}"]`,//вот селектор класса и у элемента с таким классом должен быть атрибут href, 
  //который совпадает с currentPageUrl
);

console.log(linkEl);
linkEl.classList.add('site-nav__link--current');//добавим новый класс site-nav__link--current(добавляет цвет текущей странице)
