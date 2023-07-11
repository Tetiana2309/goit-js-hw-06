const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const { email, password } = e.target.elements;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Заповни всі поля!!!Чорт забирай!!!");
    return;
  }

  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);

  e.target.reset();
});
