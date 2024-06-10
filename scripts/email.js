function emailDelivery() {
  const submitBtn = document.querySelector(".submit-btn");

  //Checking the email address
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  //CONTACT FORM FUNCTION

  function sendMail() {
    submitBtn.addEventListener("click", (event) => {
      event.preventDefault();

      let parms = {
        name: document.getElementById("contactName").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };
      //Making sure the fields are not empty
      if (parms.name === "" || parms.email === "" || parms.message === "") {
        alert(
          "Please fill in the blank fields\n Si prega di compilare i campi vuoti \n Töltse ki az üres mezőket"
        );
      }
      //Validating the email address
      if (!validateEmail(parms.email)) {
        alert(
          "Please enter a valid email address \n Inserite un indirizzo e-mail valido \n Kérjük, érvényes e-mail címet adjon meg"
        );
        return; // Stop further execution if email is invalid
      } else {
        emailjs
          .send("service_ddc0r7a", "template_5bc79in", parms)
          .then(
            alert("Email Sent\n L'e-mail è stata inviata\n Üzenet elküldve")
          );
      }
    });
  }
  sendMail();
}

export { emailDelivery };
