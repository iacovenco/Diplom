const sliderService = () => {
  document.addEventListener("DOMContentLoaded", function () {
    // Получаем текущую ширину окна и определяем количество отображаемых слайдов
    let windowWidth = window.innerWidth;
    let slideCount = windowWidth >= 576 ? 3 : 1;

    let slider = document.querySelector(".benefits-inner");
    let slides = slider.querySelectorAll(".benefits__item");

    let currentIndex = 0;

    // Функция для обновления количества отображаемых слайдов
    function updateSlideCount() {
      windowWidth = window.innerWidth;
      slideCount = windowWidth >= 576 ? 3 : 1;
      showSlides(currentIndex);
    }

    // Функция для отображения слайдов
    function showSlides(index) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (let i = index; i < index + slideCount; i++) {
        if (slides[i]) {
          slides[i].style.display = "block";
        }
      }
    }

    // Обновляем отображаемые слайды при изменении размера окна
    window.addEventListener("resize", function () {
      updateSlideCount();
    });

    updateSlideCount();

    // Добавляем обработчики событий для стрелок
    const benefitsArrowLeft = document.querySelector(".benefits__arrow--left");
    const benefitsArrowRight = document.querySelector(
      ".benefits__arrow--right"
    );

    benefitsArrowLeft.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex -= 1;
        showSlides(currentIndex);
      }
    });

    benefitsArrowRight.addEventListener("click", () => {
      if (currentIndex + slideCount < slides.length) {
        currentIndex += 1;
        showSlides(currentIndex);
      }
    });
  });
};

export default sliderService;
