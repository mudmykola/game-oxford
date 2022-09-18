let regModal = document.getElementById("regModal");
let regBtn = document.getElementById("regBtn");
let regMob = document.getElementById("regMob");
let regClose = document.getElementsByClassName("reg-close")[0];


regBtn.onclick = function() {
    regModal.style.display = "block";
}
regMob.onclick = function() {
    regModal.style.display = "block";
}

regClose.onclick = function() {
    regModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == regModal) {
        regModal.style.display = "none";
    }

}
