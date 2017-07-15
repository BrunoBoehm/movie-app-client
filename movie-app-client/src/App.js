import React, { Component } from 'react';
import Movies from './components/Movies';
import './App.css';

let movies = [
  {title: "Jurassic Park", id: 1},
  {title: "The Circle", id: 2},
  {title: "The Beach", id: 3}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
            <h1>Movies App</h1>
            {/* <Navbar /> */}
        </div>
        <div className="sidebar">
            <h2>Movies List</h2>
            <Movies movies={movies}/>
        </div>
        <div className="main-content">
            {/* <Movie /> */}
        </div>
      </div>
    );
  }
}

export default App;
