//imports//
import { useEffect, useState } from "react";
import AvatarUpload from "../Components/AvatarUpload";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";


//function component//
function Profile(props) {
  const [userMovies, setUserMovies] = useState({});
  const [newTitle, setNewTitle] = useState("");
  const [formInput, setFormInput] = useState({
    avatar: "",
    name: "",
    country: "",
    stateRegion: "",
    about: "",
    movies: [
      "up", 
      "Frozen"],
  });

  // functions & API calls//
  // handleSubmit/handleChange for forms//
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.value
    setFormInput({...formInput, [event.target.name]: value})
   console.log("formInput", formInput)
    setFormInput({
      avatar: "",
      name: "",
      country: "",
      stateRegion: "",
      about: "",
      movies: [
        "up", 
        "Frozen"],
    });
    
  };

  const handleAvatarChange = (event) => {
    const value = event.target.value;
    setFormInput({ ...formInput, [event.target.name]: value });
  };
  const handleChange = (event) => {
    event.preventDefault();
    const title = event.target.value;
    setNewTitle(title);
    console.log(title, " in handleChange");

  };
 
  const handleMovieSubmit = (event) => {
    event.preventDefault();
    if (!newTitle) return;
    let movieArrayCopy = [...formInput.movies];
    movieArrayCopy.push(newTitle);
    setFormInput({ ...formInput, movies: movieArrayCopy });
    setNewTitle("");
  };

  // const handleRemoveItem = (e) => {
  //   const name = e.target.getAttribute("name")
  //    setMoviesArray(movies.filter(movie => movie !== name));
  //  };

  const selectCountryHandler = (input) => {
    const value = input.target.value;
    setFormInput({ ...formInput, [input.target.name]: value });
  };

  // Have to register the languages you want to use
  countries.registerLocale(enLocale);

  // Returns an object not a list
  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });
  //Return JSX//

  return (
    <div className="profilePage">
      <div className="profileForm">
        <AvatarUpload handleChange={handleAvatarChange} />
        <h1>Create Your Profile</h1>
        <p>
          Your profile is editable after you save and information is not used
          publically.
        </p>

        <Box sx={{}} id="form">
          <FormControl margin="normal" className="name-input">
            <TextField
              label="Name"
              id="outlined basic"
              variant="outlined"
              name="name"
              value={formInput.name}
              onChange={(event) => handleChange(event)}
            />
          </FormControl>

          <div>
            <InputLabel id="country-label">Country</InputLabel>
            <Select
              name="country"
              label="country-label"
              id="country"
              style={{ width: "250px" }}
              value={formInput.country}
              // //will need to assign formInput.country to be the value of selectedCountry in the onSubmit
              onChange={(event) => selectCountryHandler(event)}
            >
              {!!countryArr?.length &&
                countryArr.map(({ label, value }) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
            </Select>
          </div>

          <FormControl margin="normal" fullWidth>
            <TextField
              label="State/Region"
              variant="outlined"
              name="stateregion"
              value={formInput.stateregion}
              onChange={(event) => handleChange(event)}
            />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <TextField
              label="About"
              variant="outlined"
              name="about"
              multiline
              rows={4}
              value={formInput.about}
              onChange={(event) => handleChange(event)}
            />
          </FormControl>
        </Box>

        <Box sx={{}} id="moviesForm">
          <div>
            <h2>What have you been watching?</h2>
            <span>
              Movies listed here will be added to the My Movies page and can be
              removed from your list upon edit.
            </span>
            <h1>Add Movies</h1>
          </div>
          <FormControl margin="normal">
            <TextField
              label="Add Movies"
              variant="outlined"
              name="movies"
              value={newTitle}
              onChange={(event) => handleChange(event)}
            />
          </FormControl>
          <div>
            <Button
              className="add-movies"
              variant="contained"
              onClick={handleMovieSubmit}
            >
              Add Movies
            </Button>
            <div className="movies-wrapper">
              {formInput.movies.map((movie, key) => (
                <div className="movie-bubble" key={key} name={props.movies}>
                  <p> {movie}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Button
              className="save-profile"
              variant="contained"
              onClick={handleSubmit}
            >
              Save
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Profile;
