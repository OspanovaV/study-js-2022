const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

/*
*Делаем фильтр с поиском
 * 1. Рендерим разметку элементов списка
 * 2. Слушаем изменение фильтра
 * 3. Фильтруем данные и рендерим новые элементы
 */

const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

refs.input.addEventListener('input', _.debounce(onFilterChange, 300));//вызываем функцию при событии 'input'через 300ms( _.debounce)

const listItemsMarkup = createListItemsMarkup(tech);
populateList(listItemsMarkup);

//Рендерим разметку элементов списка(для того чтобы пользователь увител список)
function createListItemsMarkup(items) {
  return items.map(item => `<li>${item.label}</li>`).join('');
}
//обработчик события
function onFilterChange(evt) {
  const filter = evt.target.value.toLowerCase();

  //фильтруем те элементы, которые содержат значение фильтра в свойстве .label
  const filteredItems = tech.filter(t => //берем весь массив данных(если у каждого элемента в нижнем регистре
    t.label.toLowerCase().includes(filter), //включают в себя значение фильтра(.includes(filter)) в свойстве .label)
  );

  //создаём новую разметку отфильтрованных элементов  
  const listItemsMarkup = createListItemsMarkup(filteredItems);
  populateList(listItemsMarkup);//и полностью заменяем значение списка
}

//функция для замены значений списка
function populateList(markup) {
  refs.list.innerHTML = markup;
}
