const callButton = () => {
  document.addEventListener("DOMContentLoaded", function () {
    // Получаем элементы кнопки, модального окна и подложки
    const modalButton = document.querySelector(
      ".btn.btn-warning.btn-block.fancyboxModal"
    );
    const modal = document.querySelector(".header-modal");
    const overlay = document.querySelector(".overlay");
    const closeButton = document.querySelector(".header-modal__close");

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

    // Назначаем событие клика на кнопку "Заказать звонок"
    modalButton.addEventListener("click", openModal);

    // Назначаем событие клика на крестик
    closeButton.addEventListener("click", closeModal);
  });
};

export default callButton;
