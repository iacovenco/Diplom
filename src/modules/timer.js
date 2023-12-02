const timer = () => {
  console.log(123);

  document.addEventListener("DOMContentLoaded", function () {
    // Получаем все элементы с классом "countdown"
    const countdownBlocks = document.querySelectorAll(".countdown");

    // Функция для добавления ведущего нуля к числу
    function addLeadingZero(number) {
      return number < 10 ? "0" + number : number;
    }

    // Функция для обновления таймера
    function updateTimer(block) {
      const daysElement = block.querySelector(".count_1 span");
      const hoursElement = block.querySelector(".count_2 span");
      const minutesElement = block.querySelector(".count_3 span");
      const secondsElement = block.querySelector(".count_4 span");

      const days = parseInt(block.dataset.days);

      // Загружаем сохраненное время таймера из localStorage
      let savedTime = localStorage.getItem(
        "countdown_timer_" + block.dataset.id
      );
      if (savedTime) {
        savedTime = new Date(savedTime);
      } else {
        // Если сохраненного времени нет, устанавливаем текущее время
        savedTime = new Date();
        // Добавляем необходимое количество дней к сохраненному времени
        savedTime.setDate(savedTime.getDate() + days);
        // Сохраняем время в localStorage
        localStorage.setItem("countdown_timer_" + block.dataset.id, savedTime);
      }

      setInterval(function () {
        const currentDate = new Date();
        const timeDifference = savedTime.getTime() - currentDate.getTime();

        const seconds = Math.floor(timeDifference / 1000) % 60;
        const minutes = Math.floor(timeDifference / 1000 / 60) % 60;
        const hours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
        const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

        // Обновляем значения в таймере
        daysElement.textContent = addLeadingZero(days);
        hoursElement.textContent = addLeadingZero(hours);
        minutesElement.textContent = addLeadingZero(minutes);
        secondsElement.textContent = addLeadingZero(seconds);
      }, 1000);
    }

    // Обновляем таймеры для каждого блока с классом "countdown"
    countdownBlocks.forEach(function (block) {
      updateTimer(block);
    });
  });
};

export default timer;
