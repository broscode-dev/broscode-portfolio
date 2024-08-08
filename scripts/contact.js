const firstname = document.getElementById("firstname").value;
const lastname = document.getElementById("lastname").value;
const email = document.getElementById("email").value;
const phoneNumber = document.getElementById("phone").value;
const message = document.getElementById("message").value;
const contactButtonElement = document.getElementById("submit_btn");

const validateFields = () => {
  if (!firstname || !lastname || !email || !phoneNumber || !message)
    return false;

  if (isNaN(phoneNumber)) return false;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

contactButtonElement.addEventListener("click", async (event) => {
  event.preventDefault();
  if (!validateFields()) return alert("Please fill the form properly!");

  const SERVICE_ID = "service_hxq2tsb";
  const TEMPLATE_ID = "template_2s28nwp";
  const USER_ID = "6UMibMX29feE0-4KR";
  const URI = `https://api.emailjs.com/api/v1.0/email/send`;

  const data = JSON.stringify({
    service_id: SERVICE_ID,
    template_id: TEMPLATE_ID,
    user_id: USER_ID,
    template_params: {
      from_name: `${firstname} ${lastname}`,
      message,
      senderEmail: email,
      sender_phone: phoneNumber,
    },
  });
  fetch(URI, {
    method: "POST",
    body: data,
    headers: {
      "content-type": "application/json",
    },
  })
    .then((result) => {
      if (result.status === 200) {
        return alert(
          "Message sent successfully! We will get back to you in 2-3 business days"
        );
      }
      alert("Something went wrong while sending the message. Please try again");
    })
    .catch((error) => {
      alert("Something went wrong while sending the message. Please try again");
    });
});
