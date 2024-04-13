function opensp() {
    window.open('https://open.spotify.com/', '_blank');
}

var spElement = document.getElementById("sp");
if (spElement) {
    spElement.addEventListener("click", opensp);
}
