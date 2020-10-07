import * as React from "react";
import { Helmet } from "react-helmet";

//Main Component for exporting

const Contact = () => {
  return (
    <div id="contact-container">
      <Helmet>
        <title>Millbee Contact</title>
      </Helmet>
      <p id="accesibilityFriendly">
        Accesibility friendly contact information : Email = Millbeelp@gmail.com
        pobox = Millbee PO Box 114 PORTHCAWL CF36 9DZ United Kingdom
      </p>
      <div className="decorative-lines" />
      <div className="contact-type-container">
        <p className="contact-type">
          EMAIL <span className="semi-colon">:</span>
        </p>
        <p className="contact-type">
          P.O. BOX <span className="semi-colon">:</span>
        </p>
      </div>
      <div id="contact-divider" />
      <div className="contact-type-container">
        <p className="contact-info" id="email" tabindex="0">
          Millbeelp@gmail.com
        </p>
        <p className="contact-info" id="po-box" tabindex="0">
          Millbee <br />
          PO Box 114
          <br />
          PORTHCAWL <br />
          CF36 9DZ
          <br />
          United Kingdom
        </p>
      </div>
      <div className="decorative-lines-bottom"></div>
    </div>
  );
};

export default Contact;
