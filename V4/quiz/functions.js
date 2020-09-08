function closeTab() {
    window.close()
}

function determineScreensizeQuiz() {
    if (screen.width >= 699) {
        var y = document.getElementById("close");
        y.style.visibility = "hidden";
    }
}