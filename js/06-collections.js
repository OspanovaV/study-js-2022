/*
 * Создём и добавляем коллекцию
 */
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

// const elements = colorPickerOptions.map(option => {//создаём новый массив такой же длины
//   const buttonEl = document.createElement('button');//для каждой итерации создаем кнопку
//   buttonEl.type = 'button'; //вешаем атрибут
//   buttonEl.classList.add('color-picker__option');//вешаем класс
//   buttonEl.textContent = option.label;//вешаем надпись на кнопке
//   buttonEl.style.backgroundColor = option.color;//вешаем инлайновый стиль(.backgroundColor)
//   buttonEl.style.width = 40; //можем добавить ещё один инлайновый стиль(.width)

//   return buttonEl; //возвращаем этот элемент из .map
// });

// console.log(elements);
// //за одну операцию вешаем в DOM 
// colorPickerContainerEl.append(...elements);//вставляем в разметку распыленный массив 

/*
 * Пишем функцию для создания разметки колорпикера
будем получать массив обьектов и возвращать массив разметки
 */
const makeColorPickerOptions = options => {//функция получает массив обьектов
  return options.map(option => { //и возвращает результат .map т.е. массив элементов
    const buttonEl = document.createElement('button');//для каждой итерации создаем кнопку
    buttonEl.type = 'button'; //вешаем атрибут
    buttonEl.classList.add('color-picker__option');//вешаем класс
    buttonEl.textContent = option.label;//вешаем надпись на кнопке
    buttonEl.style.backgroundColor = option.color;//вешаем инлайновый стиль(.backgroundColor)

    return buttonEl;// возвращаем новый элемент из .map в новый массив
  });
};

const elements = makeColorPickerOptions(colorPickerOptions);
colorPickerContainerEl.append(...elements);//вставляем в разметку распыленный массив
