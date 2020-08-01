$(document).ready(function () {
  $(".dropdown-trigger").dropdown();
  $("select").formSelect();

    // input questions and options on search page
    $('select').attr("class", "browser-default");
    // mobile collapse nav bar on result page
    $('.sidenav').sidenav();

     // API call to get dog picture
     let dogQueryURL = "https://dog.ceo/api/breeds/image/random"
     function dogPicture() {
         $.ajax({
             url: dogQueryURL,
             method: "GET"
         })
             .then(function (response) {
                 console.log(dogQueryURL);
                 console.log(response);
             });
     }
     // need to call the function
     dogPicture();

  });
