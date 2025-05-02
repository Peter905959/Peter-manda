import React from "react";
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon from react-icons
const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-details">
        <p>
          Email:
          <a href="mailto:mandapeter804@gmail.com"> mandapeter804@gmail.com</a>
        </p>

        <div className="social-links">
          <p>Follow me on Instagram:</p>
          <a
            href="https://www.instagram.com/peterrrrrr_7?igsh=NDUxbjR1cHFveXAy"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-icon"
          >
            <FaInstagram size={40} color="#E4405F" /> {/* Instagram Icon */}
          </a>
        </div>

        <img
          src="/images/profile.jpg"
          alt="Manda Peter"
          className="profile-image"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/150";
          }}
        />
      </div>
    </div>
  );
};

export default Contact;
