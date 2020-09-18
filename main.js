let pianoKeys = new Set('ASDFGHJWETYU');

document.addEventListener("keypress", function (e) {
    if (pianoKeys.has(e.key.toUpperCase())) {
        new Audio("piano_sounds/" + e.key.toUpperCase() + ".mp3").play();
    }
})