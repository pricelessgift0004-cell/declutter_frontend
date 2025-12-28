const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add("show"));
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card").forEach(c => observer.observe(c));
});
