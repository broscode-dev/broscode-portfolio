const firstname = document.getElementById("firstname").value;
const lastname = document.getElementById("lastname").value;
const email = document.getElementById("email").value;
const phoneNumber = document.getElementById("phone").value;
const message = document.getElementById("message").value;
const contactButtonElement = document.getElementById("submit_btn");

const validateFields = () => {
  if (!firstname || !lastname || !email || !phoneNumber || !message)
    return false;
  return true;
};

contactButtonElement.addEventListener("click", (event) => {
  event.preventDefault();
  if (!validateFields) return alert("Please fill the form properly!");
});
