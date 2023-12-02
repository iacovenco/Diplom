const callMaster = () => {
  document.addEventListener("DOMContentLoaded", function () {
    // Получаем все элементы кнопок
    const modalButtons = document.querySelectorAll(
      ".btn.btn-success.btn-sm.fancyboxModal"
    );
    const modal = document.querySelector(".services-modal");
    const overlay = document.querySelector(".overlay");
    const closeButton = document.querySelector(".services-modal__close");

    // Функция открытия модального окна
    function openModal() {
      modal.style.display = "block";
      overlay.style.display = "block";
    }

    // Функция закрытия модального окна
    function closeModal() {
      modal.style.display = "none";
      overlay.style.display = "none";
    }

    // Назначаем событие клика на каждую кнопку
    modalButtons.forEach(function (button) {
      button.addEventListener("click", openModal);
    });

    // Назначаем событие клика на крестик
    closeButton.addEventListener("click", closeModal);
  });
};

export default callMaster;
