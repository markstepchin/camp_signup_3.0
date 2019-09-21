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
      <h3>What are you searching for?</h3>
      <p>We'd like to invite the youth of the PNW region to our youth camp. The main topic of the camp will be "What are you searching for?" with a speaker coming in from Russia named Бочкала С. Looking forward to seeing you all there!</p>
    </div>
    <div className="description">
      <h3>Чего ищешь ты?</h3>
      <p>Сердечно приглашаем молодеж северо-заподного обедения на наш зимний лагерь. В гостях будет брат Бочкала С. из России. Ждём всех!</p>
    </div>
    <div className="icon-drawer">
      <div className="details-section address-detail-section">
        <div>
          <div className="detail-icons">
            <span className="fas fa-map-marker-alt" />
          </div>
          <div className="details-title">Waitts Lake Open Bible Camp</div>
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
            {startDate.format('MMM')} {startDate.date()} - {endDate.format('MMM')} {endDate.date()}
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'inline-block', marginTop: '.5rem' }}>Arrival begins Oct 31 at 4:00pm - Nov 1</span>
            <br />
            <span style={{ display: 'inline-block', marginTop: '.25rem' }}>Arrival on Nov 2 isn't allowed</span>
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
          <i>(regardless of arrival and departure days)</i>
        </div>
      </div>
    </div>
  </div>
);

export default Details;
