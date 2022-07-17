/*
 * Сhatty events
 * Приемы throttling и debouncing c Lodash
 */

/*
 * Mousemove и throttle
-throttle - вызывает функцию вначале один раз, а затем вызывает её через указанный промежуток времени
 */
const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;//переменная хранит количество вызовов функции

//на окно добавляем слушателя событий 'mousemove'
window.addEventListener('mousemove', _.throttle(onMouseMove, 250));//вызываем функцию не чаще чем 250ms(метод  _.throttle)

function onMouseMove(event) {
  mouseMoveCbInvocationCounter += 1;

  //записываем количество вызовов и координаты мышки на экране
  coordsOutputRef.textContent = `
    Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
    X: ${event.clientX},
    Y:${event.clientY}
  `;
}

/*
 * Input и debounce (отложенный поиск)
- debounce - вызывает функцию через указанный промежуток времени после окончания события
 */
const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbInvocationCounter = 0;

inputRef.addEventListener('input', _.debounce(onInputChange, 300));//вызываем функцию при событии 'input'через 300ms( _.debounce)

function onInputChange(event) {
  inputCbInvocationCounter += 1;

  //выводим количество вызовов этой функции и значение .target(введённые в инпут символы)
  outputRef.textContent = `
    Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
    Значение: ${event.target.value}
  `;
}
