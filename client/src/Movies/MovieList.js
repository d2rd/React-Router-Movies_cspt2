import React, { Component } from "react";
import axios from "axios";
import movieData from './movies';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      highlightMovie: false, // same as Friends.js
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/movies")
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  movieClick = (id) => {
    return () => {
      this.setState(highlightMovie, id)
    }
  }

  render() {
    let movies = movieData if(this.state.hightlightMovie !== false); {
      movies = movies.filter( item => {
        return item === this.state.highlightMovie
      })
    }  // same as Friends.js

    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}
// Add movie link helper to function below read Julie's notes
// ☞ d01526e1-bf4a-4f30-9136-dfc914c76758
function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}
