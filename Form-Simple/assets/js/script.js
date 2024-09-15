function validarForm() {
  const message = document.querySelectorAll(".error").value;
  let fName = document.getElementById("f-name").value;
  let lName = document.getElementById("l-name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (fName === "") {
    alert("First name cannot be empty")
    return false
  }
  
  if (lName === "") {
    alert("Last name cannot be empty")
    return false
  }

  if(!validarEmail(email)) {
    alert("Looks like this is not an email")
  }

  if (password == 0) {
    alert("Password cannot be empty")
  }
}

function validarEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}