/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),//в [] это селектор атрибута
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);//вешаем слушателя открыть модалку
refs.closeModalBtn.addEventListener('click', onCloseModal);//вешаем слушателя закрыть модалку
refs.backdrop.addEventListener('click', onBackdropClick);

//откроем модалку при клике на кнопку
function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);//если модалка открыта-слушай нажатие клавиш
  document.body.classList.add('show-modal');//добавляем в .body класс show-modal(открыть модалку)
}
//закроем модалку при клике на кнопку
function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);//отписаться от слушателя(не слушать нажатие клавиш)
  document.body.classList.remove('show-modal');//снимаем с .body класс show-modal(закрыть модалку)
}
//закроем модалку при клике на бэкдроп
function onBackdropClick(event) {
  if (event.currentTarget === event.target) {//event.target(целевой элемент на котором кликнули)
    console.log('Кликнули именно в бекдроп!!!!');
    onCloseModal();//вызываем ф-цию закрытия модалки
  }
}
//закроем модалку при нажатии клавиши ESC
function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
 
  if (event.code === ESC_KEY_CODE) { //если значение клавиши= ESC
    onCloseModal();//закрыть модалку
  }
}
