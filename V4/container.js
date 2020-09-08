let language = 'english'

function openQuiz() {
    let quizLink = '';
    switch (language) {
        case 'english':
            quizLink = "quiz/en/index.html";
            break;
        case 'عربى':
            quizLink = "quiz/ar/index.html";
            break;
        case 'русский':
            quizLink = "quiz/ru/index.html";
            break;
        case 'Español':
            quizLink = "quiz/sp/index.html";
            break;
        case 'Français':
            quizLink = "quiz/fr/index.html";
            break;
        case '简体中文':
            quizLink = "quiz/ch/index.html";
            break;    
        case 7:
            quizLink = "quiz/en/index.html";
    }

    console.log(quizLink);

    // if (screen.width <= 699) {
    //     window.open(quizLink, '_blank');
    // } else { 
        //OPEN EMBED ON MOBILE AND DESKTOP (from Naylin's fix)
        location.href = quizLink;
    // }
}

function submitLanguage(event) {
    event.preventDefault();
    console.log(language);
    openQuiz();
}

function setLanguage(event) {
    event.preventDefault();
    language = event.target.value;
    console.log(event.target.value);
}

function hideQuiz() {
    var z = document.getElementById("container");
    z.style.visibility = "hidden";
    // var y = document.getElementById("quiz-show");
    // y.style.visibility = "unset";
}

function showQuiz() { 
    // if (screen.width <= 699) {
    //     window.open('quiz_english/World%20Ozone%20Day%20Quiz%20(Published)/index.html', '_blank');
    // } 
    //No "Show Quiz" on desktop as we want to embed into their site with simple iframe (no pop-over)
    // else {
    //     var z = document.getElementById("container");
    //     z.style.visibility = "unset";
    //     var y = document.getElementById("quiz-show");
    //     y.style.visibility = "hidden";
    // }
}

// Show popover immediatly (as it's in an iframe and only drawing over white now)
function initQuiz() {       
        // Both mobile and DT should get these
        var z = document.getElementById("container");
        z.style.visibility = "unset";
        // var y = document.getElementById("quiz-show");
        // y.style.visibility = "hidden";
        // var x = document.getElementById("quiz-close-button")
        // x.style.visibility = "hidden";
        if (screen.width < 699) {
            // Change to mobile friendly png
            var m = document.getElementById("landing-img");
            m.src = "../assets/landing-mobile.png";
            var n = document.getElementById("popover");
            // MAKE landing-mobile.png FIT ON MOBILE!
        }
}