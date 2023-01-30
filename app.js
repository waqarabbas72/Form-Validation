// Event Listener on name input
document.getElementById("name").addEventListener("blur", validateName);

// Event Listener on zipCode input
document.getElementById("zipcode").addEventListener("blur", validateZipCode);

// Event Listener on Email input
document.getElementById("email").addEventListener("blur", validateEmail);

// Event Listener on phone input
document.getElementById("phone").addEventListener("blur", validatePhone);

// Functions

// validate-Name
function validateName() {
  const name = document.getElementById("name");
  const re = /^[a-zA-Z]{2,10}$/;

  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}

//validate-ZipCode
function validateZipCode() {
  const zipcode = document.getElementById("zipcode");
  const re = /^[0-9]{5}$/;

  if (!re.test(zipcode.value)) {
    zipcode.classList.add("is-invalid");
  } else {
    zipcode.classList.remove("is-invalid");
  }
}

//validate-Email
function validateEmail() {
  const email = document.getElementById("email");
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}

//validate-Phone
function validatePhone() {
  const phone = document.getElementById("phone");
  const re = /^\d{10,11}$/;

  if (!re.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}
