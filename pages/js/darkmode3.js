const toggleDarkButton = document.getElementById('toggleDark3');
const toggleLightButton = document.getElementById('toggleLight3');

const toggleDarkLogo = document.getElementById('toggleDarkLogo3');
const toggleLightLogo = document.getElementById('toggleLightLogo3');

const currentTheme = localStorage.getItem('theme');
const headerElement = document.querySelector('header');

window.onload = function() {
    document.body.style.backgroundImage = 'url("/content/img/screenshots/QuantV/0.png")';
};

function setImage1() {
    document.body.style.backgroundImage = 'url("/content/img/screenshots/QuantV/1.png")';
}

function setImage2() {
    document.body.style.backgroundImage = 'url("/content/img/screenshots/QuantV/2.png")';
}

function setImage3() {
    document.body.style.backgroundImage = 'url("/content/img/screenshots/QuantV/3.png")';
}

function setImage4() {
    document.body.style.backgroundImage = 'url("/content/img/screenshots/QuantV/4.png")';
}

function setImage5() {
    document.body.style.backgroundImage = 'url("/content/img/screenshots/QuantV/5.png")';
}

function setImage6() {
    document.body.style.backgroundImage = 'url("/content/img/screenshots/QuantV/0.png")';
}

function toggleThemeUI(theme) {
    if (theme === 'dark-mode') {
        toggleDarkButton.style.display = 'none';
        toggleLightButton.style.display = 'block';
        toggleDarkLogo.style.display = 'none';
        toggleLightLogo.style.display = 'block';
        headerElement.classList.add('dark-mode');
    } else {
        toggleDarkButton.style.display = 'block';
        toggleLightButton.style.display = 'none';
        toggleDarkLogo.style.display = 'block';
        toggleLightLogo.style.display = 'none';
        headerElement.classList.remove('dark-mode');
    }
}



if (currentTheme) {
    document.body.classList.add(currentTheme);
    setVideoSource(currentTheme);
}

toggleDarkButton.addEventListener('click', function() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
    setVideoSource('dark-mode');
});

toggleLightButton.addEventListener('click', function() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light-mode');
    setVideoSource('light-mode');
});

