const form = document.querySelector("#registration-form");
const nameInput = document.querySelector("#name");
const message = document.querySelector("#message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    message.textContent = `Welcome, ${nameInput.value}!`;
});