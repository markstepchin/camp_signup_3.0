import React from "react";
import { Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { CHECKOUT } from "../constants/Routes";
import { NAME, HEADING, DESCRIPTION, START_DATE, END_DATE } from "../constants/CampDetails";
import { COST_PER_DAY } from "../constants/Price";
import { calcCost } from "../Utils";
import moment from "moment";

const startDate = moment(START_DATE);
const endDate = moment(END_DATE);

const Details = () => (
  <React.Fragment>
    <CssBaseline />
    <Header />
    <div className="details-layout">
      <div className="description">
        <h3>{HEADING}</h3>
        <p>{DESCRIPTION}</p>
      </div>
      <div className="details-section">
        <div>
          <div className="detail-icons"><i className="far fa-calendar-alt"></i></div>
          <span>{startDate.format('MMMM')} {startDate.date()}-{endDate.date()}</span>
          <br />
          <a href="">Add to Calendar</a>
        </div>
      </div>
      <div className="details-section">
        <div>
          <div className="detail-icons"><i className="fas fa-map-marker-alt"></i></div>
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
          <div className="detail-icons"><i className="fas fa-money-check-alt"></i></div>
          <span>Total: ${calcCost(START_DATE, END_DATE)}</span>
          <br />
          <span><i>(or ${COST_PER_DAY} per day)</i></span>
        </div>
      </div>
    </div>
  </React.Fragment>
)

export default Details;

const Header = () => (
  <AppBar position="absolute" color="default" className="">
    <div className="toolbar-container">
      <Typography variant="h6" color="inherit" noWrap>
        {NAME}
      </Typography>
      <Link to={CHECKOUT} style={{textDecoration: 'none'}}>
        <Button
          variant="contained"
          color="primary"
        >
          Sign Up!
        </Button>
      </Link>
    </div>
  </AppBar>
)