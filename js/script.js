console.log("JJTech Website Loaded");
function sendMail(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let service = document.getElementById("service").value;
  let message = document.getElementById("message").value;

  let mailBody =
`JJTech Booking Request:

Name: ${name}
Phone: ${phone}
Service: ${service}
Message: ${message}`;

  window.location.href =
    `mailto:jjtechccis@gmail.com?subject=JJTech Booking Request&body=${encodeURIComponent(mailBody)}`;
}
