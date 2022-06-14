//imports//
import { useState } from "react";
import AvatarUpload from "../Components/AvatarUpload";
import TextField from "@mui/material/TextField";
// import { borders } from '@mui/system';

import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

//function component//
function Profile(props) {
  const [newTitle, setNewTitle] = useState("");
  const [formInput, setFormInput] = useState({
    avatar: "",
    name: "",
    country: "",
    stateRegion: "",
    about: "",
    movies: ["up", "Frozen"],
    addNewTitle: "",
  });

  // functions & API calls//
  // handleSubmit/handleChange for forms//
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.value;

    setFormInput({ ...formInput, [event.target.name]: value });
    console.log("formInput", formInput);
    setFormInput({
      avatar: "",
      name: "",
      country: "",
      stateRegion: "",
      about: "",
      movies: ["up", "Frozen"],
      addNewTitle: "",
    });
  };
  // console.log("handleSubmit", handleSubmit)

  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setFormInput({ ...formInput, [event.target.name]: value });
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

  const handleRemoveItem = (item, key) => {
    let allTitlesCopy = [...formInput.movies];
    allTitlesCopy.splice(key, 1);
    setFormInput({ ...formInput, movie: allTitlesCopy });
  };

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
      <div className="profileFormAvatar">
        <div className="avatarOnly">
          <p className="edit">Edit Your Profile</p>
          <p className="profilep">Add your profile picture</p>
          <AvatarUpload />
        </div>
        <div className="container-moviesAdd">
          <div className="formMovies">
            <h1>Who are you?</h1>
            <label>
              <p>Name</p>
              <TextField
              
                id="outlined basic"
                variant="outlined"
                name="name"
                style={{ width: "387px" }}
                value={formInput.name}
                onChange={(event) => handleChange(event)}
              />
            </label>

            <label id="country-label">
              <p>Country</p>
              <Select
                name="country"
                label="country-label"
                id="country"
                style={{ width: "387px" }}
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
            </label>

            <label>
              <p>State/Region</p>
                  <TextField
                
                variant="outlined"
                name="stateRegion"
                style={{ width: "387px" }}
                value={formInput.stateRegion}
                onChange={(event) => handleChange(event)}
              />
            </label>
            <label>
              <p>About</p>
              <TextField
          
                variant="outlined"
                name="about"
                multiline
                rows={4}
                fullWidth
                value={formInput.about}
                onChange={(event) => handleChange(event)}
              />
            </label>
          </div>
          <div className="formMovies two">
            <h4>What have you been watching?</h4>
            <span>
              Movies listed here will be added to the My Movies page and can be
              removed from your list upon edit.
            </span>
            <h1>Add A Movie</h1>

            <TextField
              label="Add Movies"
              variant="outlined"
              name="addNewTitle"
              value={formInput.addNewTitle}
              onChange={(event) => handleChange(event)}
            />

            <div>
              <Button
                className="add-movies"
                variant="contained"
                onClick={handleMovieSubmit}
                borderRadius= '300px'
  // border-style= solid
  // padding= 13px 53px
  // font-size= 16px
  // margin-left= 25px
              >
                Add Another Movie
              </Button>
              
              {formInput.movies.map((movie, key) => (
                <div
                  className="movie-bubble"
                  key={key}
                  name={props.movies}
                  onClick={(item) => handleRemoveItem(item, key)}
                >
                  <p> {movie}</p>
                </div>
              ))}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
