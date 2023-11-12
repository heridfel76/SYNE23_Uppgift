// Lyssnar på knapptryck
document.getElementById('buttonSave').addEventListener('click', saveMovie);
document.getElementById('buttonList').addEventListener('click', showMovies);
document.getElementById('buttonDelete').addEventListener('click', deleteMovies);


// Funktioner //

//Spara film till localStorage
function saveMovie() {

    // Skapar en variabel som är ett objekt (titel, beskrivning, åldersgräns)
    let newMovie = {
        "title": document.getElementById('inputTitle').value,
        "description": document.getElementById('inputDescription').value,
        "age_limit": document.getElementById('inputAge').value,
    }

    //  Hämtar data från localStorage, JSON för att omvandla från sträng till objekt, och tillbaka från objekt till sträng
    let movies = localStorage.getItem('movies');              // Hämtar sträng från localStorage till variabel movies
    movies = movies ? JSON.parse(movies) : [];                // Gör om sträng till objekt
    movies.push(newMovie);                                    // Lägg till nytt objekt i variabeln movies
    localStorage.setItem('movies', JSON.stringify(movies));   // Gör om variabeln movies till en sträng och skicka till localstorage

    // Rensar värden i de tre input-fälten
    document.getElementById('inputTitle').value = '';
    document.getElementById('inputDescription').value = '';
    document.getElementById('inputAge').value = '';
}

// Visar filmer sparade i localStorage om det finns
function showMovies() {
    const movies = localStorage.getItem('movies');
    if (movies) {
        const parsedMovies = JSON.parse(movies);
        if (parsedMovies.length > 0) {
            parsedMovies.forEach(element => {
                alert('Title: ' + element.title + '\nDescription: ' + element.description + '\nAge limit: ' + element.age_limit);    
            });
            
        }
        else {
            alert('Inga filmer hittade');
        }
    }
    else {
        alert('Det finns inga filmer sparade.');
    }
}

function deleteMovies() {
    localStorage.removeItem('movies');
    alert('Alla filmer raderade!')
}