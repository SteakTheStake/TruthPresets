let hoverAudioClip = new Audio('/content/click2.mp3');

document.getElementById('hoverImage').addEventListener('mouseover', function() {
    hoverAudioClip.play();
});

let clickAudioClip = new Audio('/content/hover.mp3');
document.getElementById('clickImage').addEventListener('click', function() {
    clickAudioClip.play();
});


document.addEventListener('DOMContentLoaded', function() {
    let clouds = document.querySelectorAll('.cloud');
    clouds.forEach(cloud => {
        // Randomize the left position (0% to 90%)
        cloud.style.left = Math.random() * 90 + '%';
        // Randomize the size (50% to 150%)
        cloud.style.width = (Math.random() * 100 + 50) + '%';
        // Randomize the animation duration (3s to 7s)
        cloud.style.animationDuration = (Math.random() * 10 + 3) + 's';
        // Randomize the left position (0% to 90%)
        cloud.style.left = Math.random() * 90 + '%';

        // Randomize the top starting position (-120% to -20%)
        // This ensures clouds start off-screen, but you can adjust the range as needed.
        cloud.style.top = (Math.random() * -100 - 20) + '%';
    });
});
