console.log("send message");

const contactFormElement = document.getElementById("contact-form");

contactFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Message has been sent");

  const contactNameElement = document.getElementById("contact-name");
  const contactEmailElement = document.getElementById("contact-email");
  const contactPhoneElement = document.getElementById("contact-phone");
  const contactSubjectElement = document.getElementById("contact-subject");
  const contactMessageElement = document.getElementById("contact-message");

  console.log(contactNameElement.value);
  console.log(contactEmailElement.value);
  console.log(contactPhoneElement.value);
  console.log(contactSubjectElement.value);
  console.log(contactMessageElement.value);
});
