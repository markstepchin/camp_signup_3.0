import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../components/SignOutButton";

export const FooterLayout = ({children}) => (
  <div className="footer-layout">
    {children}
    <span className="copyrite">&copy; Mark Stepchin, 2019</span>
  </div>
);

export const EmptyFooter = () => <FooterLayout />;

export const LandingPageFooter = () => 
  <FooterLayout>
    <Link to="/sign-in">admin</Link>
  </FooterLayout>;

export const SignInFooter = () => 
  <FooterLayout> 
    <Link to="/">Camp Info</Link>
  </FooterLayout>;

export const SignOutFooter = () => 
  <FooterLayout> 
    <SignOutButton />
  </FooterLayout>;
  