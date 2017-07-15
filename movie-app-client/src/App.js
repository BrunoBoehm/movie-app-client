import React, { Component } from 'react';
import Movies from './components/Movies';
import MovieService from './services/MovieService';
import './App.css';

// let movies = [
//   {title: "Jurassic Park", id: 1},
//   {title: "The Circle", id: 2},
//   {title: "The Beach", id: 3}
// ]

class App extends Component {
  constructor() {
    super()

    this.state = {
      movies: []
    }
  }

  // lifecycle function, make API call without stopping DOM from rendering
  componentDidMount() {
    MovieService.fetchMovies()
      .then(movies => this.setState({movies}))
      // {movies} equals to:    movies: movies
  }

  // makes the initial render
  render() {
    return (
      <div className="App">
        <div className="navbar">
            <h1>Movies App</h1>
            {/* <Navbar /> */}
        </div>
        <div className="sidebar">
            <h2>Movies List</h2>
            {/* Transmits state movies to the Movies component by the props */}
            <Movies movies={this.state.movies}/>
        </div>
        <div className="main-content">
            {/* <Movie /> */}
        </div>
      </div>
    );
  }
}

export default App;
