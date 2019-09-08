import React from 'react';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import { calcNumDays, calcCost } from '../Utils';
import { COST_PER_DAY } from '../constants/Price';

const Summary = ({ user: { firstName, lastName, email, startDate, endDate } }) => (
  <>
    <Typography variant="h6" gutterBottom>
      Summary
    </Typography>
    <div style={{ marginBottom: '.35rem' }}>
      <span
        style={{
          fontWeight: '400',
          fontSize: '.65rem',
          color: '#454343',
          textTransform: 'uppercase',
        }}
      >
        Name
      </span>
      <br />
      <span>
        {firstName} {lastName}
      </span>
    </div>
    <div
      style={{
        marginBottom: '1rem',
        paddingBottom: '0.5rem',
        borderBottom: 'rgb(197, 195, 195) solid 1px',
      }}
    >
      <span
        style={{
          fontWeight: '400',
          fontSize: '.65rem',
          color: '#454343',
          textTransform: 'uppercase',
        }}
      >
        Email
      </span>
      <br />
      <span>{email}</span>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>
        July {getDay(startDate)}-{getDay(endDate)}
      </span>
      <span style={{ color: 'rgb(69, 67, 67)' }}>{calcNumDays(startDate, endDate)} days</span>
    </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '.5rem',
        borderBottom: 'rgb(197, 195, 195) solid 1px',
        marginBottom: '.5rem',
      }}
    >
      <i style={{ color: '#454343', fontSize: '.75rem' }}>cost/day</i>
      <i style={{ color: '#454343', fontSize: '.75rem' }}>${COST_PER_DAY}</i>
    </div>

    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: '1rem',
      }}
    >
      <span style={{ fontWeight: 500 }}>Total</span>
      <span style={{ fontSize: '2rem', color: 'rgb(34, 53, 158)' }}>
        ${calcCost(startDate, endDate)}
      </span>
    </div>
  </>
);

const getDay = day => {
  if (day !== '') {
    return moment(day).date();
  }

  return '';
};

export default Summary;
