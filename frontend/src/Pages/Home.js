import React from "react";
import { Typography, Button } from "@mui/material";
import Layout from "../Components/Layout";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import "../styles/Scrollbar.css";
import { Link } from "react-router-dom";

function Home() {
  const name = "Richie";
  return (
    <Layout>
      <div className="main">
        <div className="content">
          <Typography variant="h1" id="h1">
            Welcome <span>{name}</span>
            ,YOUR TRAVEL JUST GOT <span>UPGRADED</span>
          </Typography>
          <p>Finally, a travel solution. All your needs at one stop</p>
          <Link to="/packages">
            <Button variant="contained">Explore</Button>
          </Link>
          <p className="quote">
            “I haven’t been everywhere, but it’s on my list.” – Susan Sontag
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
