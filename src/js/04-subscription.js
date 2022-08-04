import '../css/common.css';
import BSN from 'bootstrap.native';//библиотека

const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),//Репета добавил свою кнопку в html
};
const PROMPT_DELAY = 3000;//через сколько секунд будет выходить напоминалка
const MAX_PROMPT_ATTEMPTS = 3;//сколько раз будет выходить напоминалка
let promptCounter = 0;//глобальная переменная(сколько раз мы уже показали напоминалку)
let hasSubscribed = false;//если подписался
const modal = new BSN.Modal('#subscription-modal');//по документации инициализировали плагин модального окна

openModal();//открываем модалку при загрузке страницы

refs.modal.addEventListener('hide.bs.modal', openModal);//в документации событие 'hide.bs.modal'
refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);//выполняется функция при клике
//открыватся напоминалка
function openModal() {//при открытии модалки если
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {//текущее значение=максимальному количеству или подписался
    console.log('Максимальное кол-во надоеданий или подписался');
    return;//выходим из функции(не планируем следующее открытие-setTimeout)
  }
//если те условия не произошли то планируем следующий вызов setTimeout
  setTimeout(() => {//при каждом вызове этой функции мы увеличивем promptCounter(текущее значение) на 1 
    console.log('Открываем надоедалку');
    modal.show();//показываем модалку
    promptCounter += 1;//после каждого открытия модалки увеличиваем на 1
  }, PROMPT_DELAY);//каждые 3000ms
}

function onSubscribeBtnClick() {
  hasSubscribed = true;//человек подписался
  modal.hide();//при клике закрыть модалку
}
