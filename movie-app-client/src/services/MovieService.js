const API_URL = process.env.REACT_APP_API_URL;
// console.log(API_URL);
// .env is given by create-react-app and works just lile ENV['REACT_APP_API_URL'] rails env vars

// const is an object here {}
const MovieService = {
    // or fetchMovies() {
    fetchMovies: () => {
        return fetch(`${API_URL}/movies`)
            .then(response => response.json())
    }
}

export default MovieService;