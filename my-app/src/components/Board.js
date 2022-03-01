import React, { Component } from "react";
import "../services/fakeMovieService";
import { getMovies } from "../services/fakeMovieService";

class MovieTable extends Component {
   state = {
   movies: getMovies()
};

render() {
   return (<table className="table">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Genre</th>
        <th scope="col">Stock</th>
        <th scope="col">Rate</th>
        <th> </th>
      </tr>
    </thead>
    <tbody>
      {this.state.movies.map(movies => (
        <tr key={movies._id}>
          <td> {movies.title} </td>
          <td> {movies.genre.name}</td>
          <td> {movies.numberInStock} </td>
          <td> {movies.dailyRentalRate}</td>
          <td
            onClick={movie => this.handleDelete(movie)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </td>
        </tr>
      ))}
    </tbody>
  </table>);
}}

 export default MovieTable;
