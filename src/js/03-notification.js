import '../css/common.css';

/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;//глобальная переменная timeoutId
const refs = {
  notification: document.querySelector('.js-alert'),
};

refs.notification.addEventListener('click', onNotificationClick);

showNotification();
/*
 * Функции
 */
//закрываем Notification кликом мышки
function onNotificationClick() { //при клике на Notification
  hideNotification();//спрячь её
  clearTimeout(timeoutId);// и очисти значение timeoutId (отменяет запланированный отложенный вызов функции setTimeout)
}
//показываем Notification
function showNotification() {
  refs.notification.classList.add('is-visible');
//автоматически сама закроется Notification
  timeoutId = setTimeout(() => {//в переменную записываем идентификатор(id) таймаута
    console.log('Закрываем алерт автоматически чтобы не висел');
    hideNotification();
  }, NOTIFICATION_DELAY);
}
//скрываем Notification
function hideNotification() {
  refs.notification.classList.remove('is-visible');
}
