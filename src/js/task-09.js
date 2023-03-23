function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const btn = document.querySelector('.change-color');
const color = document.querySelector('.color');

let num = 0;
btn.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  num = getRandomHexColor();
  color.textContent = num;
});
