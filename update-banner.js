document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("update-banner");
  if (!banner) return;
  const peek = document.getElementById("update-peek");

  const closeButton = banner.querySelector(".update-banner__close");
  if (!closeButton) return;

  const hideBanner = () => {
    banner.classList.add("update-banner--hidden");
    if (peek) peek.classList.add("update-peek--visible");
  };

  const showBanner = () => {
    banner.classList.remove("update-banner--hidden");
    if (peek) peek.classList.remove("update-peek--visible");
  };

  closeButton.addEventListener("click", hideBanner);

  if (peek) {
    peek.addEventListener("click", showBanner);
    peek.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showBanner();
      }
    });
  }
});
