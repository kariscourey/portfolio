import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <div className="leftpart">
        <div className="leftpart_inner">
          <div className="logo">
            <div className="navbar-brand">
              <img src="assets/img/logo/kc.png" alt="brand" />
            </div>
          </div>
          {/* END LOGO */}
          <div className="copyright">
            <p>
              &copy; {new Date().getFullYear()}
              <a
                href="https://linkedin.com/in/kariscourey"
                target="_blank"
                rel="noreferrer"
              >
                Karis Courey
              </a>
            </p>
          </div>
          {/* END COPYRIGHT */}
        </div>
      </div>
      {/* END LEFT PART */}

      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div className="container">
              <div className="tokyo_tm_error">
                <div className="tokyo_tm_error_inner">
                  <h1>404!</h1>
                  <h3>Uh oh... {':('}</h3>
                  <p>Looks like you're lost, friend.</p>
                  <Link to="/" className="ib-button">
                    Go home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END RIGHT PART */}

      <footer className="footer-wrapper">
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()}
            <a
              href="https://linkedin.com/in/kariscourey"
              target="_blank"
              rel="noreferrer"
            >
              Karis Courey
            </a>
          </p>
        </div>
        {/* END COPYRIGHT */}
      </footer>
    </div>
  );
};

export default NotFound;
