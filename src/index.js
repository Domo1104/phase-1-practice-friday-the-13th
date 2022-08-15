const fetchMovies = () => {
    fetch("http://localhost:3000/movies")
    .then(res => (res.json()))
    .then(data => {
        const movieList = document.querySelector("#movie-list")
        data.forEach((movie) => {
            const image = document.createElement("img")
            image.src = movie.image
            movieList.appendChild(image)
        })
        const firstMovie = data[0]
        const movieImage = document.querySelector("detail-image")
        const movieTitle = document.querySelector("#title")
        const movieYear = document.querySelector("#year-released")
        const movieDescription = document.querySelector("#description")
        const movieWatch = document.querySelector("#watched")
        const bloodAmount = document.querySelector("#amount")


        console.log(firstMovie)
    })
}

document.addEventListener("DOMContentLoaded", fetchMovies);



// const init = () => {
//     const inputForm = document.querySelector('form');
//     inputForm.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const input = document.querySelector('input#searchByID')

//         fetch(`http://localhost:3000/movies/${input.value}`)
//         .then(resp => (resp.json()))
//         .then(data => {
//             const title = document.querySelector('section#movieDetails h4');
//             const summary = document.querySelector('section#movieDetails p');

//             title.innerText = data.title;
//             summary.innerText = data.summary;
//         })
//     })
// }

// document.addEventListener("DOMContentLoaded", init);