function openPopup(imagePath) {
    const popupImage = document.getElementById('popupImage');
    popupImage.src = imagePath;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closePopup();
    }
});
