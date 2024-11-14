import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-inner">
          <div className="brand footer-brand">
            <a href="#">
              <svg width="28" height="32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
                    <stop stopColor="#00BFFB" offset="0%" />
                    <stop stopColor="#0270D7" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
                    <stop stopColor="#1F232A" stopOpacity=".48" offset="0%" />
                    <stop stopColor="#1F2329" stopOpacity="0" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="87.665%" y1="103.739%" x2="-3.169%" y2="38.807%" id="c">
                    <stop stopColor="#FFF" stopOpacity="0" offset="0%" />
                    <stop stopColor="#FFF" stopOpacity=".64" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="-14.104%" y1="111.262%" x2="109.871%" y2="26.355%" id="d">
                    <stop stopColor="#0270D7" offset="0%" />
                    <stop stopColor="#0270D7" stopOpacity="0" offset="100%" />
                  </linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <path fill="url(#a)" transform="rotate(90 14 16)" d="M6 2l-8 13.999L6 30h16l8-14.001L22 2z" />
                  <path fill="url(#b)" d="M14 0v32L0 24V8z" />
                  <path fill="url(#c)" d="M28 24L0 8l14.001-8L28 8z" />
                  <path fillOpacity=".48" fill="url(#d)" style={{ mixBlendMode: 'multiply' }} d="M28 8L0 23.978V8l14.001-8L28 8z" />
                </g>
              </svg>
            </a>
          </div>
          <ul className="footer-links list-reset">
            <li><a href="#">Contact</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">FAQ's</a></li>
            <li><a href="#">Support</a></li>
          </ul>
          <ul className="footer-social-links list-reset">
            <li>
              <a href="#">
                <span class="screen-reader-text">Facebook</span>
                  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#0270D7" />
                  </svg>
              </a>
            </li>
            <li>
            <a href="#">
                  <span className="screen-reader-text">Twitter</span>
                  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="#0270D7" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="screen-reader-text">Google</span>
                  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" fill="#0270D7" />
                  </svg>
                </a>
              </li>
              
            </ul>
            <p className="footer-text">&copy; 2024 EveryAutomate. All rights reserved.</p>
          </div>
        </div>
     
    </footer>
  );
};

export default Footer;
