// set variables
$(document).ready(function () {
    var yesEighteen = document.querySelector("a.age-yes");
    var noEighteen = document.querySelector("a.age-no");
    var yesAnimal = document.querySelector("a.animal-yes");
    var iAmEighteen = false;
    var iLikeAnimals = false;

    // scroll reveal stylings
    var slideUp = {
        distance: '150%',
        origin: 'bottom',
        opacity: null
    };
    
    ScrollReveal().reveal('.card', slideUp);
    // event listener for the yes button when asked age
    yesEighteen.addEventListener("click", function () {
        iAmEighteen = true;
        // brings user to search page if both yes buttons were clicked
        if (iAmEighteen === true && iLikeAnimals === true) {
            window.location.replace("./search.html");
            $(this).addClass("true");
        }
    });
    // event listener to send user to under18 page 
    noEighteen.addEventListener("click", function () {
        window.location.replace("./under18.html");
    });
    // event listener for the yes button when asked if they like animals
    yesAnimal.addEventListener("click", function () {
        iLikeAnimals = true;
        // brings user to search page if both yes buttons were clicked
        if (iAmEighteen === true && iLikeAnimals === true) {
            window.location.replace("./search.html");
            $(this).addClass("true");
        }
    });

    
});
