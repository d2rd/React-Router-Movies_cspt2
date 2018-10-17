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
        <div className="header">
          <h1>D2rd Movie Cards</h1>
        </div>
        <nav>
        </nav>
        MVP TASKS:
        <l>
          <li>[] Make the card in `MovieList` a link to movie in `:id`</li>
          <li>[] Clicking a card goes to `/movies/id` to see details for selected movie.</li>
          <li>[] Modify line 13 of `Movie.js` in to accept the correct id for the movie selected</li>
          <li>[] Add functionality so `Home` button on `SavedList` component navigates back to home.</li>
          <p>STRETCH</p>
          <li>[] Refactor so that our code is DRY.</li>
          <li>[] Add `Save Movie` funcitonality.</li>
          <li>[] Turn your Saved Movie list into `Link`s.</li>
          <li>[] Turn your Saved Movie `Link`s into `NavLink`s.</li>
          <li>** make this list: 1) toggle show/hide 2) A reusable component that's easily updated **</li>
        </l> 
        
      
        <SavedList list={this.state.savedList} />
        
        <Route exact path="/" component={ MovieList } />
        <Route path="/Movies/:id" component={ Movie } />
      </div>
    );
  }
}
