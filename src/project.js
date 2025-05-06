var overlay = document.getElementById('overlay');
var fullscreenImage = document.getElementById('fullscreen-image');

function openFullScreen(event) {
    event.preventDefault(); // Отменяем стандартное поведение браузера
    let imgSrc = this.src;   // Берём адрес изображения
    fullscreenImage.src = imgSrc; // Устанавливаем источник изображения
    overlay.style.display = 'block'; // Показываем оверлей
}

function closeFullScreen() {
    overlay.style.display = 'none';
}

// Для каждого изображения добавляем обработчик кликов
document.querySelectorAll('.fullscreen').forEach(function(img){
    img.addEventListener('click', openFullScreen);
});