document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const mobileMenu = document.querySelector(".header__menu");
  const overlay = document.querySelector(".overlay");
  const phoneBtn = document.querySelectorAll(".header__phone");
  const modal = document.querySelector('.modal[data-modal="callback"]');
  const closeModalBtn = document.querySelector(".modal__close");
  const menuLinks = document.querySelectorAll(".header__link");

  const closeBurgerMenu = () => {
    burger.classList.remove("active");
    mobileMenu.classList.remove("active");
  };

  const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  };

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  phoneBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      if (burger.classList.contains("active")) {
        closeBurgerMenu();
      }
      modal.classList.add("active");
      overlay.classList.add("active");
      document.body.classList.add("no-scroll");
    });
  });

  closeModalBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", () => {
    closeModal();
    closeBurgerMenu();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeModal();
      closeBurgerMenu();
    }
  });

  modal.addEventListener("click", e => {
    e.stopPropagation();
  });

  const setActiveTab = link => {
    menuLinks.forEach(item => item.classList.remove("current"));
    link.classList.add("current");
  };

  menuLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      setActiveTab(link);
    });
  });

  if (menuLinks.length > 0) {
    menuLinks[0].classList.add("current");
  }
});
