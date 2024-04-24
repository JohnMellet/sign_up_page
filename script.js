const signUpForm = document.getElementById("sign-up-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const userEmail = document.getElementById("user-email");
const userNumber = document.getElementById("user-phone-number");
const password = document.getElementById("user-password");
const confirmPassword = document.getElementById("user-password-confirm");
const submitBtn = document.querySelector(".btn");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

function validateInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = userEmail.value.trim();
  const numberValue = userNumber.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (
    firstNameValue === "" ||
    !isName(firstNameValue) ||
    lastNameValue === "" ||
    !isName(lastNameValue)
  ) {
    showError(firstName, "Please enter a valid first name.");
    showError(lastName, "Please enter a valid last name.");
  }

  if (emailValue === "" || !isEmail(emailValue)) {
    showError(emailValue, "Please enter a valid email");
  }

  if (numberValue === "" || !isPhoneNumber(numberValue)) {
    showError(numberValue, "test");
  }

  if (
    passwordValue === "" ||
    !isPassword(passwordValue) ||
    passwordValue !== confirmPasswordValue
  ) {
    showError(passwordValue, "test");
  }
}

function showError(input, errorMessage) {
  const parentContainer = input.parentElement;
  const errorText = parentContainer.querySelector(".error-text");

  errorText.innerText = errorMessage;
}

function isName(name) {
  return /^[a-zA-Z]+$/.test(name);
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isPhoneNumber(number) {
  return /^(?:(?:(?:\+|00)44\s?|0)7(?:[45789]\d{2}|624)\s?\d{3}\s?\d{3}|(?!0)(?:\+|00)44\s?(?:\d\s?){9}|(?:(?:\+|00)44\s?)(?:[1-9]\d{1,2}\s?){4}|(?:(?:\+|00)44\s?)(?:[1-9]\d{1,2}\s?){3}\d{4}|(?:(?:\+|00)44\s?)(?:\d\s?){6}\d{2}(?:\s?\d{3})?)$/.test(
    number
  );
}

function isPassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{":;'?/>.<,])(?=.*[^\s]){8,}$/.test(
    password
  );
}
