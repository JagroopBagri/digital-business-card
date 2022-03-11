import React from 'react';
import pic from '../images/Jagroop.JPG';
import logo from '../images/linkedin_logo_square_icon_134016.png';
import mail from '../images/mail.png';
function Info() {
  return (
    <div className="info">
      <img src={pic} alt="personal-pic" className="personal-pic" />
      <div className="contact">
        <div className="titles">
          <h1>Jagroop Bagri</h1>
          <h3>Frontend Developer</h3>
        </div>
        <div className="buttons">
          <button className="button1">
            <img src={mail} alt="mail-logo" className="button-logo" />
            Email
          </button>
          <button className="button2">
            <img src={logo} alt="linkedin-logo" className="button-logo" />
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;
