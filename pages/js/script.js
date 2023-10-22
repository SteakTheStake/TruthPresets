let hoverAudioClip = new Audio('/content/click2.mp3');

document.getElementById('hoverSound').addEventListener('mouseover', function() {
    hoverAudioClip.play();
});

let clickAudioClip = new Audio('/content/hover.mp3');
document.getElementById('clickSound').addEventListener('click', function() {
    let image = document.getElementById('imageToScale');
    let button = document.getElementById('scaleButton');
    clickAudioClip.play();
    button.addEventListener('click', function() {
        // Increase the scale of the image by 15%
        image.style.transform = 'scale(1.15)';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    let clouds = document.querySelectorAll('.cloud');

    // Randomize properties of each cloud
    clouds.forEach(cloud => {
        // Randomize the left position (0% to 90%)
        cloud.style.left = Math.random() * 90 + '%';

        // Randomize the size (50% to 150%)
        cloud.style.width = (Math.random() * 100 + 50) + '%';

        // Randomize the animation duration (3s to 7s)
        cloud.style.animationDuration = (Math.random() * 10 + 3) + 's';

        // Randomize the top starting position (-120% to -20%)
        cloud.style.top = (Math.random() * -100 - 20) + '%';
    });
});

if (window.innerWidth <= 800 && window.innerHeight <= 600) {
    // Likely a mobile device
    window.location.href = "/pages/mobile_not_supported.html";
}

