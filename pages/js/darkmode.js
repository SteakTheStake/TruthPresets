const toggleDarkButton = document.getElementById('toggleDark');
const toggleLightButton = document.getElementById('toggleLight');

const toggleDarkLogo = document.getElementById('toggleDarkLogo');
const toggleLightLogo = document.getElementById('toggleLightLogo');

const bgVideo = document.getElementById('background-video');
const currentTheme = localStorage.getItem('theme');
const headerElement = document.querySelector('header');

function setVideoSource(theme) {
    if (theme === 'dark-mode') {
        bgVideo.innerHTML = '<source src="/content/video/Truth_Presets_Website_NightTime.mp4" type="video/mp4">';
        toggleDarkButton.style.display = 'none';
        toggleLightButton.style.display = 'block';

        toggleDarkLogo.style.display = 'none';
        toggleLightLogo.style.display = 'block';

        headerElement.classList.add('dark-mode');
    } else {
        bgVideo.innerHTML = '<source src="/content/video/Truth_Presets_Website_DayTime.mp4" type="video/mp4">';
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

