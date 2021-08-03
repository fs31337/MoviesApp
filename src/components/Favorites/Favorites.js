import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeMovieFavorite } from "../../actions";
import "./Favorites.css";

function ConnectedList(props) {
    return (
      props.moviesFavourites.length >0 ? (
      <div className="Favoritas">
        <h2>Películas Favoritas</h2>
        <div>
          {props.moviesFavourites.map((el) => (
            <div className="Favoritas-li">
              <Link to={`/movie/${el.id}`} className="Favoritas-link">{el.title}</Link>
              <button onClick={() => props.removeMovieFavorite(el.id)}>❌</button>
            </div>
          ))}
        </div>
      </div>) : <div className="Favoritas" ><br/> No tienes Favoritas aún :(</div>
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
