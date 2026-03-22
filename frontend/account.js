// Open modal
document.getElementById("accountBtn").addEventListener("click", () => {
  document.getElementById("accountModal").style.display = "block";
});

// Close modal
document.querySelector(".closeBtn").addEventListener("click", () => {
  document.getElementById("accountModal").style.display = "none";
});

// Switch to Sign Up
document.getElementById("showSignUp").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("signInForm").style.display = "none";
  document.getElementById("signUpForm").style.display = "block";
});

// Switch to Sign In
document.getElementById("showSignIn").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("signUpForm").style.display = "none";
  document.getElementById("signInForm").style.display = "block";
});

// Handle Login
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const res = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  alert(data.message);
  if (res.ok) {
    document.getElementById("accountModal").style.display = "none";
  }
});

// Handle Register
document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("registerEmail").value,
    password: document.getElementById("registerPassword").value,
  };

  const res = await fetch("http://localhost:5000/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const data = await res.json();
  alert(data.message);
  if (res.ok) {
    document.getElementById("signUpForm").style.display = "none";
    document.getElementById("signInForm").style.display = "block";
  }
});
