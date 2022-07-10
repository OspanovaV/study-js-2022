/* Формы
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

//выборка элементов
const form = document.querySelector('.js-register-form');

//подписка
form.addEventListener('submit', onFormSubmit); //добавить слушателя события

//внешняя функция(обработчик этих подписок)
function onFormSubmit(event) { //отправка формы
  event.preventDefault();//предотвращает перезагрузку страницы(отмена действия браузера по умолчанию)

   //лучший помощник при сборе данных из большой формы-new FormData
  const formData = new FormData(event.currentTarget);//передаём ссылку на DOM элемент(есть formData сделали new FormData 
  //кинули туда ссылку на целую форму она нам вернула данные)

  console.log(formData);

 //посмотреть данные можно при помощи  .forEach
  formData.forEach((value, name) => { //выводим (значение поля и имя полей)
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
  });
}
