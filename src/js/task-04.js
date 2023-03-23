const counterValue = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
let num = 0;

increment.addEventListener('click', () => {
  num += 1;
  counterValue.textContent = num;
});

decrement.addEventListener('click', () => {
  num -= 1;
  counterValue.textContent = num;
});
