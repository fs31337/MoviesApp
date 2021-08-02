import React, {useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Buscador.css";
import {addMovieFavorite,getMovies} from '../../actions';
import {ReactComponent as Search} from './search.svg';


function Buscador(props) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.getMovies(title);
  }
    return (
      <div className="buscador-component">
        <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              className="buscador-input"
              placeholder ="Buscar..."
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => handleChange(e)}
            />
            <div className="line"></div>
          </div>
          <button className="buscador-button-submit" type="submit"><Search className="buscador-lupa"/></button>
        </form>
        <div className="buscador-movies-container"> {
              props.movies && props.movies.map(el =>(
                <div className="buscador-movie" key={el.imdbID}>
                  <Link className="link" to={`/movie/${el.imdbID}`}>
                    <img className="Movie" src={el.Poster}/>
                    <div className="buscador-movie-titulo">{el.Title}</div>
                  </Link>
                  <button className="buscador-favorito-button" onClick={()=> {props.addMovieFavorite({ title: el.Title ,id: el.imdbID});}}><span className="estrella">⭐</span></button>
                </div>
              ))
              }
        </div>
      </div>
    );
}
function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
    getMovies: (title) => dispatch(getMovies(title)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
