// TODO: Validate this form
// TODO: Validate this form
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const address = document.querySelector("#address");
const country = document.querySelector("#country");
const zipCode = document.querySelector("#zip_code");
const city = document.querySelector("#city");
const email = document.querySelector("#email");
const mobilePhone = document.querySelector("#mobile_phone");
const tos = document.querySelector('#tos');
const formRequired = [firstName, lastName, address, country, city];
const regexpZip = /^(?:[0-8]\d|9[0-8])\d{3}$/;
const regexpPhone = /^(\+?33|0)6-?\d{8}$/;
const regexpEmail = /^\w+@\w+(\.\w{2,6})+$/;
const formControls = document.querySelectorAll(".form-control");
const arrayOfAllInputs = Array.from(formControls);
const submitButton = document.querySelector('.btn');

const addValidationClasses = (inputs) => {
  inputs.forEach((item) => {
    item.addEventListener('blur', (event) => {
      if (item.value === null || item.value === "") {
        item.classList.remove("is-valid");
        item.classList.add("is-invalid");
      } else {
        item.classList.remove("is-invalid");
        item.classList.add("is-valid");
      }
    });
  });
};

addValidationClasses(formRequired);

const addValidationClassesRegexp = (regexp, input) => {
  input.addEventListener('blur', (event) => {
    if (regexp.test(input.value)) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
    }
  });
};

addValidationClassesRegexp(regexpZip, zipCode);
addValidationClassesRegexp(regexpPhone, mobilePhone);
addValidationClassesRegexp(regexpEmail, email);

// checkbox checked
const checkboxChecked = input => (input.checked);

const allFilled = inputs => (// Check that the value of every input is not an empty string
  inputs.every(input => (
    input.value !== ""
  ))
);

const checkValidationClass = input => (input.classList.contains("is-valid"));

// enable button
const enableButton = () => {
  const allFormControlsAreValid = allFilled(arrayOfAllInputs);
  const tosIsValid = checkboxChecked(tos);
  const zipCodeIsValid = checkValidationClass(zipCode);
  const emailIsValid = checkValidationClass(email);
  const phoneIsValid = checkValidationClass(mobilePhone);
  if (allFormControlsAreValid && tosIsValid && zipCodeIsValid && emailIsValid && phoneIsValid) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};

// Events
formControls.forEach((input) => {
  input.addEventListener('blur', enableButton);
});
tos.addEventListener('click', enableButton);
