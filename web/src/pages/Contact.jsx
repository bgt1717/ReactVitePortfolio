import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const linkedInLink = 'https://www.linkedin.com/in/bryce-townsend-426289237/';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7p5zcsl', 'template_b2cmrkm', form.current, '2_3GtONJRXdD9OJSY')
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-container">
          <h2>Contact Me</h2>
          <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
          </form>
          <p>
              Connect with me:{' '}
              <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
          </p>
      </div>
    </div>
  );
};
