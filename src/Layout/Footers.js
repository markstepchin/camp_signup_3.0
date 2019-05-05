import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../components/SignOutButton";
import { SIGN_IN, LANDING } from "../constants/Routes";

export const EmptyFooter = () => <FooterLayout />;

export const LandingPageFooter = () => 
  <FooterLayout>
    <Link to={SIGN_IN}>admin</Link>
  </FooterLayout>;

export const SignInFooter = () => 
  <FooterLayout> 
    <Link to={LANDING}>Camp Info</Link>
  </FooterLayout>;

export const SignOutFooter = () => 
  <FooterLayout> 
    <SignOutButton />
  </FooterLayout>;
  
const FooterLayout = ({children}) => (
  <div className="footer-layout">
    {children}
    <span className="copyrite">&copy; Mark Stepchin, 2019</span>
  </div>
);
