/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();//предотвращает перезагрузку страницы(отмена действия браузера по умолчанию)

   //лучший помощник при сборе данных
  const formData = new FormData(event.currentTarget);

  console.log(formData);

 //посмотреть данные можно при помощи  .forEach
  formData.forEach((value, name) => { //выводим значение поля е имя
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
  });
}
