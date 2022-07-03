import products from './data/proucts.js';//подключение(импорт) модулей к исходному массиву обьектов
/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */
// const product = {
//   name: 'Сервоприводы',
//   description:
//     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//   price: 2000,
//   available: true,
//   onSale: true
// };
  /*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__priduct>Цена: 1111 кредитов</p>
</article>
*/
////////// пишем скрипт

// const productEl = document.createElement('article');;//создаем элемент article
// productEl.classList.add('product');//вешаем класс

// const nameEl = document.createElement('h2');
// nameEl.textContent = product.name;//вешаем текст(имя)
// nameEl.classList.add('product__name');//вешаем класс

// const descrEl = document.createElement('p');
// descrEl.textContent = product.description;
// descrEl.classList.add('product__descr');

// const priceEl = document.createElement('p');
// priceEl.textContent = 'Цена: ${product.price} кредитов';//текстовая шаблонная строка
// priceEl.classList.add('product__priduct');

// productEl.append(nameEl, descrEl, priceEl);//все элементы обьединяем и добавляем в DOM
// console.log(productEl);

/*
 * Пишем функцию для создания одной карточки продукта
 */

const productsContainerEl = document.querySelector('.js-products');//получим доступ к ссылке в html разметке

const makeProductCard = ({name, description, price}) => {//создать карточку => приходит какой-то продукт(product) применим деструктуризацию 
  const productEl = document.createElement('article');//далее ф-ция выполняет все операции по созданию элементов
  productEl.classList.add('product');

  const nameEl = document.createElement('h2');//создаем элемент h2
  nameEl.textContent = name;//вешаем текст(имя)
  nameEl.classList.add('product__name');//вешаем класс

  const descrEl = document.createElement('p');//создаем абзац
  descrEl.textContent = description;
  descrEl.classList.add('product__descr');

  const priceEl = document.createElement('p');//создаем абзац
  priceEl.textContent = `Цена: ${price} кредитов`;//текстовая шаблонная строка
  priceEl.classList.add('product__priduct');
    
  productEl.append(nameEl, descrEl, priceEl);//все элементы обьединяем и добавляем в DOM
  return productEl//выводим одну карточку (всю гроздь)
}
// console.log(makeProductCard(products[1]));//выводим одну карточку в []указываем какую по счету карточку выводим

//отдельно выносим функцию, которая перебирает массив и вернет массив элементов
const elements = products.map(makeProductCard);//для каждого элемента массива products вызови функцию .map(возвращает массив элементов)

console.log(elements);
productsContainerEl.append(...elements);//когда мы создали все элементы, распыли в этот контейнер






