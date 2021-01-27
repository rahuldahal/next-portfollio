import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="contentsWrap">
          <h3 className="footer__title">
            Let's team up and create something amazing.
          </h3>
          <div className="footer__socialLinks">
            <h4>Connect with me on:</h4>
            <a href="https://github.com/rahuldahal" title="Github Profile">
              Github
            </a>
            <a href="https://twitter.com/raahuldaahal" title="Twitter Profile">
              Twitter
            </a>
            <a
              href="https://facebook.com/mynameisrahuldahal"
              title="Facebook Profile"
            >
              Facebook
            </a>
          </div>
          <hr />
          <p className="footer__copyright">
            Copyright &copy; Rahul Dahal | {new Date().getFullYear().toString()}
          </p>
        </div>
      </footer>
    </>
  );
}
