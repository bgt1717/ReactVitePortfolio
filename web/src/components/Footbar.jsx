import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import the LinkedIn and GitHub icons

import './Footbar.css';

function Footbar() {
  const linkedInLink = 'https://www.linkedin.com/in/bryce-townsend-426289237/';
  const gitHubLink = 'https://github.com/bgt1717';

  return (
    <div className="footbar">
      <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} /> {/* LinkedIn icon */}
      </a>
      <span className="icn-space"></span> {/* Add this spacer */}
      <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} /> {/* GitHub icon */}
      </a>
    </div>
  );
}

export default Footbar;