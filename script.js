function convertSeconds() {
    var secondsInput = document.getElementById('seconds');
    var resultDiv = document.getElementById('result');

    // Получаем количество секунд из инпута
    var totalSeconds = parseInt(secondsInput.value);

    // Проверяем, чтобы значение не превышало 9999999999
    if (totalSeconds > 9999999999) {
        alert("Пожалуйста, введите значение не более 9999999999 секунд.");
        return;
    }

    // Вычисляем дни, часы, минуты и оставшиеся секунды
    var days = Math.floor(totalSeconds / (60 * 60 * 24));
    var hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    var minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    var remainingSeconds = totalSeconds % 60;

    // Выводим результат
    var resultText = days + " дней, " + hours + " часов, " + minutes + " минут, " + remainingSeconds + " секунд";
    resultDiv.innerHTML = resultText;
}
