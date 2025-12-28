const token = localStorage.getItem("adminToken");
if (!token) location.href = "/admin/login.html";

fetch(`${API}/admin/stats`, {
  headers: { Authorization: `Bearer ${token}` }
})
.then(res => res.json())
.then(data => {
  document.getElementById("productsCount").innerText = data.products;
  document.getElementById("stockCount").innerText = data.stock;
  document.getElementById("adminCount").innerText = data.admins;
});

function logout() {
  localStorage.removeItem("adminToken");
  location.reload();
}
