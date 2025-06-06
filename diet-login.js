
document.getElementById('dietLoginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const age = document.getElementById('age').value.trim();

  if(email && age > 0) {
    localStorage.setItem("dietUserEmail", email);
    localStorage.setItem("dietUserAge", age);

    // Go to diet.html first
    window.location.href = "diet.html";
  } else {
    alert("Please enter valid details!");
  }
});

// Optional: direct skip to dashboard
function goToDashboard() {
  window.location.href = "dashboard.html";
}