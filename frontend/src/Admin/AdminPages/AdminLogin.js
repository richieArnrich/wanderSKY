import React from "react";
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
function AdminLogin() {
  return (
    <Layout>
      <div className="signup" onSubmit={handleSubmit}>
        <Grid>
          <Paper elevation={20} id="paper">
            <Grid align="center">
              <Avatar id="avatar"></Avatar>
              <h2>Sign Up</h2>
              <Typography variant="caption" id="caption">
                Login to your account
              </Typography>
            </Grid>
            <form>
              <TextField
                fullWidth
                label="User ID"
                id="textfield"
                margin="normal"
                onChange={(e) => {
                  setuserID(e.target.value);
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

export default AdminLogin;
