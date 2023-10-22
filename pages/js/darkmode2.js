const toggleDarkButton = document.getElementById('toggleDark2');
const toggleLightButton = document.getElementById('toggleLight2');

const toggleDarkLogo = document.getElementById('toggleDarkLogo2');
const toggleLightLogo = document.getElementById('toggleLightLogo2');

const bgVideo = document.getElementById('background-video2');
const currentTheme = localStorage.getItem('theme');
const headerElement = document.querySelector('header');

function setVideoSource(theme) {
    if (theme === 'dark-mode') {
        bgVideo.innerHTML = '<source src="/content/img/GTA-V.mp4" type="video/mp4">';
        toggleDarkButton.style.display = 'none';
        toggleLightButton.style.display = 'block';

        toggleDarkLogo.style.display = 'none';
        toggleLightLogo.style.display = 'block';

        headerElement.classList.add('dark-mode');
    } else {
        bgVideo.innerHTML = '<source src="/content/img/GTA-V-DARKMODE.mp4" type="video/mp4">';
        toggleDarkButton.style.display = 'block';
        toggleLightButton.style.display = 'none';

        toggleDarkLogo.style.display = 'block';
        toggleLightLogo.style.display = 'none';

        headerElement.classList.remove('dark-mode');
    }
    bgVideo.load();
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

