import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SignOutButton from '../components/SignOutButton';
import { CHECKOUT, LANDING } from '../constants/Routes';
import { NAME } from '../constants/CampDetails';

export const LandingHeader = () => (
  <div className="header">
    <h2 style={{ margin: 0 }}>{NAME}</h2>
    {/* <Link to={CHECKOUT} style={{ textDecoration: 'none' }}>
      <Button variant="contained" color="primary">
        Sign Up!
      </Button>
    </Link> */}
  </div>
);

export const DashboardHeader = () => (
  <div className="header">
    <h2>Admin</h2>
    <SignOutButton />
  </div>
);

export const LoginHeader = () => (
  <div className="header">
    <h2>{NAME}</h2>
    <Link to={LANDING} style={{ textDecoration: 'none' }}>
      <Button variant="contained" color="primary">
        Camp Info
      </Button>
    </Link>
  </div>
);
