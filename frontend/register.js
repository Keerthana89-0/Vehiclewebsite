document.querySelector("#registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const firstName = document.getElementById("registerFirstName").value;
  const lastName = document.getElementById("registerLastName").value;
  const email = document.getElementById("registerEmail").value;
  const phone = document.getElementById("registerContact").value; // not regPhone
  const address = document.getElementById("registerAddress").value;
  const password = document.getElementById("registerPassword").value;
  const role = document.getElementById("role").value; // not regRole

  if (!firstName || !lastName || !email || !phone || !address || !password || !role) {
    alert("Please fill in all fields");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, phone, address, password, role })
    });

    const data = await res.json();
    if (res.status === 201) {
      alert(data.message || "✅ User registered successfully");
      document.getElementById("registerModal").style.display = "none"; // close modal
    } else {
      alert(data.message || "❌ User already exists or error occurred.");
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong. Try again.");
  }
});
