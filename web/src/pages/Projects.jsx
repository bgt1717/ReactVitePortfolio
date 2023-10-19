import React from 'react';
import './Projects.css';
import myImage from '../pictures/cookies.JPG';
import myImage2 from '../pictures/mern-todo.JPG';

export default function Projects() {
  return (
<div className="projects-container-outer">
  <div className="projects-container">
      <h1>Projects</h1>
      <div className="project">
         <h4>ECOMMERCE WEBSITE - COOKIE TOWN</h4>
         <a href="https://ctown-front-end.onrender.com/" target="_blank" rel="noopener noreferrer">
              <div className="img-container">
              <img src={myImage} alt="MyPhoto" />
              </div>
        </a>
  
    <p>
          Ecommerce Application - Designed and developed a dynamic Ecommerce application for selling cookies, employing cutting-edge technologies, including React and JavaScript, to create an engaging user interface. Seamlessly integrated Stripe API for secure payment processing, ensuring a smooth and reliable payment experience for customers. Implemented robust features for browsing and purchasing cookies, including cart management and checkout functionality.
    </p>
</div>

{/* ------------------------------------------- */}
<div className="project">
    <h4>MERN Stack To-Do Application</h4>
    <a href="https://thunderous-narwhal-57c03c.netlify.app/" target="_blank" rel="noopener noreferrer">
        <div className="img-container2">
        <img src={myImage2} alt="MyPhoto" />
        </div>
    </a> 
          <p>
          MERN Stack To-Do Application - Developed a feature-rich MERN (MongoDB, Express.js, React, Node.js) stack application for task management, allowing users to effortlessly add, update, and delete tasks.
          Designed and implemented a Node.js server using the Express framework, integrated with MongoDB as the database, to create a robust API for task management, enabling task creation, modification, and removal.
          Crafted an intuitive React-based front-end application that seamlessly interacted with the server-side code to provide users with a user-friendly interface for task management.
          Utilized modern web technologies, including JavaScript, Node.js, Express, MongoDB, React, HTML, and CSS, to ensure a responsive and engaging user experience.

          </p>
</div>
{/* ------------------------------------------- */}
{/* <div className="project">
    <h4>ECOMMERCE WEBSITE - COOKIE TOWN</h4>
    <a href="https://ctown-front-end.onrender.com/" target="_blank" rel="noopener noreferrer">
        <div className="img-container">
        <img src={myImage} alt="MyPhoto" />
        </div>
    </a> 
          <p>
            Ecommerce Application - Designed and developed a dynamic Ecommerce application for selling cookies, employing cutting-edge technologies, including React and JavaScript, to create an engaging user interface. Seamlessly integrated Stripe API for secure payment processing, ensuring a smooth and reliable payment experience for customers. Implemented robust features for browsing and purchasing cookies, including cart management and checkout functionality.
          </p>
</div> */}
{/* ------------------------------------------- */}
  </div>
</div>
  );
}
