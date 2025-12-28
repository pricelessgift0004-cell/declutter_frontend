const grid = document.getElementById("products");
const search = document.getElementById("search");
document.getElementById("year").innerText = new Date().getFullYear();

async function loadProducts(q = "") {
  grid.innerHTML = '<div class="card">Loading…</div>';

  const res = await fetch(`${API}/products?search=${q}`);
  const data = await res.json();

  grid.innerHTML = '';

  data.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.animationDelay = `${i * 0.05}s`;

    card.innerHTML = `
      <img src="${p.images?.[0] || ''}" />
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <strong>$${p.price}</strong>
    `;

    grid.appendChild(card);
  });
}

let timeout;
search.addEventListener("input", e => {
  clearTimeout(timeout);
  timeout = setTimeout(() => loadProducts(e.target.value), 300);
});

loadProducts();
