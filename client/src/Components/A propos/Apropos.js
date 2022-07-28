import React from "react";
import "./Apropos.css";
import { Link, useNavigate } from "react-router-dom";

const Apropos = () => {
let navigate = useNavigate();
  return (
    <div>
      <header>
        <div className="label">
          <a href="/">Covoiturini</a>
        </div>
       
        <div className="navbar">
          <ul>
          <li>
              {/* <a href="" onClick={() => navigate('/welcome')}>Acceuil</a> */}
              <Link to="/welcome">Acceuil</Link>
            </li>
            <li>
              {/* <a href="" onClick={() => navigate('/apropos')}>À propos</a> */}
              <Link to="/apropos">À propos</Link>
            </li>
            <li>
              {/* <a href="" onClick={() => navigate('/contact')}>Contact</a> */}
              <Link to="/contact">Contact</Link>
            </li>
          
          </ul>
        </div>
      </header>

      <div className="b-imgapropos">
          <img src="https://wayzup.files.wordpress.com/2018/01/voiture-confettis.png" />
        </div>

      <div className="apropos">
        <p><span>Covoiturini</span> est une plate-forme communautaire de confiance 100%
        Tunisienne, qui permet de proposer des trajets sur
        toute la Tunisie.</p>
      </div>

      <svg
        className="blob1"
        viewBox="100 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#8A3FFC"
          d="M44.7,-62.5C57.2,-61.6,66,-47.9,63.8,-34.5C61.7,-21,48.6,-8,46.9,7C45.2,22,54.8,38.9,51.4,46.6C48,54.3,31.5,52.9,19.5,48.1C7.4,43.3,-0.3,35.2,-7.7,30.9C-15.2,26.6,-22.4,26.2,-30.9,23.1C-39.4,20,-49.1,14.2,-48.1,8.1C-47.1,2,-35.4,-4.4,-33.7,-18.4C-32,-32.4,-40.3,-54,-36.3,-58.8C-32.4,-63.6,-16.2,-51.6,0,-51.6C16.1,-51.5,32.3,-63.4,44.7,-62.5Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className="blob2"
        viewBox="0 0 100 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#0F62FE"
          d="M34.4,19.8C21,43.1,-29.7,44.8,-41.7,22.3C-53.6,-0.2,-26.8,-46.8,-1.4,-47.6C23.9,-48.4,47.9,-3.5,34.4,19.8Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className="blob3"
        viewBox="100 0 200 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#F1C21B"
          d="M36.7,-58.8C50.1,-48.5,65.2,-42.6,72,-31.7C78.9,-20.8,77.5,-4.9,73.7,9.5C69.9,23.9,63.7,36.9,54.9,48.1C46,59.4,34.5,68.9,20.6,75.2C6.8,81.5,-9.5,84.6,-22.4,79.5C-35.4,74.3,-45,60.8,-53.3,48C-61.7,35.1,-68.8,23,-73.1,9C-77.4,-4.9,-78.9,-20.8,-74,-34.8C-69.2,-48.9,-58.2,-61.1,-44.8,-71.4C-31.4,-81.7,-15.7,-90.2,-2,-87C11.7,-83.9,23.3,-69.2,36.7,-58.8Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default Apropos;
