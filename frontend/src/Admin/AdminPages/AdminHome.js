import React from "react";
import { Typography, Button } from "@mui/material";
import Layout from "../AdminComps/AdminLayout";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../AdminStyles/AdminHome.css";
import "../AdminStyles/Scrollbar.css";
// import { Link } from "react-router-dom";

function AdminHome() {
  return (
    <Layout>
      <div className="main">
        <div className="content">
          <Typography variant="h1" id="h1">
            Welcome <span>Admin name</span>
          </Typography>
          <p>Manage your travel portfolio</p>
          <Button variant="contained">View registrations</Button>
        </div>
      </div>
    </Layout>
  );
}

export default AdminHome;
