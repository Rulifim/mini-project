function openFullscreen() {
    console.log("1")
    var image = document.getElementById('myImage');
    var container = document.getElementById('fullScreenContainer');

    // Создаем новое изображение для полного экрана
    var fullImg = new Image();
    fullImg.src = image.src;

    // Удаляем старые элементы
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    // Устанавливаем событие закрытия окна
    fullImg.onclick = function(){
        closeFullscreen();
    };

    // Добавляем изображение в контейнер
    container.appendChild(fullImg);

    // Показываем контейнер
    container.style.display = 'block';
}

// Закрыть окно
function closeFullscreen() {
    var container = document.getElementById('fullScreenContainer');
    container.style.display = 'none';
}
