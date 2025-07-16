document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const mobileMenu = document.querySelector(".header__menu");
  const overlay = document.querySelector(".overlay");
  const phoneBtn = document.querySelectorAll(".header__phone");
  const modal = document.querySelector('.modal[data-modal="callback"]');
  const closeModalBtn = document.querySelector(".modal__close");

  // Функция для закрытия бургер-меню
  const closeBurgerMenu = () => {
    burger.classList.remove("active");
    mobileMenu.classList.remove("active");
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  };

  // Бургер-меню
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  // Кнопки "Заказать звонок" (и в хедере, и в мобильном меню)
  phoneBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      // Закрываем бургер-меню, если оно открыто
      if (burger.classList.contains("active")) {
        closeBurgerMenu();
      }
      // Открываем модальное окно
      modal.classList.add("active");
      overlay.classList.add("active");
      document.body.classList.add("no-scroll");
    });
  });

  // Кнопка закрытия модального окна
  closeModalBtn.addEventListener("click", closeModal);

  // Клик по оверлею
  overlay.addEventListener("click", () => {
    closeModal();
    closeBurgerMenu();
  });

  // Закрытие по Escape
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeModal();
      closeBurgerMenu();
    }
  });

  // Предотвращаем закрытие при клике внутри модального окна
  modal.addEventListener("click", e => {
    e.stopPropagation();
  });
});
