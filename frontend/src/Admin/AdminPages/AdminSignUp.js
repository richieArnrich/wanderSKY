import React, { useState } from "react";
import Layout from "../AdminComps/AdminLayout";
import "../AdminStyles/AdminSignup.css";
import "../AdminStyles/Scrollbar.css";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
function AdminSignUp() {
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [Email, setEmail] = useState();
  const [Phone, setPhone] = useState();
  const [Password, setPassword] = useState();
  const [ConfirmPwd, setConfirmPassword] = useState();
  const handleSubmit = () => {
    var AdminID = Math.floor(1000 + Math.random() * 9000);
    const url = "http://localhost:8080/admins/createAdmin";
    const obj = {
      AdminID,
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
            alert("Admin created successfully, ID: " + AdminID);
          } else {
            Promise.reject();
          }
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };
  return (
    <Layout>
      <div className="signup" onSubmit={handleSubmit}>
        <Grid>
          <Paper elevation={20} id="paper">
            <Grid align="center">
              <Avatar id="avatar"></Avatar>
              <h2>Admin Sign Up</h2>
              <Typography variant="caption" id="caption">
                Create admin account
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

export default AdminSignUp;
