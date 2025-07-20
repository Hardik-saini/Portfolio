// Theme Toggle Button
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load theme from localStorage
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  body.classList.replace("light", "dark");
  toggleBtn.textContent = "☀️";
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.replace("dark", "light");
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// Smooth scroll behavior (optional)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});