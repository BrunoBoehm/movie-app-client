// const is an object here {}
const MovieService = {
    fetchMovies: () => {
        return fetch('/movies')
            .then(response => response.json())
    }
}

export default MovieService;