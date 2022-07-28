import React, { useState, useEffect } from 'react'
import "./Navbar.css";
import notification from './notification.png'
import user from './user.png'
import { useDispatch } from "react-redux";
import { logout, userCurrent } from "../../JS/userSlice";
import { useNavigate } from "react-router-dom";
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import { useSelector } from "react-redux";

const Navbar = ({setCovPubl, setReservations, setProfile}) => {
    const [showsignin, setshowsignin] = useState(false);
    const [showsignup, setshowsignup] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const isAuth = localStorage.getItem("token");
    let currentUser = useSelector((state) => state.user.user)
  
  return (
    <div className='tete'>
    {/* if there is a isAuth */}
     {isAuth ? <div className='navbar1'>
      <div className="label1">
       <a href="/">Covoiturini</a> 
      </div>
      <div className="navbar3">
        <ul>

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
                <a onClick={() => {setCovPubl(true);
                setReservations(false); 
                setProfile(true)}} style={{cursor:'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:'15px',marginRight:'10px'}}>
                  <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
                </svg>
                  Mon profil
                  </a>
                <a onClick={() => {setCovPubl(true);
                setReservations(false);
                setProfile(false)}} style={{cursor:'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{width:'15px',marginRight:'10px'}}>
                  <path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM96 392c-13.25 0-24-10.75-24-24S82.75 344 96 344s24 10.75 24 24S109.3 392 96 392zM96 296c-13.25 0-24-10.75-24-24S82.75 248 96 248S120 258.8 120 272S109.3 296 96 296zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM304 384h-128C167.2 384 160 376.8 160 368C160 359.2 167.2 352 176 352h128c8.801 0 16 7.199 16 16C320 376.8 312.8 384 304 384zM304 288h-128C167.2 288 160 280.8 160 272C160 263.2 167.2 256 176 256h128C312.8 256 320 263.2 320 272C320 280.8 312.8 288 304 288z"/>
                </svg>
                  Mes covoiturages publiés
                  </a>
                {/* <a onClick={() => {setCovPubl(false);
                setReservations(true);
                setProfile(false)}} style={{cursor:'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:'15px',marginRight:'10px'}}>
                  <path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z"/>
                </svg>
                  Mes réservations
                  </a> */}
                <a href="#" onClick={() => {dispatch(logout());
                    navigate('/')}} style={{cursor:'pointer'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:'15px',marginRight:'10px'}}>
                      <path d="M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"/>
                      </svg>
                     Déconnection 
               </a>
              </div>
            </div>
            <span onClick={() => {setCovPubl(false);
                setReservations(false);
                setProfile(false)}} style={{cursor:'pointer'}}>
                  Bonjour {currentUser?currentUser.firstName : <span> ...</span>}
                  
                  </span>
          </li>
        </ul>
      </div>
 </div> 
:
  <div className='navbar1'>
      <div className="label1">
        <a href="/">Covoiturini</a>
      </div>
      <div className="navbar2">
        <ul>
          <li>
            <button className="btn-in1" onClick={() => setshowsignin(true)} > S'identifier </button>
          </li>
          {showsignin ? <Signin setshowsignin={setshowsignin} setshowsignup={setshowsignup}/> : null}
          <li>
            <button className="btn-up1" onClick={() => setshowsignup(true)}>S'enregistrer</button>
          </li>
          {showsignup ? <Signup setshowsignin={setshowsignin} setshowsignup={setshowsignup}/> : null}
        </ul>
      </div>
  </div>}
  </div>
  )
}

export default Navbar