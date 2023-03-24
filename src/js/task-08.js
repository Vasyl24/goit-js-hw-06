const form = document.querySelector('.login-form');
const userEmail = document.querySelector('[type="email"]');
const userPassword = document.querySelector('[type="password"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (userEmail.value === '' || userPassword.value === '') {
    alert('Всі поля повинні бути заповнені');
    // return;
  } else {
    const userForm = {
      email: userEmail.value,
      password: userPassword.value,
    };
    console.log(userForm);

    // const {
    //   elements: { email, password },
    // } = event.currentTarget;
    // console.log(email.value, password.value);
    //Якщо робити з elements то буде виводитись не об'єкт,
    // а просто значення
    form.reset();
  }
});
