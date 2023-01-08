import emailjs from "emailjs-com";
import React, { useState } from "react";
import { useAlert } from 'react-alert';
import ReactMapGL from "react-map-gl";

const Contact = () => {
  const alert = useAlert();
  const [viewport, setViewport] = useState({
    latitude: 40.7608,
    longitude: -111.8910,
    zoom: 8,
  });

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3c7vuqj",
        "template_9ipvlz3",
        e.target,
        "yCFFrS3brLdHUiHSF"
      )
      .then((res) => {
        console.log(res);
        alert.success('Email sent!');
      })
      .catch((err) => {
        console.log(err);
        alert.error('Error sending email :(');
      });

    e.target.reset();
  }

  return (
    <>
      <div className="tokyo_tm_contact">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Talk to me</span>
              <h3>Contact</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <div data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200">
          <div className="map_wrap">
            <div className="map">
              <ReactMapGL
                mapStyle={"mapbox://style/mapbox/dark-v9"}
                mapboxApiAccessToken="pk.eyJ1IjoiYmF5YXppZGgiLCJhIjoiY2tvemdwc3ByMDg1YzJubzQxcDR0cDR3dyJ9.s1zXEb5OPqgBDcmupj3GBA"
                {...viewport}
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
              />
            </div>
          </div>
          {/* MENU WRAP */}

          <div className="fields">
            <form className="contact_form" onSubmit={sendEmail}>
              <div className="first">
                <ul>
                  <li>
                    <input type="text" name="name" placeholder="Name" />
                  </li>
                  {/* END FIRST NAME */}

                  <li>
                    <input type="email" name="user_email" placeholder="Email" />
                  </li>
                  {/* END EMAIL */}

                  <li>
                    <textarea name="message" placeholder="Message"></textarea>
                  </li>
                  {/* END SUBJECT MESSAGE */}
                </ul>
              </div>
              <div className="tokyo_tm_button">
                <button type="submit" className="ib-button">
                  Send
                </button>
              </div>
              {/* END SUBMIT BUTTON */}
            </form>
            {/* END FORM */}
          </div>
          {/* END FIELDS */}
        </div>
        {/* END CONTACT */}
      </div>
    </>
  );
};

export default Contact;
