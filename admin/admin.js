const token = localStorage.getItem("adminToken");

if (!token) {
  alert("Admin login required");
  location.href = "/index.html";
}

fetch(`${API}/admin/stats`, {
  headers: { Authorization: `Bearer ${token}` }
})
.then(res => {
  if (!res.ok) throw new Error("Unauthorized or server error");
  return res.json();
})
.then(data => {
  document.getElementById("productsCount")?.innerText = data.products ?? 0;
  document.getElementById("stockCount")?.innerText = data.stock ?? 0;
  document.getElementById("adminCount")?.innerText = data.admins ?? 1;
})
.catch(err => {
  console.error(err);
  alert("Failed to load admin dashboard");
});

function logout() {
  localStorage.removeItem("adminToken");
  location.href = "/index.html";
}
