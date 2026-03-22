// logout.js
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("user");
  alert("Logged out!");
  window.location.href = "index1.html"; // go back to homepage
});