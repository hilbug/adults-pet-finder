
$(document).ready(function () {

  //display script
  // input questions and options on search page
  $("select").attr("class", "browser-default");
  // mobile collapse nav bar on result page
  $('.sidenav').sidenav();
  // hide result page
  $('#result').css('display', 'none');

  // page variables
  // drop-downs
  const sexDropdown = $("#sex");
  const houseTrainDropdown = $("#houseTrained");
  const breedDropdown = $("#breed");
  // result fields
  const petName = $("#name-text");
  const petImage = $("#pet-image");
  const petBreed = $("#breed-text");
  const houseTrain = $("#house-trained-text");
  const petLikes = $("#mood-text");


  // API calls 
  // API call to get dog picture
  function dogPicture() {
    $.ajax({
      url: "https://dog.ceo/api/breeds/image/random",
      method: "GET",
    }).then(function (response) {
      petImage.attr("src", response.message);
    });
  }

  function dogPicture() {
    $.ajax({
      url: "function dogPicture() {
    $.ajax({
        url: "http://placegoat.com",
        method: "GET",
      }).then(function (response) {
        petImage.attr("src", response.message);
      });
    }",
      method: "GET",
    }).then(function (response) {
      petImage.attr("src", response.message);
    });
  }

// API call to get cat picture
function catPicture() {
  $.ajax({
    url: "https://api.thecatapi.com/v1/images/search",
    method: "GET",
  }).then(function (response) {
    //response is an array - need to grab the URL value
    petImage.attr("src", response[0].url);
  });
}
// End API calls

// function to populate the picture based on breed selection
function setPicture() {
  console.log(breedDropdown.val());

  if (breedDropdown.val() === "cat") {
    catPicture();
  }

  // else if (breedDropdown.val() === "fox") {
  //   // // Fox
  // }

  else if (breedDropdown.val() === "dog") {
    dogPicture();
  }

  // else if (breedDropdown.val()) === "goat") {
  //   // // Goat
  // }
}

// Function to generate pet details
function generatePetDetails() {
  // Random Name Generator
  // Name Arrays
  let firstName = ["Pamela", "Woody", "Doc", "George", "Bridget", "Buddy", "Harry", "Star", "Diamond", "Rusty", "Darling", "Cherry", "Summer", "Candy", "Ryder", "Homer", "Napoleon", "Dicky", "Daisy", "Maple", "Belle", "Buffy", "Quigley", "Snickers", "Marty", "Severus", "Kitty", "Captain", "Colonel", "Mike", "Bobby", "Scott", "Harvey", "Patty", "Misty", "Rich", "Black", "Jack", "Missy", "Kula", "Harper", "Susie", "Agent", "James", "Willy", "Jackey", "Shish", "Nikki", "Plain", "Jane", "Austin", "Charlie", "Fanny", "Knight", "Darcy", "Ringo", "Paul", "Steveoh", "Snow", "Bugz"];
  let lastName = ["Anderson", "Harrelson", "MacStuffins", "Clooney", "Bardot", "Holly", "Potter", "Glider", "In the rough", "Hunt", "Pricey", "Wood", "Cherri", "D-Lish", "Dude", "Heywood", "Bonaparte", "Salami", "May", "Woodhouse", "Austen", "Slayer", "Blue", "McGee", "McFly", "Snape", "Foxy", "Lance", "Danger", "Starlight", "Sherwood", "Lovejoy", "Black", "Cakes", "Baggins", "Puffy", "Jack", "Jones", "Jackson", "Lee", "Q", "Bond", "Mount", "Menly", "Knobs", "Kebab", "X", "Price", "Dashwood", "Wickham", "Knightley", "Fitz", "Spitz", "Bish", "Dodgy", "Durango", "Starr", "White", "Beevis", "Tootz"];
  // Pick Random Names
  let randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
  let randomLastName = lastName[Math.floor(Math.random() * lastName.length)];

  // Random sex if needed
  let sexOptions = ["male", "female"];
  let randomSexOption = sexOptions[Math.floor(Math.random() * sexOptions.length)];
  // Get Sex selection
  let sexOption = (sexDropdown.val() === "surprise") ? randomSexOption : sexDropdown.val();

  // Random house-trained if needed
  let houseTrained = ["Yes", "No"];
  let randomHouseTrained = houseTrained[Math.floor(Math.random() * houseTrained.length)];
  // Get house-trained selection
  let houseTrainedOption = (houseTrainDropdown.val() === "surprise") ? randomHouseTrained : houseTrainDropdown.val();

  // Random Likes Generator
  // Likes Array
  let likes = ["Long walks on the beach", "Humping the couch", "Sniffing butts", "Tall blondes", "Brunettes", "Dungeons and Dragons", "Harry Potter (only the books)", "Dinner and a movie", "Thic beaches", "Belly rubs", "the red fire hydrant on the corner of Main and Broadway", "rolling in the dirt", "rolling with my homies", "burying myself in the snow", "campfires", "snuggling under the covers", "getting into the trash can", "skinny dipping", "live music", "traveling by train", "howling at the moon", "sticking my head out the car window", "conquering the world", "gazing at the stars", "gardening", "horror flicks", "chick flicks", "bar hopping", "checking out microbreweries", "road trips", "heading to the coast on the weekends", "a round of golf", "going to the dentist", "netflixing and chilling", "living on the edge", "hanging out on the roof", "impromptu music sesh - acoustic guitars only", "peanut butter jelly time", "brushing and flossing...my teeth", "drag racing down Main Street", "paris on the weekends", "seeing London and France", "pinching pennies", "chillin like a villain", "finding a good vegan restaurant", "practicing my down dog", "roaming Central Park in the spring", "running on Dunkin", "lazing on my unicorn float", "lounging by the pool", "chasing pigeons", "visiting my mom", "watching Fuller House on repeat", "dancing in the moonlight", "whistling showtunes", "watching the sun go down", "cruising the Vegas Strip", "going to the car wash", "freezing on 10th Avenue", "running down Thunder Road", "watching the lights go down in the city", "doing Donald Duck impressions"];
  // Pick Random Like
  let randomLike = likes[Math.floor(Math.random() * likes.length)];

  // Text mappings
  // Map name and sex to #name-text
  petName.text(`${randomFirstName} ${randomLastName}, ${sexOption}`);
  // Map breed to #breed-text - upper case first letter
  petBreed.text(breedDropdown.val().substr(0, 1).toUpperCase() + breedDropdown.val().substr(1));
  // Map to #houseTrained-text - upper case first letter
  houseTrain.text(houseTrainedOption.substr(0, 1).toUpperCase() + houseTrainedOption.substr(1));
  // Map to likes to #mood-text - upper case first letter
  petLikes.text(randomLike.substr(0, 1).toUpperCase() + randomLike.substr(1));


  // Console logs because it's not mapping to the page...
  console.log("random name");
  console.log(`${randomFirstName} ${randomLastName}, ${sexOption}`);
  console.log($("#name"));
  console.log("breed");
  console.log(breedDropdown.val());
  console.log("house trained");
  console.log(houseTrainedOption);
  console.log("random like");
  console.log(randomLike);
  console.log($("#mood"));
}

// listen for search click to populate the picture?
$(".btn").on("click", function (event) {
  event.preventDefault();
  setPicture();
  generatePetDetails();
  console.log(event);
  // hide search
  $('#searchcontainer').hide();
  // shows result
  $('#result').css('display', 'block');
});

$("form.search-form").on("submit", function (event) {
  event.preventDefault();
});
});
