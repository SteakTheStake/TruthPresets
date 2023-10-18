let hoverAudioClip = new Audio('/content/click2.mp3');

document.getElementById('hoverImage').addEventListener('mouseover', function() {
    hoverAudioClip.play();
});

let clickAudioClip = new Audio('/content/hover.mp3');
document.getElementById('clickImage').addEventListener('click', function() {
    clickAudioClip.play();
});
