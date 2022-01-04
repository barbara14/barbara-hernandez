const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const errorNodes = document.querySelectorAll(".error");

nameInput.addEventListener("invalid", (e) => e.preventDefault());
emailInput.addEventListener("invalid", (e) => e.preventDefault());
messageInput.addEventListener("invalid", (e) => e.preventDefault());

function validateEmail(email) {
  const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return pattern.test(email);
}

function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  nameInput.classList.remove("error-border");
  emailInput.classList.remove("error-border");
  messageInput.classList.remove("error-border");
}

function validateForm() {
  clearMessages();

  if (nameInput.value.length < 1) {
    errorNodes[0].innerText = '"Nombre" no debe quedar en blanco';
    nameInput.classList.add("error-border");
  }

  if (emailInput.value.length < 1) {
    errorNodes[1].innerText = '"Email" no debe quedar en blanco';
    emailInput.classList.add("error-border");
  } else if (!validateEmail(emailInput.value)) {
    errorNodes[1].innerText = "Direccion de email inválida";
    emailInput.classList.add("error-border");
  }

  if (messageInput.value.length < 1) {
    errorNodes[2].innerText = "Por favor, deja un mensaje";
    messageInput.classList.add("error-border");
  }
}

const btn = document.querySelector("button");
btn.addEventListener("click", validateForm);
