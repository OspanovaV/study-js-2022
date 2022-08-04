import '../css/common.css';

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),//абзац, который отображает числа таймера
};

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;//свойство обьекта (изначально= null )
    this.isActive = false;//если таймер активный
    this.onTick = onTick;

    this.init();//при первой загрузке 
  }

  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  start() {
    if (this.isActive) {//если таймер активный
      return;//то выходим
    }
    const startTime = Date.now();//стартовое время
    this.isActive = true;//делаем его активным

    this.intervalId = setInterval(() => { //и запускаем интервал
      const currentTime = Date.now();//текущее значение времени которое вызывается в интервале
      const deltaTime = currentTime - startTime;//разница между начальным временем и временем вызова функции в иртервале
      const time = this.getTimeComponents(deltaTime);//вызываем функцию, чтобы получить обьект со свойствами h, min, s и передаём в него нашу разность

      this.onTick(time);
    }, 1000);
  }
//остановить интервал
  stop() {
    clearInterval(this.intervalId);//останавливаем интервал использую свойство обьекта .intervalId 
    this.isActive = false;
    const time = this.getTimeComponents(0);
    this.onTick(time); //вызываем функцию, которая отображает значения времени в интерфейс
  }

  /*функция getTimeComponents:
   * - Принимает время в миллисекундах
   * - Высчитывает сколько в них вмещается часов/минут/секунд
   * - Возвращает обьект со свойствами hours, mins, secs
   * - Адская копипаста со стека 💩
   */
  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };//Возвращает обьект со свойствами hours, mins, secs
  }

  /*Метод pad
   * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
     если ему приходит 7 то он вернёт 07
   */
  pad(value) {
    return String(value).padStart(2, '0');//используем метод строки.padStart возьми строку String(value) и добавь в неё слева до 2х символов '0'
  }
}

const timer = new Timer({
  onTick: updateClockface,//передаём функцию updateClockface как свойство таймера в обьекте настроек
});

refs.startBtn.addEventListener('click', timer.start.bind(timer));//когда кликнем на кнопку старт
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

/*
 * - Принимает время в миллисекундах
 * - Высчитывает сколько в них вмещается часов/минут/секунд
 * - Рисует интерфейс
 */
function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;//отображает значения времени в интерфейс
}
