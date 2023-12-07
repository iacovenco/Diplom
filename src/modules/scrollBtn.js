const scrollBtn = () => {
  document.addEventListener("DOMContentLoaded", () => {
    document
      .querySelector(".smooth-scroll")
      .addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });

    // Появление кнопки скролла после прокрутки первой секции
    window.addEventListener("scroll", function () {
      if (window.scrollY > document.querySelector(".section").offsetHeight) {
        document.querySelector(".smooth-scroll").style.display = "block";
      } else {
        document.querySelector(".smooth-scroll").style.display = "none";
      }
    });
  });
};

export default scrollBtn;
