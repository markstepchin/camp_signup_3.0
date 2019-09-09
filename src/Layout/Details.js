import React from 'react';
import moment from 'moment';
import { HEADING, DESCRIPTION, START_DATE, END_DATE } from '../constants/CampDetails';
import { COST_PER_DAY } from '../constants/Price';
import { calcCost } from '../Utils';

const startDate = moment(START_DATE);
const endDate = moment(END_DATE);

const Details = () => (
  <>
    <div className="description">
      <h3>{HEADING}</h3>
      <p>{DESCRIPTION}</p>
    </div>
    <div className="details-section">
      <div>
        <div className="detail-icons">
          <i className="fas fa-map-marker-alt" />
        </div>
        <span>Waitts Lake Open Bible Camp</span>
        <br />
        <span>3362 Thompson Rd #D, </span>
        <br />
        <span>Valley, WA 99181</span>
        <br />
        <div className="address-link-container">
          <a
            href="https://www.google.com/maps/place/Waitts+Lake+Open+Bible+Camp/@48.2018545,-117.7937229,17z/data=!3m1!4b1!4m5!3m4!1s0x549df5702f21f67b:0xb41c3589b0070ad5!8m2!3d48.2018509!4d-117.7915342"
            target="_blank"
            rel="noopener noreferrer"
            className="address-link"
          >
            <span style={{ marginRight: '.5rem' }}>Navigate</span>
            <i className="fas fa-car-alt" />
          </a>
        </div>
      </div>
    </div>
    <div className="details-section">
      <div>
        <div className="detail-icons">
          <i className="far fa-calendar-alt" />
        </div>
        <div style={{ textAlign: 'center' }}>
          {startDate.format('MMMM')} {startDate.date()}-{endDate.date()}
        </div>
      </div>
    </div>
    <div className="details-section">
      <div style={{ textAlign: 'center' }}>
        <div className="detail-icons">
          <i className="fas fa-money-check-alt" />
        </div>
        <span style={{ textAlign: 'center' }}>Total: ${calcCost(START_DATE, END_DATE)}</span>
        <br />
        <i>(or ${COST_PER_DAY} per day)</i>
      </div>
    </div>
  </>
);

export default Details;
