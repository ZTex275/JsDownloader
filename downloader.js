var eposidesCount = parseInt(prompt("Введите число:  "));

if (!Number.isInteger(eposidesCount)) {
    alert("Вы ввели не число!");
  }

clickButtons();

// Задержка потока
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function clickButtons() {
    for (let i = 0; i < eposidesCount; i++) {
        try {
            // Находим нужные кнопки
            var inner = document.querySelectorAll('.m-translation-view-download .btn');
            var rightClick = document.querySelector('.m-select-sibling-episode .btn i.right');
            //var button = document.getElementById('execute').click();

            if (inner.length !== 0) {
                inner.forEach(function(element) {
                    // Среди кнопок всех классов находим с нужным текстом
                    if (element.innerHTML === 'Скачать видео (1080p)') {
                        console.log(element);
                        element.click();
                    }
                    if (element.innerHTML === 'Скачать субтитры') {
                        console.log(element);
                        element.click(); // Нажимаем на кнопку
                    }
                });
            }
            if (i !== eposidesCount - 1) { // Чтобы последний раз не нажимал вправо
                rightClick.click();
            }
            await sleep(4000);
        } 
        catch (error) {
            throw error;
        }
    }
}

