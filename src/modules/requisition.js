const requisition = () => {
  document.addEventListener("DOMContentLoaded", function () {
    function validateName(input) {
      // Регулярное выражение для проверки имени
      const regex = /^[а-яА-ЯёЁa-zA-Z\s-]+$/;

      // Приводим первую букву каждого слова к верхнему регистру, а остальные к нижнему
      input.value = input.value
        .toLowerCase()
        .replace(/(?:^|\s|-)\S/g, function (match) {
          return match.toUpperCase();
        });

      // Проверяем значение с помощью регулярного выражения
      if (!regex.test(input.value)) {
        input.value = "";
      }
    }

    function validatePhone(input) {
      // Регулярное выражение для проверки номера телефона
      const regex = /^[0-9+]{1,16}$/;

      // Проверяем значение с помощью регулярного выражения
      if (!regex.test(input.value)) {
        input.value = "";
      }
    }

    const form = document.forms["action-form"];

    const inputName = form.elements["fio"];
    const inputPhone = form.elements["phone"];

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Проверяем заполненность обоих полей
      if (inputName.value === "" || inputPhone.value === "") {
        return;
      }

      // Валидируем введенные значения имени и номера телефона
      validateName(inputName);
      validatePhone(inputPhone);

      // Создаем объект с данными
      const data = {
        name: inputName.value,
        phone: inputPhone.value,
      };

      // Преобразуем данные в JSON-строку
      const jsonData = JSON.stringify(data);

      // Отправляем данные на сервер (здесь нужно добавить "url_to_server_endpoint")
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(error);
        });
    });

    inputName.addEventListener("input", function () {
      // При обновлении значения имени запускаем валидацию
      validateName(this);
    });

    inputPhone.addEventListener("input", function () {
      // При обновлении значения номера телефона запускаем валидацию
      validatePhone(this);
    });
  });
};

export default requisition;
