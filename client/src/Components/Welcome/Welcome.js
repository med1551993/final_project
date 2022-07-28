import react, { useState, useEffect  } from "react";
import "./welcome.css";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, userCurrent } from "../../JS/userSlice";
import notification from '../Navbar/notification.png'
import user from '../Navbar/user.png'
import { useSelector } from "react-redux";

const Welcome = () => {
  const [showsignin, setshowsignin] = useState(false);
  const [showsignup, setshowsignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const isAuth = localStorage.getItem("token");
  let currentUser = useSelector((state) => state.user.user)
  // useEffect(() => {
  //   if (isAuth) {
  //     dispatch(userCurrent(isAuth));
  //   }
  // }, []);
 

  return (
    <div className="content">
      <header>
        <div className="label">
          <a href="/" >Covoiturini</a>
        </div>
        <div className="b-img">
          <img src="https://wayzup.files.wordpress.com/2018/01/voiture-confettis.png" />
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

            {isAuth ?
             <>
            {/* <li>
          <div className="dropdown">
          <button data-count='7'>
            <img src={notification} className='notiffication'/>
            </button>
              <div className="dropdown-content">
               <p>Ali a rejoint votre covoiturage</p>
               <p>Ali a rejoint votre covoiturage</p>
               <p>Ali a rejoint votre covoiturage</p>
               <p>Ali a rejoint votre covoiturage</p>
               <p>Ali a rejoint votre covoiturage</p>
              </div>
            </div>
          </li> */}
          
          <li>
              <div className="dropdown">
              {/* <img src={user} className='user'/> */}
              <img src={currentUser ? `${currentUser.photo_url}` : user} alt="photo" className="user" />
              <div className="dropdown-content">
                <span onClick={() => {dispatch(logout());
                    navigate('/')}} style={{cursor:'pointer'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:'15px',marginRight:'10px'}}>
                      <path d="M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"/>
                      </svg>
                     Déconnection 
               </span>
              </div>
            </div>
            <span>Bonjour {currentUser?currentUser.firstName : <span> ...</span>}</span>
          </li>
             </>
            : 
            <>
            <li>
              <button className="btn-in" onClick={() => setshowsignin(true)} >
                S'identifier
              </button>
              {showsignin ? <Signin setshowsignin={setshowsignin} setshowsignup={setshowsignup}/> : null}
            </li>
            <li>
              <button className="btn-up" onClick={() => setshowsignup(true)} >
                S'enregistrer
              </button>
              {showsignup ? <Signup setshowsignup={setshowsignup} setshowsignin={setshowsignin}/> : null}
            </li>
            </>}
          </ul>
        </div>
      </header>

      <div className="body-content">
        <div className="visiteur">
          <h2>Vous chercher un covoiturage</h2>
          <div className="visiteur-img">
            <img src="https://img.freepik.com/vecteurs-libre/location-voiture-ligne-personnes-utilisant-application-mobile-pour-commander-taxi-covoiturage-femme-pres-ecran-du-smartphone-itineraire-marque-localisation-plan-ville_458444-996.jpg?w=2000" />
          </div>
          <Link to="/search">
            <button  className="gooey-button rech">
            Chercher un trajet
            <span class="bubbles bubbles1">
            <span class="bubble bubble1"></span>
            <span class="bubble bubble1"></span>
            <span class="bubble bubble1"></span>
            <span class="bubble bubble1"></span>
            <span class="bubble bubble1"></span>
            <span class="bubble bubble1"></span>
            <span class="bubble bubble1"></span>
            <span class="bubble bubble1"></span>
            <span class="bubble bubble1"></span>
            <span class="bubble bubble1"></span>
            <span class="bubble bubble1"></span>
            <span class="bubble bubble1"></span>
            <span class="bubble bubble1"></span>
            <span class="bubble bubble1"></span>
        </span>
            </button>
            </Link>
        </div>

        <div>
        <span class="vertical-line">
          
              <span class="pulse-button ou"> ? </span>
        </span>

        </div>

        <div className="chauffeur">
          <h2>Vous proposer un trajet</h2>
          <div className="chauffeur-img">
            <img src="https://www.gootowork.com/wp-content/uploads/2022/03/covoit-1.png" />
          </div>

          <Link to="/publish">
        <button className="gooey-button">
        Créer un trajet
        <span class="bubbles">
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
        </span>
    </button>
       </Link>
        </div>
      </div>

      <svg className='blob1' viewBox="100 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#8A3FFC" d="M44.7,-62.5C57.2,-61.6,66,-47.9,63.8,-34.5C61.7,-21,48.6,-8,46.9,7C45.2,22,54.8,38.9,51.4,46.6C48,54.3,31.5,52.9,19.5,48.1C7.4,43.3,-0.3,35.2,-7.7,30.9C-15.2,26.6,-22.4,26.2,-30.9,23.1C-39.4,20,-49.1,14.2,-48.1,8.1C-47.1,2,-35.4,-4.4,-33.7,-18.4C-32,-32.4,-40.3,-54,-36.3,-58.8C-32.4,-63.6,-16.2,-51.6,0,-51.6C16.1,-51.5,32.3,-63.4,44.7,-62.5Z" transform="translate(100 100)" />
</svg>
<svg className='blob2' viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#0F62FE" d="M34.4,19.8C21,43.1,-29.7,44.8,-41.7,22.3C-53.6,-0.2,-26.8,-46.8,-1.4,-47.6C23.9,-48.4,47.9,-3.5,34.4,19.8Z" transform="translate(100 100)" />
</svg>
<svg className='blob3' viewBox="100 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="#F1C21B" d="M36.7,-58.8C50.1,-48.5,65.2,-42.6,72,-31.7C78.9,-20.8,77.5,-4.9,73.7,9.5C69.9,23.9,63.7,36.9,54.9,48.1C46,59.4,34.5,68.9,20.6,75.2C6.8,81.5,-9.5,84.6,-22.4,79.5C-35.4,74.3,-45,60.8,-53.3,48C-61.7,35.1,-68.8,23,-73.1,9C-77.4,-4.9,-78.9,-20.8,-74,-34.8C-69.2,-48.9,-58.2,-61.1,-44.8,-71.4C-31.4,-81.7,-15.7,-90.2,-2,-87C11.7,-83.9,23.3,-69.2,36.7,-58.8Z" transform="translate(100 100)" />
</svg>

    </div>
  );
};

export default Welcome;
