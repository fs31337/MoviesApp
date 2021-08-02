import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeMovieFavorite } from "../../actions";
import "./Favorites.css";

function ConnectedList(props) {
    return (
      <div className="Favoritas">
        <h2>Películas Favoritas</h2>
        <ul>
          {props.moviesFavourites.map((el) => (
            <li>
              <Link to={`/movie/${el.id}`}>{el.title}</Link>
              <button onClick={() => props.removeMovieFavorite(el.id)}>❌</button>              
            </li>
          ))}
        </ul>
      </div>
    );
  }
function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
    moviesFavourites: state.moviesFavourites,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: (id) => dispatch(removeMovieFavorite(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
