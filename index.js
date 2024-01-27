function handleEmailChange() {
  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value.toLowerCase(); // Convert to lowercase for case-insensitive check

  if (!emailValue.endsWith("@gmail.com")) {
    alert("Please enter a valid email address");
  }
}

