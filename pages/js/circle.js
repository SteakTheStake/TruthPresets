var selectorButton = document.getElementById("weapon-selector-button");
var selectorModal = document.getElementById("weapon-selector-wrapper");
var currentWeapon = document.getElementById("current-weapon");
var appInfo = document.getElementById("app-info");

var hoveredWeaponName = document.getElementById("hovered-weapon-name");
var hoveredWeaponDamage = document.getElementById("damage");
var hoveredWeaponFireRate = document.getElementById("fire-rate");
var hoveredWeaponAccuracy = document.getElementById("accuracy");
var hoveredWeaponRange = document.getElementById("range");

selectorModal.classList.add("active");
currentWeapon.style.filter = "blur(5px)";
appInfo.style.filter = "blur(5px)";

selectorButton.addEventListener("click", function() {
    if(selectorModal.style.display === "block") {
        selectorModal.classList.remove("active");
        currentWeapon.style.filter = "none";
        appInfo.style.filter = "none";
    } else {
        selectorModal.classList.add("active");
        currentWeapon.style.filter = "blur(5px)";
        appInfo.style.filter = "blur(5px)";
    }
});

function mouseoverWeapon(element){
    hoveredWeaponName.textContent = element.dataset.weapon;
    hoveredWeaponDamage.style.width = element.dataset.damage;
    hoveredWeaponFireRate.style.width = element.dataset.fireRate;
    hoveredWeaponAccuracy.style.width = element.dataset.accuracy;
    hoveredWeaponRange.style.width = element.dataset.range;
}

function onmouseoutWeapon(){
    hoveredWeaponName.textContent = "Select Preset";
    hoveredWeaponDamage.style.width = "0%";
    hoveredWeaponFireRate.style.width = "0%";
    hoveredWeaponAccuracy.style.width = "0%";
    hoveredWeaponRange.style.width = "0%";
}

function changeCurrentWeaponWith(element) {
    var currentWeaponName = document.getElementById('current-weapon-name');
    var currentWeaponImage = document.getElementById('current-weapon-image');

    var activeWeapon = document.getElementsByClassName('active-weapon')[0];

    activeWeapon.classList.remove('active-weapon');

    currentWeaponName.innerHTML = element.dataset.weapon;
    currentWeaponImage.src = element.dataset.image;

    element.classList.add("active-weapon");

    selectorModal.classList.remove("active");
    currentWeapon.style.filter = "none";
    appInfo.style.filter = "none";
}