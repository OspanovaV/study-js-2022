/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */
/*скрипт убирает класс с передыдущей кнопки, если она активная, и вешает класс на следующую кнопку
*/

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;//в глобальной переменной храним значение (начальное значение-null)

// tagsContainer.addEventListener('click', onTagsContainerClick);//добавляем слушателя событий

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {//если не кнопка, то пропускаем
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.tags__btn--active');//при каждом клике ищем если есть класс активный

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active'); // то снимаем с него этот класс
//   }
////вместо  if (только при доступе к свойству) можем записать иначе 
//// currentActiveBtn?.classList.remove('tags__btn--active');// ?.эти символы используем(если currentActiveBtn? равен null или undefined
//// то всё что справа не будет выполняться)

//   const nextActiveBtn = evt.target;
//   nextActiveBtn.classList.add('tags__btn--active'); // и добавляем этот класс на тот тег, который кликнули
//   selectedTag = nextActiveBtn.dataset.value;//записываем значение атрибута следующей кнопки(используем для изменения значения глобальной переменной)

//   console.log(selectedTag);//выводим в консоль значение
// }

const tagsContainer = document.querySelector('.js-tags');
const selectedTags = new Set(); //Set это набор уникальных элементов(дубляжи не хранит)

tagsContainer.addEventListener('click', onTagsContainerClick);//добавляем слушателя событий

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {//если не кнопка, то пропускаем
    return;
  }

  const btn = evt.target;
  const tag = btn.dataset.value;
  const isActive = btn.classList.contains('tags__btn--active');//добавляем класс активный(tags__btn--active)

  if (isActive) {//при каждом клике ищем если есть класс активный
    selectedTags.delete(tag);// то снимаем с него этот класс 
  } else {
    selectedTags.add(tag);// в противном случае добавляем этот класс на тот тег
  }

  //.classList.toggle - если есть класс 'tags__btn--active' оно его снимет, если класса нету- добавит
  btn.classList.toggle('tags__btn--active');//и в любом случае(используем classList.toggle) 
  console.log(selectedTags);
}
