// Lyssnar på knapptryck
document.getElementById('buttonSave').addEventListener('click', saveMovie);
document.getElementById('buttonList').addEventListener('click', showMovies);
document.getElementById('buttonDelete').addEventListener('click', deleteMovies);


// FUNKTONER //

// Spara film till localStorage.
function saveMovie() {

    // Konstanter för de tre fälten.
    const title = document.getElementById('inputTitle').value;
    const description = document.getElementById('inputDescription').value;
    const age_limit = document.getElementById('inputAge').value;

    // If-sats för att inget fält lämnas tomt. Annars spara till localStorage.
    if (title == "" || description == "" || age_limit == "") {
        alert('Alla tre fälten ovan måste vara ifyllda för att kunna spara filmen.');
    }
    else {
        // Skapar en variabel som är ett objekt (titel, beskrivning, åldersgräns)
        let newMovie = {
            "title": title,
            "description": description,
            "age_limit": age_limit,
        }

        // Hämtar data från localStorage, JSON för att omvandla från sträng till array av object, och tillbaka till sträng
        let movies = localStorage.getItem('movies');              // Hämtar sträng från localStorage till variabel movies
        movies = movies ? JSON.parse(movies) : [];                // Gör om sträng till array av objekt, eller tom array om inget finns sparat sedan tidigare
        movies.push(newMovie);                                    // Lägg till nytt objekt i array
        localStorage.setItem('movies', JSON.stringify(movies));   // Gör om variabeln movies till en sträng och skicka tillbaka localstorage

        // Rensar värden i de tre input-fälten
        document.getElementById('inputTitle').value = '';
        document.getElementById('inputDescription').value = '';
        document.getElementById('inputAge').value = '';

        // Meddelande till användare
        alert('Film sparad!');
    }
}

// Visar filmer sparade i localStorage om det finns några filmer
function showMovies() {
    const movies = localStorage.getItem('movies');
    if (movies) {
        const parsedMovies = JSON.parse(movies);
        if (parsedMovies.length > 0) {
            parsedMovies.forEach(movie => {
                alert('Title: ' + movie.title + '\nDescription: ' + movie.description + '\nAge limit: ' + movie.age_limit);
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

// Raderar alla filmer från localStorage
function deleteMovies() {
    let text = "Vill du verkligen radera alla filmer?\n\nTryck på OK för att radera.\nTryck på avbryt för att ångra.";
    if (confirm(text) == true) {
        localStorage.removeItem('movies');
        alert('Alla filmer raderades!');
    }
    else {
        alert('Åtgärden avbröts! Inga filmer raderades.');
    }
}