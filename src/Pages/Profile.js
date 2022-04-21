//imports//

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Header from "../Components/Header";
import { Avatar } from '@mui/material';


//function component//
function Profile() {
  console.log("food");
  const [formInput, setFormInput] = useState({
    avatar: "",
    name: "",
    country: "",
    stateRegion: "",
    about: "",
    whatchingNow: "",
  });
  // functions & API calls//
  // handleSubmit/handleChange for forms//
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setFormInput({ ...formInput, [event.target.name]: value });
  };

  //Return JSX//

  return (
      <div>
          <div className="profileForm">
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  
          </div>
    
      </div>
  )
}

export default Profile;
