$(document).ready(function () {

  // input questions and options on search page
  $('select').attr("class", "browser-default");
  // mobile collapse nav bar on result page
  // $('.sidenav').sidenav();

  // page variables
  const breedDropdown = $("#breed");
  const petImage = $("#pet-image");

  // API call to get dog picture
  let dogQueryURL = "https://dog.ceo/api/breeds/image/random";
  let catQueryURL = "";

  let dogPicURL = "";
  function dogPicture() {
    $.ajax({
      url: dogQueryURL,
      method: "GET"
    })
      .then(function (response) {
        console.log(dogQueryURL);
        console.log(response)
        dogPicURL = response.message;
        petImage.attr("src", dogPicURL);
      });
  }

  // API call to get cat picture
  let catPicUrl = "";
  function catPicture() {
    $.ajax({
      url: "https://api.thecatapi.com/v1/images/search",
      method: "GET"
    })
      .then(function (response) {
        console.log(response);
        //response is an array - need to grab the URL value
        console.log(response[0].url);
        catPicUrl = response[0].url;
      });
  }
  
  // function to populate the picture based on breed selection
  function setPicture() {
    //let petImg = $(".card-image").children[0];

    if (breedDropdown.val(1)) {
      catPicture();
      petImage.attr("src", catPicUrl);
    }

    // else if (breedDropdown.val() === 2) {
    //   // // Fox
    // }

    else if (breedDropdown.val(3)) {
      dogPicture();
    }

    // else if (breedDropdown.val() === 4) {
    //   // // Goat
    // } 
    console.log("set picture ran");
    console.log("dogurl in setpicture: " + dogPicURL);
  }

  // listen for search click to populate the picture?
  $(".btn").on("click", function(event) {
    event.preventDefault();
    setPicture();
    console.log(event);
  });
});
