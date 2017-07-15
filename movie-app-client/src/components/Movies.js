import React from 'react';

const Movies = ({movies}) => {
    const renderMovies = movies.map(movie =>
        <li key={movie.id}>{movie.title}</li>
    )

    return (
        <ul>
            {renderMovies}
        </ul>
    )
}

export default Movies;