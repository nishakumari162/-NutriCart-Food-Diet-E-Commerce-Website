document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const dietOption = document.querySelector('input[name="diet"]:checked');

    // Check if all fields are filled
    if (!name || !email || !age || !gender || !dietOption) {
      alert("⚠️ Please fill all the fields!");
      return;
    }

    // Optional Welcome
    alert("✅ Welcome to NutriCart, ${name}!");

    // Redirect to diet.html or login.html based on choice
    if (dietOption.value === "yes") {
      window.location.href = "dietlogin.html";
    } else {
      window.location.href = "login.html";
    }
  });
});