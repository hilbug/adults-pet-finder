$(document).ready(function () {

  // input questions and options on search page
  $('select').attr("class", "browser-default");
  // mobile collapse nav bar on result page
  // $('.sidenav').sidenav();

  // page variables
  const breedDropdown = $("#breed");
  const petImage = $("pet-image");

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
      });
  }

  // if user selects dog, call dog api
  // function to populate the picture
  function setPicture() {
    //let petImg = $(".card-image").children[0];
    
    if (breedDropdown.val() === 2) {
      dogPicture();
      petImage.attr("src", dogURL);
    }
  }
  dogPicture();
  console.log(petImage);

  // listen for search click to populate the picture?
  $(".card-action").on("click", setPicture);
});
