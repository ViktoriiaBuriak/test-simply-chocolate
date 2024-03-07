document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("toggleButton");
  var closeButton = document.getElementById("closeButton");
  var mobileMenu = document.querySelector(".mobile-menu");
  var isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    if (isOpen) {
      mobileMenu.style.opacity = "1";
      mobileMenu.style.visibility = "visible";
      mobileMenu.style.pointerEvents = "auto";
    } else {
      mobileMenu.style.opacity = "0";
      mobileMenu.style.visibility = "hidden";
      mobileMenu.style.pointerEvents = "none";
    }
  }

  function closeMenu() {
    isOpen = false;
    mobileMenu.style.opacity = "0";
    mobileMenu.style.visibility = "hidden";
    mobileMenu.style.pointerEvents = "none";
  }

  toggleButton.addEventListener("click", toggleMenu);
  closeButton.addEventListener("click", closeMenu);
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("modalOpen");
  const closeBtn = document.getElementById("modalClose");
  const modal = document.querySelector(".backdrop");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", (evt) => {
      evt.preventDefault();
      modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  } 
});
