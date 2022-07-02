/*
 * - Создание элементов
 * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

/*
 * Создаём заголовок
 */
const titleEl = document.createElement('h1');//создаём тег (в памяти)
titleEl.classList.add('page-title');//добавим класс
titleEl.textContent = 'Это заголовок страницы :)';//добавим текст
// console.log(titleEl);

// document.body.appendChild(titleEl);//добавляет ребенка в конец.body 

/*
 * Создаём изображение
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement('img');//создаем пустой img (в памяти)
imageEl.src =
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';//добавим картинку
imageEl.alt = 'valais-alpine-mountains-glacier'; //добавим атрибут
imageEl.width = 320;// добавим ещё один атрибут
// console.log('imageEl', imageEl);

// document.body.appendChild(imageEl);

const heroEl = document.querySelector('.hero');
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);
heroEl.append(titleEl, imageEl);//вставляем нужное количество элементов и в нужном порядке(за одну операцию)
//это для вставки независимых соседей-элементов

/*
 * Создаём и добавляем новый пункт меню
 */
const navItemEl = document.createElement('li');//создаём тег (в памяти)
navItemEl.classList.add('site-nav__item'); //добавим класс

const navLinkEl = document.createElement('a');//создаём ссылку(в памяти) 
navLinkEl.classList.add('site-nav__link');//добавим класс
navLinkEl.textContent = 'Личный кабинет';//добавим текст
navLinkEl.href = '/profile';//добавим атрибут

navItemEl.appendChild(navLinkEl); //вкладываем а в li (в памяти)
// console.log(navItemEl);

const navEl = document.querySelector('.site-nav');//получаем доступ

// navEl.appendChild(navItemEl); //вешаем созданый li(вместе с а) в DOM в конец
//возьми navItemEl вставь его в navEl перед первым элементом
navEl.insertBefore(navItemEl, navEl.firstElementChild);//вешаем созданый li(вместе с а) в DOM в начало
