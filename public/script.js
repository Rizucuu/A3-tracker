//get the input from multiple genres selection tags
const tagsInput = document.getElementById("tags");
const tagify = new Tagify(tagsInput, {
    whitelist: ['Science Fiction', "Crime", "Drama", "Action", "Fantasy", "Comedy", "Horror", "Romance", "Sports", "Thriller", "Mystery", "War", "Western"], // whitelist of all available film genres
    maxTags: 13,
    dropdown: {
      enabled: 0, // Enable the dropdown
      classname: "tags-drop", //classname for the dropdown list
      maxItems: 13, // Maximum number of suggestions to display
      closeOnSelect: false // Keep the dropdown open after selecting a suggestion
    }
});

//Create a function to add the new film entry to the array
function addFilm(name, directors, characters, genres, rating, review) {
    // Create the object to store the parameters and informations of a film entry
    let film = {
        name,
        directors,
        characters,
        genres,
        rating,
        review,
        id: Date.now(),//automatically generating an unique identifier for the new entry
        date: new Date().toISOString(),//automatically record the date when the entry is added
    }
    console.log(genres);

    //fetching and parse a string from localStorage into js structure
    let localFilms = JSON.parse(localStorage.getItem('films'));
    //if there's nothing in the localStorage, overwrite it with a list containig the current film entry
    if (localFilms == null) {
        localFilms = [film];
    } else {
        //Check if there's already a film with the same ID exited
        if (localFilms.find(element => element.id === film.id)) {
            console.log('Task ID already exists');//log an error message
        } else {
            localFilms.push(film);//otherwise add the new entry to localStorage
        }
    }
    //Turn the array into a string to store in localStorage
    localStorage.setItem('films', JSON.stringify(localFilms));

    displayFilms();
}

//Create variables to hold HTML elements using DOM
const form = document.getElementById('form-container');
//new variable to hold the carousel list that displays new film items
const filmlist = document.getElementsByClassName('splide__list')[0];

//A function that loops through localStorage to display all the stored film entries
function displayFilms() {
    //clear the HTML list first
    filmlist.innerHTML = '';
    //Fetch and parse film entries array from localStorage
    let localFilms = JSON.parse(localStorage.getItem('films'));
    //Make sure localStorage is not empty
    if (localFilms !== null) {
        //align image to the first selected genre of the film item
        localFilms.forEach(function(film) {
            let filmImage = null;
            switch (film.genres[0]) {
                case 'Action':
                    filmImage = './images/thumbnails/action.png'
                    break;
                case 'Comedy':
                    filmImage = './images/thumbnails/comedy.png'
                    break;
                case 'Crime':
                    filmImage = './images/thumbnails/crime.png'
                    break;
                case 'Drama':
                    filmImage = './images/thumbnails/drama.png'
                    break;
                case 'Fantasy':
                    filmImage = './images/thumbnails/fantasy.png'
                    break;
                case 'Horror':
                    filmImage = './images/thumbnails/horror.png'
                    break;
                case 'Mystery':
                    filmImage = './images/thumbnails/mystery.png'
                    break;
                case 'Romance':
                    filmImage = './images/thumbnails/romance.png'
                    break;
                case 'Science Fiction':
                    filmImage = './images/thumbnails/scifi.png'
                    break;
                case 'Sports':
                    filmImage = './images/thumbnails/sport.png'
                    break;
                case 'Thriller':
                    filmImage = './images/thumbnails/Thriller.png'
                    break;
                case 'War':
                    filmImage = './images/thumbnails/war.png'
                    break;
                case 'Western':
                    filmImage = './images/thumbnails/western.png'
                    break;
                default:
                    filmImage = './images/thumbnails/western.png'
                    break;
            }
            //Create items for the DOM and add to the display list
            let item = document.createElement('li');
            item.setAttribute('data-id', film.id);//assign id to the item so it can be identified and deleted
            item.setAttribute('class', 'splide__slide');//set the class name so it can be styled by glide.js
            item.innerHTML = `<h2>${film.genres}</h2><h2>${film.rating}</h2><img src='${filmImage}' width='170' height='250'/><h1>${film.name}</h1><h2>Directed by: <strong>${film.directors}</strong></h2>
            <h2>Fave Character(s): <strong>${film.characters}</strong></h2><p class='review'>${film.review}</p><p class='date'>${film.date}</p>`;
            filmlist.appendChild(item);

            //Clear the value of the input once the task has been added to the page
            form.reset();

            //Setup delete button DOM elements
            let delButton = document.createElement('button');
            let delButtonText = document.createTextNode('Delete');
            delButton.appendChild(delButtonText);
            item.appendChild(delButton); //Adds a delete button to every film entry

            //Listen for when the delete button is clicked
            delButton.addEventListener('click', function (event) {
                localFilms.forEach(function (taskArrayElement, taskArrayIndex) {
                    if (taskArrayElement.id == item.getAttribute('data-id')) {
                        localFilms.splice(taskArrayIndex, 1)
                    }
                })
                //Update localStorage with the newly spliced array
                localStorage.setItem('tasks', JSON.stringify(localFilms));
                //remove the film item from the page when delete button is clicked
                item.remove();
            })
        })//Closing brackets for for loop
    }//Closing bracket for if statement
}

// change the display mode of the input form so it appears
let open = document.getElementById('open');
console.log(open);
open.addEventListener("click", function(event) {
    document.getElementById('input').style.display = 'block';
    document.body.style.backgroundColor = 'rgb(0,0,0,0.5)'; //add transparent background
})

//When save button is clicked, hide the input form and store the new entry to the local storage
form.addEventListener('submit', function (event) {
    event.preventDefault(); //stop the event from reloading the page and send out the information by default
    document.getElementById('input').style.display = 'none';//hide the form
    document.body.style.backgroundColor = 'rgb(0,0,0,0)';//get rid of the background color
    const tagsArray = tagify.value.map((tag) => tag.value); //extract the selected genre selections as an array
    //call the function to store the new entry 
    addFilm(
        form.elements.filmName.value,
        form.elements.director.value,
        form.elements.character.value,
        tagsArray,
        form.elements.rating.value,
        form.elements.review.value,
        )
    console.log(tagsArray);
})

//make sure other film entries will still be shown when the page get refreshed
displayFilms();

//function that controls the overview section to slide up/down
function slideUp(el) {
    var elem = document.getElementById(el);
    elem.style.transition = 'all 1s ease-in-out';
    elem.style.transform = 'translateY(-245%)';//vertically upward
}

function slideDown(el) {
    var elem = document.getElementById(el);
    elem.style.transition = 'all 1s ease-in-out';
    elem.style.transform = 'translateY(-140%)';//vertically downward
}