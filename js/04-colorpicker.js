/*
// есть массив обьектов цветов
// в html есть div(шаблон карточки) и нужно динамически создавать такие карточки
1.создаём разметку 
2.зарэндерить эту разметку в html в div 
3.
выбираем одну карточку из многих()
*/

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#e91e63', rgb: '233,30,99' },
  { hex: '#9c27b0', rgb: '156,39,176' },
  { hex: '#673ab7', rgb: '103,58,183' },
  { hex: '#3f51b5', rgb: '63,81,181' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#00bcd4', rgb: '0,188,212' },
  { hex: '#009688', rgb: '0,150,136' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
  { hex: '#ff9800', rgb: '255,152,0' },
  { hex: '#795548', rgb: '121,85,72' },
  { hex: '#607d8b', rgb: '96,125,139' },
];

const paletteContainer = document.querySelector('.js-palette');//получим ссылку к контейнеру куда будем складывать карточки
const cardsMarkup = createColorCardsMarkup(colors);//тут вызываем массив(colors) обьектов (хранит результат вызова функции всей разметки)

// 2.зарэндерить эту разметку в html 
paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);//.insertAdjacentHTML добавляет в html созданную разметку в конец 

paletteContainer.addEventListener('click', onPaletteContainerClick);//вешаем слушателя на большой контейнер и выполняем функцию

//1.создаём разметку
function createColorCardsMarkup(colors) {// параметр доступной области видимости(colors)
  return colors //мэпаем массив colors
    .map(({ hex, rgb }) => {//для каждого обьекта(цвета) будем возвращать такую карточку
//для каждого вызова функции будем возвращать такую разметку
      return `
    <div class="color-card">
     <div><div><div> <div
     class="color-swatch"
     data-hex="${hex}"
     data-rgb="${rgb}"
     style="background-color: ${hex}"
   ></div></div></div></div>
      <div class="color-meta">
        <p>HEX: ${hex}</p>
        <p>RGB: ${rgb}</p>
      </div>
    </div>
    `;
    }) 
    .join('');//методом .join берем массив элементов и сшиваем в одну строку
}

function onPaletteContainerClick(evt) {
  const isColorSwatchEl = evt.target.classList.contains('color-swatch');//содержит элемент с классом color-swatch

  //проверка куда кликнули
  if (!isColorSwatchEl) { //если элемент по которому кликнули не содержит isColorSwatchEl 
    return; //выходим и ничего не делаем
  }

  const swatchEl = evt.target;
  const parentColorCard = swatchEl.closest('.color-card');//.closest- находит вверху по коду первого элемента с заданным селектором

  removeActiveCardClass();
  addActiveCardClass(parentColorCard);
  setBodyBgColor(swatchEl.dataset.hex);//вызываем функцию
}

//меняем backgroundColor на body 
function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
  const currentActiveCard = document.querySelector('.color-card.is-active');//ищем элемент(текущую активную карточку) с такими классами

  if (currentActiveCard) {// если она есть
    currentActiveCard.classList.remove('is-active');//удаляем класс 
  }
}

function addActiveCardClass(card) {
  card.classList.add('is-active');
}
