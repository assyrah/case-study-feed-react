import React from "react";
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="footer">
      <nav className="footer footer-link container">
            <div className="logo-container">
                <Link className="link-item" to="/">
                    <img src={require('../assets/adrenalin.svg')} className="logo" alt="logo"/>
                </Link>
            </div>
            <div className="footer-links">
                <Link className="link-item" to="/">
                    Privacy
                </Link>
                <Link className="link-item" to="/">
                    Sitemap
                </Link>
                <Link className="link-item" to="/">
                    Facebook
                </Link>
                <Link className="link-item" to="/">
                    Linkedin
                </Link>
                <Link className="link-item" to="/">
                    Instagram
                </Link>
                <Link className="link-item" to="/">
                    Twitter
                </Link>
            </div>
    </nav>
    </div>
  );
}

export default Footer;
