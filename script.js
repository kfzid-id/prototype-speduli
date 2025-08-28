// script.js

// Toggle mobile menu
document.getElementById("menuBtn").addEventListener("click", () => {
  const nav = document.getElementById("mobileNav");
  nav.classList.toggle("hidden");
});

// Auto update year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Privacy modal
document.getElementById("closePrivacy").addEventListener("click", () => {
  document.getElementById("privacyModal").classList.add("hidden");
});

// Close modal when clicking outside content
const privacyModal = document.getElementById("privacyModal");
privacyModal.addEventListener("click", (e) => {
  if (e.target === privacyModal) {
    privacyModal.classList.add("hidden");
  }
});
