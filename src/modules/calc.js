const calc = () => {
  document.addEventListener("DOMContentLoaded", function () {
    // Получаем элементы формы
    const calcTypeSelect = document.getElementById("calc-type");
    const materiaTypeSelect = document.getElementById("calc-type-material");
    const calcInput = document.getElementById("calc-input");
    const calcTotal = document.getElementById("calc-total");

    // Событие для изменения типа балкона
    calcTypeSelect.addEventListener("change", function () {
      calculateTotal();
    });

    // Событие для изменения типа остекления
    materiaTypeSelect.addEventListener("change", function () {
      calculateTotal();
    });

    // Событие для изменения площади балкона
    calcInput.addEventListener("input", function () {
      // Проверяем ввод на соответствие цифрам
      this.value = this.value.replace(/\D/g, "");
      calculateTotal();
    });

    // Функция для вычисления итоговой стоимости
    function calculateTotal() {
      const area = parseFloat(calcInput.value);
      const typeValue = parseFloat(calcTypeSelect.value);
      const materialValue = parseFloat(materiaTypeSelect.value);

      const total = area * typeValue * materialValue;
      calcTotal.value = total;

      // Добавляем свойство calc-total к отправляемым данным в JSON-формате
      const formData = {
        "calc-total": total,
      };
      const jsonData = JSON.stringify(formData);
      console.log(jsonData);
    }
  });
};

export default calc;
