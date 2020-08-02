$(document).ready(function () {
  // input questions and options on search page
  $("select").attr("class", "browser-default");
  // mobile collapse nav bar on result page
  $('.sidenav').sidenav();

  // hide result page
  // $('#result').css('display', 'none');

  // this code needs to be added within a on click of submit search button event
  // // shows result
  // $('#result').css('display', 'block');
  //this can also be added to the submit function if we want to hide the search questions
  // hide search
  // $('#seachContainer').css('display', 'none');

  // page variables
  const breedDropdown = $("#breed");
  const petImage = $("#pet-image");

  // API call to get dog picture

  // let dogPicURL = "";
  function dogPicture() {
    $.ajax({
      url: "https://dog.ceo/api/breeds/image/random",
      method: "GET",
    }).then(function (response) {
      console.log(response);
      petImage.attr("src", response.message);
    });
  }

  // API call to get cat picture
  function catPicture() {
    $.ajax({
      url: "https://api.thecatapi.com/v1/images/search",
      method: "GET",
    }).then(function (response) {
      console.log(response);
      //response is an array - need to grab the URL value
      console.log(response[0].url);
      petImage.attr("src", response[0].url);
    });
  }

  // function to populate the picture based on breed selection
  function setPicture() {
    console.log(breedDropdown.val());
    //let petImg = $(".card-image").children[0];

    if (breedDropdown.val() === "cat") {
      catPicture();
    }

    // else if (breedDropdown.val() === "2") {
    //   // // Fox
    // }
    else if (breedDropdown.val() === "dog") {
      dogPicture();
    }

    // else if (breedDropdown.val()) === "4") {
    //   // // Goat
    // }
    console.log("set picture ran");
  }

  // listen for search click to populate the picture?
  $(".btn").on("click", function (event) {
    event.preventDefault();
    setPicture();
    console.log(event);
  });

  $("form.search-form").on("submit", function (event) {
    event.preventDefault();
  });
});
