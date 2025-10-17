(() => {
  const button = document.getElementById("back-to-top");
  if (!button) return;

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      button.classList.add("visible");
    } else {
      button.classList.remove("visible");
    }
  };

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", toggleVisibility, { passive: true });
  toggleVisibility();
})();

