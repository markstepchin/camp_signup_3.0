import React from "react";
import { Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Details = () => (
  <React.Fragment>
    <CssBaseline />
    <Header />
    <div className="details-layout">
      <div className="description">
        <h3>Most fun camp of the year!</h3>
        <p>Short description about how amazing this camp will be...</p>
      </div>
      <div className="details-section">
        <div>
          <div className="detail-icons"><i class="far fa-calendar-alt"></i></div>
          <span>July 1-5</span>
          <br />
          <a href="">Add to Calendar</a>
        </div>
      </div>
      <div className="details-section">
        <div>
          <div className="detail-icons"><i class="fas fa-map-marker-alt"></i></div>
          <span>Waitts Lake Open Bible Camp</span>
          <br />
          <span>3362 Thompson Rd #D, </span>
          <br />
          <span>Valley, WA 99181</span>
          <br />
          <a href="https://www.google.com/maps/place/Waitts+Lake+Open+Bible+Camp/@48.2018545,-117.7937229,17z/data=!3m1!4b1!4m5!3m4!1s0x549df5702f21f67b:0xb41c3589b0070ad5!8m2!3d48.2018509!4d-117.7915342" target="_blank" rel="noopener noreferrer">Navigate</a>
        </div>
      </div>
      <div className="details-section">
        <div>
          <div className="detail-icons"><i class="fas fa-money-check-alt"></i></div>
          <span>Total: $125</span>
          <br />
          <span><i>(or $25 per day)</i></span>
        </div>
      </div>
    </div>
    <div className="register-link-container">
      <div className="register-button">
        <Link to="/checkout" style={{textDecoration: 'none'}}>
          <Button
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </Link>
      </div>
    </div>
  </React.Fragment>
)

export default Details;

const Header = () => (
  <AppBar position="absolute" color="default" className="">
    <div className="toolbar-container">
      <Typography variant="h6" color="inherit" noWrap>
        Spokamp 2019
      </Typography>
      <Link to="/checkout" style={{textDecoration: 'none'}}>
        <Button
          variant="contained"
          color="primary"
        >
          Register
        </Button>
      </Link>
    </div>
  </AppBar>
)