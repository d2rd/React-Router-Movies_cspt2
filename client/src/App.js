import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div className="App">
        <SavedList list={this.state.savedList} />
        <nav>
        </nav>
        Replace this Div with your Routes
        <Route exact path="/" component={ MovieList } />
        <Route path="/Movies/:id" component={ Movie } />
      </div>
    );
  }
}
