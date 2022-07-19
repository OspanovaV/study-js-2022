/*подключаем библиотеку, если браузер не поддерживает нативно
 * Библиотека lazysizes работает во всех браузерах(подключаем если не работает атрибут(например в сафари не работает))
1. подключаем библиотеку
2. 
 * - feature detection (определение функционала браузера) добавляем скрипт по условию только там где нужно
 */

//так можем определять есть ли какой-то функционал в браузере

if ('loading' in HTMLImageElement.prototype) {//если есть 'loading' на прототипе HTMLImageElement
  console.log('Браузер поддерживает lazyload');//если поддерживает
  addSrcAttrToLazyImages();//просто добавляем атрибут
} else { //если не поддерживает
  console.log('Браузер НЕ поддерживает lazyload');
  addLazySizesScript();// добавим библиотеку 
}

const lazyImages = document.querySelectorAll('img[data-src]');

lazyImages.forEach(image => { 
  image.addEventListener('load', onImageLoaded, { once: true });//вешаем слушателя 'load'и сделаем функцию, добавим настройки слушателя события 
});

function onImageLoaded(evt) {
  console.log('Картинка загрузилась');
  evt.target.classList.add('appear');//добавляем класс 'appear', когда картинка загрузилась
}
//добавляем библиотеку если не поддерживает ленивую загрузку
function addLazySizesScript() { //создаем скрипт
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
  script.integrity =
    'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
  script.crossOrigin = 'anonymous';

  document.body.appendChild(script); //и добавляем скрипт в конец .body
}
//используем нативную, если поддерживает ленивую загрузку
function addSrcAttrToLazyImages() {//добавляет атрибут src и браузер нативно загружает
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');//получим ссылку на img с атрибутом loading="lazy"

  lazyImages.forEach(img => { //для каждой кратинки
    img.src = img.dataset.src;// в атрибут src положит то что лежит в dataset.src
  });
}
