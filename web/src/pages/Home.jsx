import React from 'react';
import './Home.css';
import myImage from '../pictures/IMG_4522.jpg';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
        <div className="info-container">
            <h2>Bryce Townsend</h2>
            <p>
            Results-driven computer science graduate with a strong foundation in Front and Back-End development
            </p>
            <Link to="/about" className="linkabout">ABOUT</Link>   {/* To style the link, refer to the 'a' tag in the css file. OR use the class */}
            <Link to="/contact" className="linkabout">CONTACT</Link>  
        </div>
        
        <div className="image-container">
          <img src={myImage} alt="MyPhoto" />
        </div>
    </div>
  );
};

export default Home;