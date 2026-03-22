const backendURL = "http://localhost:5000/api/auth";

document.addEventListener("DOMContentLoaded", () => {
  // ======= Form Toggle & Button Logic =======
  const registerBtn = document.getElementById("registerBtn");
  const loginBtn = document.getElementById("loginBtn");
  const closeBtn = document.getElementById("closeBtn");
  const registerFormWrapper = document.getElementById("registerFormWrapper");
  const loginFormWrapper = document.getElementById("loginFormWrapper");

  // Optional: Button to show register form
  const showRegisterFormBtn = document.getElementById("showRegisterForm");

  if (showRegisterFormBtn && registerFormWrapper && loginFormWrapper) {
    showRegisterFormBtn.addEventListener("click", () => {
      registerFormWrapper.style.display = "block";
      loginFormWrapper.style.display = "none";
    });
  }

  if (closeBtn && registerFormWrapper && loginFormWrapper) {
    closeBtn.addEventListener("click", () => {
      registerFormWrapper.style.display = "none";
      if (loginFormWrapper) loginFormWrapper.style.display = "none";
    });
  }

  // ======= REGISTER FORM SUBMISSION =======
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        const res = await fetch('${backendURL}/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, email, password })
        });

        const data = await res.json();
        alert(data.message);

        if (res.ok) {
          localStorage.setItem("user", JSON.stringify(data.user));
          window.location.href = "login.html";
        }
      } catch (err) {
        alert('Error: ' + err.message);
      }
    });
  }

  // ======= LOGIN FORM SUBMISSION =======
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      try {
        const res = await fetch('${backendURL}/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        alert(data.message);

        if (res.ok) {
          localStorage.setItem('user', JSON.stringify(data.user));
          window.location.href = 'index.html'; // or home page
        }
      } catch (err) {
        alert('Login Error: ' + err.message);
      }
    });
  }

  // ======= LOGOUT BUTTON =======
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("user");
      window.location.href = "login.html"; // redirect to login page
    });
  }
});