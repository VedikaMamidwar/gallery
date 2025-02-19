function changeColor() {
    document.body.style.background = `linear-gradient(to right, ${getRandomColor()}, ${getRandomColor()})`;
}

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function showGallery() {
    document.getElementById("welcome-screen").classList.add("hidden");
    document.getElementById("gallery-container").classList.remove("hidden");
}
