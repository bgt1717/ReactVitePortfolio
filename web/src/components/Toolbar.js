import React from 'react';
import {Link} from 'react-router-dom';
import './Toolbar.css';

function Toolbar() {
    return (
        <header className = "Toolbar">
            <nav>
                <ul>
                    <li><Link to="/"> HOME </Link></li>
                    <li><Link to="/about">ABOUT</Link>  </li>
                    <li><Link to="/contact">CONTACT</Link></li>
                    <li><Link to="/projects">PROJECTS</Link></li>
                    
                </ul>
            </nav>
        </header>
    );

}

export default Toolbar;