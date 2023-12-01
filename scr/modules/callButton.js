const callButton = () => {
  // Получаем кнопку "Заказать звонок"
  const callButton = document.querySelector(
    ".btn btn-warning btn-block fancyboxModal"
  );

  // Получаем модальное окно и подложку
  const modal = document.querySelector(".header-modal");
  const overlay = document.querySelector(".overlay");

  // Получаем кнопку закрытия модального окна
  const closeButton = document.querySelector(".header-modal__close");

  // Функция для открытия модального окна
  function openModal() {
    modal.style.display = "block";
    overlay.style.display = "block";
  }

  // Функция для закрытия модального окна
  function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
  }

  // Назначаем обработчик события на клик по кнопке "Заказать звонок"
  callButton.addEventListener("click", openModal);

  // Назначаем обработчик события на клик по кнопке закрытия модального окна
  closeButton.addEventListener("click", closeModal);

  //
  console.log("hello world!");
};

export default callButton;
