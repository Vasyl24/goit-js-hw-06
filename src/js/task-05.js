const input = document.querySelector('#name-input');
const text = document.querySelector('#name-output');

input.addEventListener('input', (event) => {
  if (input.value === '') {
    text.textContent = 'Anonymous';
    //   console.log(text);
  } else {
    text.textContent = event.currentTarget.value;
    // console.log(text);
  }
});
