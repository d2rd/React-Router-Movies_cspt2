import React from 'react';

// const MovieCard = props => {
//   return;
// };

// export default MovieCard;

export default (props) => {
  return (
    <div onClick={props.movieClick(props.id)}>
    <p>Id: {props.id}</p>
    <p>Title: {props.title}</p>
    </div>
  )
}