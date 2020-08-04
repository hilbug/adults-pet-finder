
$(document).ready(function () {
    var yesEighteen = document.querySelector("a.age-yes");
    var noEighteen = document.querySelector("a.age-no");
    var yesAnimal = document.querySelector("a.animal-yes");
    var iAmEighteen = false;
    var iLikeAnimals = false;
  
    yesEighteen.addEventListener("click", function () {
        iAmEighteen = true;
        console.log(iAmEighteen);
  
        if (iAmEighteen === true && iLikeAnimals === true) {
            window.location.replace("./search.html");
            $(this).addClass("true");
        }
    });
  
    noEighteen.addEventListener("click", function () {
        window.location.replace("./under18.html");
    });
  
    yesAnimal.addEventListener("click", function () {
        iLikeAnimals = true;
        console.log(iAmEighteen);
  
        if (iAmEighteen === true && iLikeAnimals === true) {
            window.location.replace("./search.html");
            $(this).addClass("true");
        }
    });
});