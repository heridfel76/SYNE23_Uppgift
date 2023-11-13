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

    // Meddelande till användare
    alert('tv-program sparat');

    // Kalla på program som lägger till tv-program på index.html
    addTvProgramToIndexSite(movies);
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
    let text = "Vill du verkligen radera alla tv-program?\n\nTryck på OK för att radera.\nTryck på avbryt för att ångra.";
    if (confirm(text) == true) {
        localStorage.removeItem('movies');
        alert('Alla tv-program raderade!');
    }
    else {
        alert('Åtgärden avbröts! (inga tv-program raderade)');
    }
}

function addTvProgramToIndexSite(movies) {
    

    
    // const movies = localStorage.getItem('movies');
    // if (movies) {
    //     const parsedMovies = JSON.parse(movies);
    //     if (parsedMovies.length > 0) {
    //         parsedMovies.forEach(element => {
    //             let newParagraph = newDiv.createElement('p');
    //             newParagraph = ('Title: ' + element.title + '\nDescription: ' + element.description + '\nAge limit: ' + element.age_limit);
    //         });

    //     }
    //     else {
    //         alert('Inga filmer hittade');
    //     }
    // }
    // else {
    //     alert('Det finns inga filmer sparade.');
    // }
    newDiv = document.getElementById('tv-program').createElement('div');
    movies.forEach(element => {
        let newParagraph = newDiv.createElement('p');
        newParagraph.innerHTML = element.value
    });


    // let listProgram = document.getElementById('tv-program');
    // listProgram.innerText = "";

    // const movies = localStorage.getItem('movies');
    // if (movies) {
    //     const parsedMovies = JSON.parse(movies);
    //     if (parsedMovies.length > 0) {
    //         parsedMovies.forEach(element => {
    //             let newList = document.createElement('li');
    //             newList.textContent = "Titel: " + element.title + ".\nBeskrivning: " + element.description + ".\nÅldesrgräns: " + element.age_limit + ".";
    //             listProgram.appendChild(lista);
    //         });

    //     }
    //     else {
    //         alert('Inga filmer hittade');
    //     }
    // }
}