const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.querySelector("#name").value;
  const email = form.querySelector("#email").value;
  const message = form.querySelector("#message").value;
  console.log(`Nome: ${name}, E-mail: ${email}, Mensagem: ${message}`);
  // aqui você pode enviar os dados do formulário para o servidor ou fazer o que precisar com eles
});
