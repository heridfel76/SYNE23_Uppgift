// KONSTANTER //
const movieTemplate = document.querySelector('[movieTemplate]');        // Konstant för template som ska användas som mall för kloning.
const movieCollections = document.querySelector('[movieCollections]');  // Konstant för div som template-kloner ska placers i.
const movieSearch = document.querySelector('[movieSearch]');            // Konstant för sökruta
const parsedMovies = JSON.parse(localStorage.getItem('movies'));        // Konstant för filmer. Hämtar sträng från localStorage och konverterar till array av object.

// VARIABLER //
let movies = [];                                                        // Tom array. Byggs på nedan med film-objekt, om de finns upplagda.


// KLONING, OCH LÄGG TILL OBJEKT I VARIABELN MOVIES//

// Lägger in titel, beskrivning och åldersgräns för varje "film"-objekt (i localStorage) till template.
// Templates klonas med innehåll och lägger sig som divs under div:en [movieCollections].
// Returnerar även titel och beskrivning från varje filmobjekt till variabeln/arrayen movies. Används till sökning/filtrering nedan
movies = parsedMovies.map(movie => {                                                    
    const movieNewDiv = movieTemplate.content.cloneNode(true).children[0];              // Konstant för ny div som ska klonas. Children 0 för att "peka" på första diven i template.
    const title = movieNewDiv.querySelector('[title]');                                 // Konstant för div [title] i template.
    const description = movieNewDiv.querySelector('[description]');                     // Konstant för div [description] i template.
    const age_limit = movieNewDiv.querySelector('[age_limit]');                         // Konstant för div [age_limit] i template.
    title.textContent = movie.title;                                                    // Lägger till text, titel från localStorage, i div [title] i template.
    description.textContent = movie.description;                                        // Lägger till text, beskrivning från localStorage, i div [description] i template.
    age_limit.textContent = "Åldersgräns: " + movie.age_limit;                          // Lägger till text. åldersgräns från localStorage, i div [age_limit] i template.
    movieCollections.append(movieNewDiv);                                               // Klonar template med ifylld text till ny div som läggs under div "movieCollections".
    
    // Returnerar titel, beskrivning och åldersgräns från "ifylld" template till arrayen movies.
    return { title: movie.title, description: movie.description, age_limit: movie.age_limit, element: movieNewDiv } 
});


// SÖKNING/FILTRERING //

// Lyssna på input i sökruta. Kör i så fall funktion.
movieSearch.addEventListener("input", (e) => {

    // Varje tecken som matas in hamnar i denna konstant, görs om till små bokstäver för bättre sökresultat.
    const value = e.target.value.toLowerCase();

    // För varje "film"-objekt i arryren movies, kontrollera om input i sökruta matchar med någon text i titel, beskrivning eller åldersgräns.
    movies.forEach(movie => {

        // Konstant som är sann eller falsk beroende på om input i sökruta finns med i filmens titel, beskrivning eller åldersgräns.
        const isVisible = 
            movie.title.toLowerCase().includes(value) ||
            movie.description.toLowerCase().includes(value) ||
            movie.age_limit.toLowerCase().includes(value);
        
        // Om input i sökruta inte matchar med filmtitel eller beskrivning, dölj "klonad" div/film.
        movie.element.classList.toggle("hide", !isVisible);
    })
})
