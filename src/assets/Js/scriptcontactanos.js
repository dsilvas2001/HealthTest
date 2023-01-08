function SendMail() {
  var params = {
    from_name: document.getElementById("fullname").value,
    to_name: document.getElementById("fullname").value,
    message: document.getElementById("message").value,
    email_id: document.getElementById("email_id").value,
    phone: document.getElementById("phone_id").value,
  };
  emailjs
    .send("service_24y20nm", "template_pgv4efl", params)
    .then((message) => alert(message));
}
