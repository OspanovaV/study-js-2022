import '../css/common.css';

/*
 - Создание
 - Unix-время с 01.01.1970 00:00:00
 - Методы
 - Разница времени
 - Date.now()
*/

const date1 = Date.now();//возвращает текущее значение времени в мили секундах
console.log('date1', date1);

setTimeout(() => {
  const date2 = Date.now();

  console.log('date1', date1);
  console.log('date2', date2);

  console.log(date2 - date1);
}, 3000);
