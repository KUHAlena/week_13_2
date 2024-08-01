        function calculateDays() {
            const birthdayInput = document.getElementById('birthdayInput').value;
            const birthdayDate = new Date(birthdayInput);
            const today = new Date();
            const daysUntilBirthday = Math.ceil((birthdayDate - today) / (1000 * 60 * 60 * 24));

            const resultElement = document.getElementById('result');
            const errorElement = document.getElementById('error');

            if (isNaN(daysUntilBirthday)) {
                errorElement.textContent = 'Пожалуйста, введите дату рождения.';
                resultElement.textContent = '';
            } else {
                errorElement.textContent = '';
                resultElement.textContent = `До дня рождения осталось ${daysUntilBirthday} ${getDayWord(daysUntilBirthday)}.`;
            }
        }

        function getDayWord(days) {
            const lastDigit = days % 10;
            if (days >= 11 && days <= 19) {
                return 'дней';
            } else if (lastDigit === 1) {
                return 'день';
            } else if (lastDigit >= 2 && lastDigit <= 4) {
                return 'дня';
            } else {
                return 'дней';
            }
        }
   