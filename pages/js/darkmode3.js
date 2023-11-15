const toggleDarkButton3 = document.getElementById('toggleDark3');
const toggleLightButton3 = document.getElementById('toggleLight3');

const toggleDarkLogo3 = document.getElementById('toggleDarkLogo3');
const toggleLightLogo3 = document.getElementById('toggleLightLogo3');

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
        toggleDarkButton3.style.display = 'none';
        toggleLightButton3.style.display = 'block';
        toggleDarkLogo3.style.display = 'none';
        toggleLightLogo3.style.display = 'block';
        headerElement.classList.add('dark-mode');
    } else {
        toggleDarkButton3.style.display = 'block';
        toggleLightButton3.style.display = 'none';
        toggleDarkLogo3.style.display = 'block';
        toggleLightLogo3.style.display = 'none';
        headerElement.classList.remove('dark-mode');
    }
}



if (currentTheme) {
    document.body.classList.add(currentTheme);
    setVideoSource(currentTheme);
}

toggleDarkButton3.addEventListener('click', function() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
    setVideoSource('dark-mode');
});

toggleLightButton3.addEventListener('click', function() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light-mode');
    setVideoSource('light-mode');
});

