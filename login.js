document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const msg = document.getElementById("message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      msg.textContent = "⚠️ Please fill in both fields.";
      msg.style.color = "red";
      return;
    }

    // Basic validation passed
    msg.textContent = "✅ Login successful! Redirecting...";
    msg.style.color = "lightgreen";

    // Redirect to dashboard
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  });
});