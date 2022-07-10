/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = { //все ссылки на элементы соберем(обьект ссылок)
  input: document.querySelector('.js-input'), //ссылка на инпут
  nameLabel: document.querySelector('.js-button > span'), //на спан
  licenseCheckbox: document.querySelector('.js-license'),//сыылка на чекбокс
  btn: document.querySelector('.js-button'), //на кнопку
};

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);//для радио кнопок и чекбоксов
// refs.input.addEventListener('input', onInputChange);//для текстовых полей

refs.input.addEventListener('input', onInputChange);//каждое изменение  в инпуте при вводе текста
refs.licenseCheckbox.addEventListener('change', onLicenseChange);

function onInputFocus() { //добавить событие Focus
  console.log('Инпут получил фокус - событие focus');
}

function onInputBlur() { //добавить событие blur
  console.log('Инпут потерял фокус - событие blur');
}

function onInputChange(event) {//прослушал событие Input
  refs.nameLabel.textContent = event.currentTarget.value;//нашёл значение Input и изменил текст другого элемента
}

function onLicenseChange(event) {//прослушал событие Change
  refs.btn.disabled = !event.currentTarget.checked;//кнопка выключена, когда не чекнули чекбокс. 
  //свойство.checked даёт true или false
}
