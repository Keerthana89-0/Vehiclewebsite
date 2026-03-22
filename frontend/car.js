function addToCart(carId, carName, price) {
  const email = localStorage.getItem("email");
  if (!email) {
    alert("Please login first");
    return;
  }

  fetch("http://localhost:5000/api/add-to-cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, carId, carName, price })
  })
  .then((res) => res.json())
  .then((data) => alert(data.message))
  .catch((err) => console.error(err));
}
const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  alert("Please login to view your cart.");
  window.location.href = "index1.html";
}

