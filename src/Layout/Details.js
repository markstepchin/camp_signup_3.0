import React from 'react';
import moment from 'moment';
import CssBaseline from '@material-ui/core/CssBaseline';
import { HEADING, DESCRIPTION, START_DATE, END_DATE } from '../constants/CampDetails';
import { COST_PER_DAY } from '../constants/Price';
import { calcCost } from '../Utils';

const startDate = moment(START_DATE);
const endDate = moment(END_DATE);

const Details = () => (
  <div className="details-container">
    <CssBaseline />
    <div className="description">
      <h3>{HEADING}</h3>
      <p>{DESCRIPTION}</p>
    </div>
    <div className="icon-drawer">
      <div className="details-section address-detail-section">
        <div>
          <div className="detail-icons">
            <span className="fas fa-map-marker-alt" />
          </div>
          <span className="details-title">Waitts Lake Open Bible Camp</span>
          <br />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>3362 Thompson Rd #D, Valley, WA 99181</div>
            <a
              href="https://www.google.com/maps/place/Waitts+Lake+Open+Bible+Camp/@48.2018545,-117.7937229,17z/data=!3m1!4b1!4m5!3m4!1s0x549df5702f21f67b:0xb41c3589b0070ad5!8m2!3d48.2018509!4d-117.7915342"
              target="_blank"
              rel="noopener noreferrer"
              className="address-link"
            >
              <span className="fas fa-directions" style={{ position: 'relative', top: '1px' }} />
              <span style={{ marginLeft: '.5rem' }}>Navigate</span>
            </a>
          </div>
        </div>
      </div>
      <div className="details-section date-detail-section">
        <div>
          <div className="detail-icons">
            <span className="far fa-calendar-alt" />
          </div>
          <div className="details-title">
            {startDate.format('MMMM')} {startDate.date()}-{endDate.date()}
          </div>
        </div>
      </div>
      <div className="details-section cost-detail-section">
        <div style={{ textAlign: 'center' }}>
          <div className="detail-icons">
            <span className="fas fa-money-check-alt" />
          </div>
          <span className="details-title">
            Total: ${calcCost(START_DATE, END_DATE)}
          </span>
          <br />
          <i>(or ${COST_PER_DAY} per day)</i>
        </div>
      </div>
    </div>
  </div>
);

export default Details;
