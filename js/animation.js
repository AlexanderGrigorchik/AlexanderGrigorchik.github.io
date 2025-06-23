// Получаем все колонки
const columns = document.querySelectorAll('.skills-column');

// Функция, которая проверяет, виден ли элемент на экране
function isVisible(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Функция, которая добавляет анимацию с задержкой
function addAnimationWithDelay(element, delay) {
  setTimeout(() => {
    element.classList.add('animate');
  }, delay);
}

// Добавляем класс 'animate', если колонка видна
function checkVisibility() {
  columns.forEach((column, index) => {
    if (isVisible(column)) {
      // Добавляем анимацию с задержкой
      addAnimationWithDelay(column, index * 200); // Задержка 200ms для каждого следующего элемента
    }
  });
}

// Вызываем функцию при прокрутке
window.addEventListener('scroll', checkVisibility);

// Проверяем видимость сразу после загрузки страницы
document.addEventListener('DOMContentLoaded', checkVisibility);

const movingElement = document.getElementById('moving-element');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX - movingElement.offsetWidth / 2;
    const y = e.clientY - movingElement.offsetHeight / 2;

    movingElement.style.transform = `translate(${x}px, ${y}px)`;
});