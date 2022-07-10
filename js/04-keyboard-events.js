/*
 * Типы событий: keypress, keydown, keyup
 * - keydown, keyup(реагируют на все клавиши на клавиатуре(включая служебные))
 * - Ограничения keypress(генерят только какой-то символ)
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
  output: document.querySelector('.js-output'),//ссылка на абзац
  clearBtn: document.querySelector('.js-clear'),// и на кнопку очистки
};

window.addEventListener('keypress', onKeypress);//вешаем слушателя на окно(window)каждое нажатие клавиатуры слушает окно
refs.clearBtn.addEventListener('click', onClearOutput);//при клике выполняем коллбэк-функцию

function onKeypress(event) {
  //свойства на обьекте события:
  // console.log('event.key: ', event.key);//свойство .key хранит символ, который был введен с клавиатуры
  // console.log('event.code: ', event.code); //свойство .code хранит физическую клавишу

  refs.output.textContent += event.key;//значение клавиши(event.key)
}

function onClearOutput() {//очишаем 
  refs.output.textContent = '';
}
