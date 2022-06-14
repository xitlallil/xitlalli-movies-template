const Home = (props) => {
  console.log("props", props);
  return (
    <div className="homePage">
      <div className="movie-cards">
        <label className="searchLabel">Search</label>
        <form className="search-movies">
          <i class="fa fa-search icon"></i>
          <input type="text" id="moviesToAdd"></input>
          <button type="submit"> Search</button>
        </form>

        <div className="card-wrapper">
          {props.movies.map((movie, key) => {
            return (
              <div key={key} class="flex-container">
                <div>
                  <img src={movie.Poster} alt="movie"></img>
                </div>
                <p>{movie.Title}</p>
                <p className="description">{movie.Plot}</p>
                <p>{movie.Released}</p>
              </div>
            );
            // console.log(props);
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
