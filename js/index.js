const form = document.querySelector("form");
const emailInput = document.getElementById("email_address");
const errorMessage = document.getElementById("errorMsg");
const popup = document.querySelector(".popup");
const container = document.querySelector(".container");

form.addEventListener("submit", (e) => {
  const validationExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailInput.value.match(validationExp) || emailInput.value === "") {
    emailInput.classList.add("inputInvalid");
    emailInput.classList.remove("inputValid");
    errorMessage.innerText = "Valid email is required";
    popup.style.display = "none";
    e.preventDefault();
    return;
  } else {
    emailInput.classList.add("inputValid");
    emailInput.classList.remove("inputInvalid");
    popup.style.display = "block";
    container.style.display = "none";
    e.preventDefault();
    return true;
  }
});

document.getElementById("btn").addEventListener("click", () => {
  container.style.display = "flex";
  popup.style.display = "none";
  errorMessage.innerHTML = "";
  emailInput.value = "";
  emailInput.focus();
});



