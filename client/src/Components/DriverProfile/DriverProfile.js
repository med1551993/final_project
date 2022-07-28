import React from "react";
import Signin from "../Signin/Signin";
import "./DriverProfile.css";
import med from "./Photos GoMyCode Gabés 20.05.2022 (95).1.jpg";


const DriverProfile = ({setshowprofile,setshowsignin,showsignin,setshowsignup,showsignup}) => {
  const isAuth = false;
  return (
    <div  className='driverprofile'>
      <div className="contain">
      <button className="closeprofile" onClick={() => setshowprofile(false)}> X </button>
        <div className="header">
          <img src={med} alt="avatar" />
          <span>
            <h4>Foulan Foulani</h4>
            <h5>29 ANS</h5>
          </span>
        </div>

        <div className="milieu">
          <div>
            <div className="card-contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx={12} cy={10} r={3} />
              </svg>
              86 Rue de l'environnement Gabès 6000
            </div>
            <div className="card-contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              20254741
            </div>

            <div className="card-contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
              Foulen@gmail.com
            </div>
          </div>
          <div className="comments">
            <div id="login-container">
              <div className="profile-img">
                <img src="https://images.unsplash.com/photo-1504933350103-e840ede978d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80" />
              </div>
              <h7>Amel</h7>
              <div
                className="description"
                style={{ marginTop: "-5px", color: "#6f6f7b" }}
              >
                Il est trés gentil et serviable 👍.
              </div>
            </div>
            <div id="login-container">
              <div className="profile-img">
                <img src="https://images.unsplash.com/photo-1504933350103-e840ede978d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80" />
              </div>
              <h7>Majdi</h7>
              <div
                className="description"
                style={{ marinTop: "-5px", color: "#6f6f7b" }}
              >
                Vraiment c'était très confortable 🥰.
              </div>
            </div>
            <div id="login-container">
              <div className="profile-img">
                <img src="https://images.unsplash.com/photo-1504933350103-e840ede978d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80" />
              </div>
              <h7>Salma</h7>
              <div
                className="description"
                style={{ marinTop: "-5px", color: "#6f6f7b" }}
              >
                Merci pour la ponctualité.
              </div>
            </div>
          </div>
        </div>
   
   <div className="head">
    <span>
         <button className="reserv">
          Réserver
         </button>
         </span>
        
        {!isAuth ? 
        <h7><span className='tosignin' onClick={() =>{

          setshowsignin(true);}}> se connecter </span> pour ajouter un commentaire</h7>
        
        : 
        <div className="comment">
                  <div className="comment-box ml-2">
                    <h5>Add a comment</h5>
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating"
                        defaultValue={5}
                        id={5}
                      />
                      <label htmlFor={5}>☆</label>
                      <input
                        type="radio"
                        name="rating"
                        defaultValue={4}
                        id={4}
                      />
                      <label htmlFor={4}>☆</label>
                      <input
                        type="radio"
                        name="rating"
                        defaultValue={3}
                        id={3}
                      />
                      <label htmlFor={3}>☆</label>
                      <input
                        type="radio"
                        name="rating"
                        defaultValue={2}
                        id={2}
                      />
                      <label htmlFor={2}>☆</label>
                      <input
                        type="radio"
                        name="rating"
                        defaultValue={1}
                        id={1}
                      />
                      <label htmlFor={1}>☆</label>
                    </div>
                    <div className="comment-area">
                      <textarea
                        className="form-control"
                        placeholder="what is your view?"
                        rows={4}
                        defaultValue={""}
                      />
                    </div>
                    <div className="comment-btns mt-2">
                      <div className="row">
                        <div className="col-6">
                          <div className="pull-left">
                            <button className="btn btn-success btn-sm">
                              annuler
                            </button>
                          </div>
                        </div>
                        <div className="col-6">
                        
                            <button className="btn btn-success send btn-sm">
                             envoyer  ➜ <i className="fa fa-long-arrow-right" />
                            </button>
                         
                        </div>
                       
                      </div>
                    </div>
                  </div>
            </div>}
        
          {console.log(showsignin)}
            {showsignin ? <Signin setshowsignin={setshowsignin} setshowsignup={setshowsignup} /> : null} 
            {showsignup ? <Signup setshowsignin={setshowsignin} setshowsignup={setshowsignup}/> : null}
            </div>
      </div>
    </div>
  );
};

export default DriverProfile;
