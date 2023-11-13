// Lyssnar på knapptryck
// document.body.addEventListener('load', addTvProgramToIndexSite);
// document.getElementById('buttonSave').addEventListener('click', searchProgram);

// Kör funktion vid laddning av index-sida
addTvProgramToIndexSite();

// Funktioner //

// Kollar om det finns några sparade filmer och lägger dem i varsin div
function addTvProgramToIndexSite() {

    // Skapa kontstanter till foreach-loop
    const movieTemplate = document.querySelector('[movieTemplate]');        // Konstant för template (i index.html).
    const movieCollections = document.querySelector('[movieCollections]');  // Konstant för div som template-kloner ska placers i (i index.html).
    const parsedMovies = JSON.parse(localStorage.getItem('movies'));        // Hämta sträng från localStorage och konvertera till object.

    // Foreach-loop som klonar template och lägger in titel, beskrivning och åldersgräns för varje element i objektet (från localStorage) 
    parsedMovies.forEach(element => {
        const movie = movieTemplate.content.cloneNode(true).children[0];     // Klona template. Children 0 är första diven i template som har class="movie".
        const title = movie.querySelector('[title]');                           
        const description = movie.querySelector('[description]');
        const age_limit = movie.querySelector('[age_limit]');
        title.textContent = element.title;
        description.textContent = element.description;
        age_limit.textContent = element.age_limit;
        movieCollections.append(movie);
    });
}