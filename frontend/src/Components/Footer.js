import React from "react";
import "../styles/Footer.css";
import "../styles/Scrollbar.css";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <h1>Connect. Travel. Experience</h1>
      <div className="footer-content">
        <div className="social">
          <Typography variant="h6">Connect with us</Typography>
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebook} id="socialIcon" />
          </a>
          <a href="https://www.instagram.com/">
            {/* und: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%) */}
            <FontAwesomeIcon icon={faInstagram} id="socialIcon" />
          </a>
          <a href="https://www.youtube.com/">
            <FontAwesomeIcon
              icon={faYoutube}
              id="socialIcon"
              style={{ color: "#ea1010" }}
            />
          </a>
        </div>
        <div className="contact">
          <Typography variant="h6">Contact us</Typography>
          <table>
            <tr>
              <td>
                <FontAwesomeIcon icon={faPhone} />
              </td>
              <td>+91-1234567890</td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faPhone} />
              </td>
              <td>+91-1234567890</td>
            </tr>
          </table>
        </div>
        <div className="subscribe">
          <Typography variant="h6">
            Subscribe to our
            <br /> news letters
          </Typography>
          <form>
            <label for="email">Email</label>
            <input type="email" id="email" />
            <button>SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <div id="copywrite">
        <h6>Copywrite {year}</h6>
      </div>
    </div>
  );
}

export default Footer;
