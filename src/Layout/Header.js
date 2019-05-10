import React from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { CHECKOUT } from "../constants/Routes";
import { NAME } from "../constants/CampDetails";

const Header = () => (
  <div className="header">
    <h2 >{NAME}</h2>
    <Link to={CHECKOUT} style={{textDecoration: 'none'}}>
      <Button
        variant="contained"
        color="primary"
      >
        Sign Up!
      </Button>
    </Link>
  </div>
);

export default Header;
