// Lyssnar på knapptryck
// document.body.addEventListener('load', addTvProgramToIndexSite);
// document.getElementById('buttonSave').addEventListener('click', searchProgram);

// Kör funktion.
addTvProgramToIndexSite();


// Funktioner //

// Kollar om det finns några sparade filmer och lägger dem i nya divs (kloner från en template)
function addTvProgramToIndexSite() {

    // Tre kontstanter till foreach-loop nedan
    const movieTemplate = document.querySelector('[movieTemplate]');        // Konstant för template (i index.html).
    const movieCollections = document.querySelector('[movieCollections]');  // Konstant för div som template-kloner ska placers i (i index.html).
    const parsedMovies = JSON.parse(localStorage.getItem('movies'));        // Hämta sträng från localStorage och konvertera till object.

    // Foreach-loop som lägger in titel, beskrivning och åldersgräns från objekten (från localStorage) i template.
    // Sedan klonas template med innehåll och lägger sig som en div under div [movieCollections] i index.html.
    parsedMovies.forEach(element => {
        const movie = movieTemplate.content.cloneNode(true).children[0];    // Konstant för template som ska klonas. Children 0 för att "peka" på första diven i template.
        const title = movie.querySelector('[title]');                       // Konstant för div [title] i template.
        const description = movie.querySelector('[description]');           // Konstant för div [description] i template.
        const age_limit = movie.querySelector('[age_limit]');               // Konstant för div [age_limit] i template.
        title.textContent = element.title;                                  // Lägger till titel från object i div [title] i template.
        description.textContent = element.description;                      // Lägger till beskrivning från object i div [description] i template.
        age_limit.textContent = "Åldersgräns: " + element.age_limit;        // Lägger till åldersgräns från object i div [age_limit] i template.
        movieCollections.append(movie);                                     // Klonar template till div movieCollections (i index.html).
    });
}