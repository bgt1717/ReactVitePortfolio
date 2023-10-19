import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import the LinkedIn icon directly

import './Footbar.css';

function Footbar() {
  const linkedInLink = 'https://www.linkedin.com/in/bryce-townsend-426289237/';

  return (
    <div className="footbar">
      Connect with me: <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} /> {/* LinkedIn icon */}
      </a>
    </div>
  );
}

export default Footbar;
