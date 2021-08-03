import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";
import "./Movie.css";

// class Movie extends React.Component {
//     componentDidMount(){
//         const movieId = this.props.match.params.id;
//         this.props.getMovieDetail(movieId);
//     }
function Movie({movieDetail,getMovieDetail,match}) {
  useEffect(() => {
    const movieId = match.params.id;
    getMovieDetail(movieId);
  }, []);
  return (
    <article className="movie-detail">
      <figure>
        <img src={movieDetail.Poster}></img>
      </figure>
      <div className="data">
        <h1>{movieDetail.Title}</h1>
        <h3>{movieDetail.Year}</h3>
        <p>{movieDetail.Genre}</p>
        <p className="plot">{movieDetail.Plot}</p>
        <p>{movieDetail.Awards}</p>
      </div>
    </article>
  );
}
function mapSateToProps(state) {
  return {
    movieDetail: state.movieDetail,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: (movie) => dispatch(getMovieDetail(movie)),
  };
}

export default connect(mapSateToProps, mapDispatchToProps)(Movie);
