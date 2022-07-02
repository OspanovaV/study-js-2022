/*
 * Свойства «навигации» по DOM-узлам (взять список)
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-traversal.html
 */

const navEl = document.querySelector('.site-nav');//получим ссылку на ul(site-nav)

// const firstNavItemEl = navEl.querySelector('.site-nav__item'); //получим ссылку на первый элемент
const firstNavItemEl = navEl.firstElementChild; //ссылка на тот же самый первый элемент
console.log(firstNavItemEl);//получим ссылку на первый элемент
console.log(navEl.children); //получим коллекцию из li(детей) 
console.log(navEl.lastElementChild);//последний элемент


