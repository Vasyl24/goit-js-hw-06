const form = document.querySelector('.login-form');
const userEmail = document.querySelector('[type="email"]');
const userPassword = document.querySelector('[type="password"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (userEmail.value === '' || userPassword.value === '') {
    alert('Всі поля повинні бути заповнені');
  } else {
    const userForm = {
      email: userEmail.value,
      password: userPassword.value,
    };
    console.log(userForm);
  }
  form.reset();
});
