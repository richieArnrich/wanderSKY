import React from "react";
import Layout from "../AdminComps/AdminLayout";
import "../AdminStyles/CreatePackage.css";
// import "../styles/Scrollbar.css";
import axios from "axios";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
function CreatePackage() {
  return (
    <Layout>
      <div className="package">
        <Grid>
          <Paper elevation={20} id="paper">
            <Grid align="center">
              <Avatar id="avatar"></Avatar>
              <h2>Create Tour Packages</h2>
            </Grid>
            <form>
              <TextField
                fullWidth
                label="First Name"
                id="textfield"
                placeholder="Enter your first name"
                margin="normal"
                onChange={(e) => {}}
                required
              />
              <TextField
                fullWidth
                label="Last Name"
                id="textfield"
                placeholder="Enter your last name"
                margin="normal"
                onChange={(e) => {}}
                required
              />
              <TextField
                fullWidth
                label="Email"
                id="textfield"
                margin="normal"
                onChange={(e) => {}}
              />
              <TextField
                fullWidth
                label="Phone Number"
                id="textfield"
                margin="normal"
                onChange={(e) => {}}
                required
              />
              <TextField
                fullWidth
                label="Password"
                id="textfield"
                margin="normal"
                type="password"
                onChange={(e) => {}}
                required
              />
              <TextField
                fullWidth
                label="Confirm Password"
                id="textfield"
                margin="normal"
                type="password"
                onChange={(e) => {}}
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

export default CreatePackage;
