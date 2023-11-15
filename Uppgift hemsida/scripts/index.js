// Konstanter
const movieTemplate = document.querySelector('[movieTemplate]');        // Konstant för template som ska användas som mall för kloning.
const movieCollections = document.querySelector('[movieCollections]');  // Konstant för div som template-kloner ska placers i.
const movieSearch = document.querySelector('[movieSearch]');            // Konstant för sökruta
const parsedMovies = JSON.parse(localStorage.getItem('movies'));        // Konstant för filmer. Hämtar sträng från localStorage och konverterar till array av object.

// Variabel, tom array. Byggs på nedan i programmet med film-objekt, om de finns upplagda.
let movies = [];                                                        

// Lyssna på input i sökruta. Göm filmer som inte innehåller, eller matcher, input. 
movieSearch.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();

    // För varje "film"-objekt i arryren movies, kontrollera om input i sökruta matchar med någon text i titel eller beskrivning.
    movies.forEach(movie => {

        // Konstant som är sann eller falsk beroende på om input i sökruta finns med i filmens titel eller beskrivning.
        const isVisible = 
            movie.title.toLowerCase().includes(value) ||
            movie.description.toLowerCase().includes(value); 
        
        // Om input i sökruta inte matchar med filmtitel eller beskrivning, dölj "klonad" div/film.
        movie.element.classList.toggle("hide", !isVisible);
    })
})

// Foreach-loop som lägger in titel, beskrivning och åldersgräns från objekten (från localStorage) i arrayen movies.
// Template klonas med innehåll och lägger sig som en div under div:en [movieCollections] också.
movies = parsedMovies.map(movie => {                                            
    const movieNewDiv = movieTemplate.content.cloneNode(true).children[0];              // Konstant för template som ska klonas. Children 0 för att "peka" på första diven i template.
    const title = movieNewDiv.querySelector('[title]');                                 // Konstant för div [title] i template.
    const description = movieNewDiv.querySelector('[description]');                     // Konstant för div [description] i template.
    const age_limit = movieNewDiv.querySelector('[age_limit]');                         // Konstant för div [age_limit] i template.
    title.textContent = movie.title;                                                    // Lägger till text, titel från localStorage, i div [title] i template.
    description.textContent = movie.description;                                        // Lägger till text, beskrivning från localStorage, i div [description] i template.
    age_limit.textContent = "Åldersgräns: " + movie.age_limit;                          // Lägger till text. åldersgräns från localStorage, i div [age_limit] i template.
    movieCollections.append(movieNewDiv);                                               // Klonar template med ifylld text till ny div som läggs under div "movieCollections".
    return { title: movie.title, description: movie.description, element: movieNewDiv } // Returnerar titel och beskrivning från "ifylld" template till arrayen movies.
});
