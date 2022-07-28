import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../JS/userSlice";
import Loading from "../Loading";

const Signin = ({setshowsignin,setshowsignup}) => {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
const navigate = useNavigate()
  return (
    <section className='vh-100 signinmodal'>
      <div className="container h-100" style={{ width: "70vw"}}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "20px",position:'relative' }}>
             <button className="closesignin" onClick={() => setshowsignin(false)}> X </button>
              <div className="card-body ">
                <div className="row justify-content-center" >
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-lg-1 animation2 " >
                    <img
                      src="https://tohy.mg/wp-content/themes/snssimen/assets/img/covoitureur.png"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                  <div
                    className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 animation1"
                    style={{ marginTop: "20px", paddingLeft: "20px" }}
                  >
                    <p
                      className="text-center h1 fw-bold mx-1 mx-md-4"
                      style={{ marginBottom: "2rem" }}
                    >
                      Sign in{" "}
                    </p>
                    <form className="mx-1 mx-md-4">
                      <div
                        className="d-flex flex-row align-items-center mb-4"
                        style={{ justifyContent: "spaceBetween" }}
                      ></div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" style={{marginBottom:'30px'}}/>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            onChange={(e) =>
                              setlogin({ ...login, email: e.target.value })
                            }
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                          Email
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" style={{marginBottom:'30px'}} />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            onChange={(e) =>
                              setlogin({ ...login, password: e.target.value })
                            }
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Mot de passe
                          </label>
                        </div>
                      </div>
                    
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                          onClick={() =>
                            {
                              dispatch(userLogin(login));
                              setshowsignin(false);
                              setTimeout(() => {
                               window.location.reload();
                              }, 2000);
                             
                            }}
                          
                        >
                          Allons-y
                        </button>
                      </div>
                      <label className="form-check-label" htmlFor="form2Example3">
                        Pas encore enregistré? <span className='toregister' onClick={() =>{ 
                          setshowsignup(true);
                          setshowsignin(false);
                          }}>s'enregistrer maintenant</span>
                      </label>
                    </form> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
