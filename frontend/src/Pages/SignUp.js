import React, { useState } from "react";
import Layout from "../Components/Layout";
import "../styles/SignUp.css";
import "../styles/Scrollbar.css";
import axios from "axios";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
function SignUp() {
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [Email, setEmail] = useState();
  const [Phone, setPhone] = useState();
  const [Password, setPassword] = useState();
  const [ConfirmPwd, setConfirmPassword] = useState();
  // const []

  const handleSubmit = (event) => {
    var UserID = Math.floor(1000 + Math.random() * 9000);
    // alert(FirstName + UserID);
    const url = "http://localhost:8080/users/createUser";
    const obj = {
      UserID,
      FirstName,
      LastName,
      Email,
      Phone,
      Password,
      ConfirmPwd,
    };
    if (Password === ConfirmPwd) {
      axios
        .post(url, obj)
        .then((res) => {
          if (res.status === 200) {
            // alert(res.data);
            alert("user created, note down your userID: " + UserID);
          } else {
            Promise.reject();
          }
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    } else {
      alert("Password and confirm password do not match");
    }
    event.preventDefault();
  };
  return (
    <Layout>
      <div className="signup" onSubmit={handleSubmit}>
        <Grid>
          <Paper elevation={20} id="paper">
            <Grid align="center">
              <Avatar id="avatar"></Avatar>
              <h2>Sign Up</h2>
              <Typography variant="caption" id="caption">
                Create your account
              </Typography>
            </Grid>
            <form>
              <TextField
                fullWidth
                label="First Name"
                id="textfield"
                placeholder="Enter your first name"
                margin="normal"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
              />
              <TextField
                fullWidth
                label="Last Name"
                id="textfield"
                placeholder="Enter your last name"
                margin="normal"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
              />
              <TextField
                fullWidth
                label="Email"
                id="textfield"
                margin="normal"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                fullWidth
                label="Phone Number"
                id="textfield"
                margin="normal"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
              />
              <TextField
                fullWidth
                label="Password"
                id="textfield"
                margin="normal"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <TextField
                fullWidth
                label="Confirm Password"
                id="textfield"
                margin="normal"
                type="password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                required
              />
              <Button type="submit" variant="contained" color="primary">
                Sign Up
              </Button>
            </form>
          </Paper>
        </Grid>
      </div>
    </Layout>
  );
}

export default SignUp;
