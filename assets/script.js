
    
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