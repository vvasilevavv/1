function checkSeat() {
      const input = document.getElementById('seatInput');
      const resultDiv = document.getElementById('result');
      const errorDiv = document.getElementById('error');

      resultDiv.textContent = '';
      errorDiv.textContent = '';

      const n = Number(input.value);

      // Проверка корректности
      if (!Number.isInteger(n) || n < 1 || n > 54) {
        errorDiv.textContent = 'Ошибка: введите целое число от 1 до 54.';
        return;
      }

      let position; // верхнее или нижнее
      let location; // купе или боковое

      if (n <= 36) { // Купе (1-36)
        location = 'в купе'; // 1-нижнее, 2-верхнее, 3-нижнее, 4-верхнее
        const pos = (n - 1) % 4;
        if (pos === 0 || pos === 2) {
          position = 'нижнее';
        } else {
          position = 'верхнее';
        }
      } else { // Боковое (37–54)
        location = 'боковое';
        position = (n % 2 === 1) ? 'нижнее' : 'верхнее'; // Нечётные — нижнее, чётные — верхнее
      }

      resultDiv.textContent = `Место №${n} — ${position}, ${location}.`;
    }
