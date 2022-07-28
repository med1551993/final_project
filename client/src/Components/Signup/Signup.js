import React, { useState } from "react";
import "./Signup.css";
import { useDispatch } from "react-redux";
import { userRegister } from "../../JS/userSlice";
import { useNavigate } from "react-router-dom";

const Signup = ({setshowsignup,setshowsignin}) => {
  const [register, setregister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    photo_url:"",
    Address:""
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <section
      className="vh-100 signupmodal">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "20px" }}>
            <button className="closesignup" onClick={() => setshowsignup(false)}> X </button>
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 animation1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4">
                      Sign up
                    </p>
                    <form className="mx-1 mx-md-4">
                      <div
                        className="d-flex flex-row align-items-center mb-4"
                        style={{ justifyContent: "spaceBetween" }}
                      >
                        <i className="fas fa-user fa-lg me-3 fa-fw"/>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            className="form-control form-control1"
                            onChange={(e) =>setregister({...register,firstName: e.target.value})}
                            placeholder='Prénom'
                          />
                        </div>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            className="form-control form-control1"
                            onChange={(e) =>setregister({...register,lastName: e.target.value})}
                            placeholder='Nom'
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"/>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            className="form-control"
                            onChange={(e) =>setregister({...register,email: e.target.value})}
                            placeholder='Email'
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"/>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            className="form-control"
                            onChange={(e) =>setregister({...register,password: e.target.value})}
                            placeholder='Mot de passe'
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-phone fa-lg me-3 fa-fw"/>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) =>setregister({...register,mobile: e.target.value})}
                            placeholder='Mobile'
                          />
                        </div>
                      </div>   
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-image fa-lg me-3 fa-fw"/>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="file"
                            className="form-control"
                            accept="image/*"
                            onChange={(e) =>setregister({...register,photo: e.target.value})}
                            placeholder='photo'
                          />
                        </div>
                      </div>   
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-map-marker-alt fa-lg me-3 fa-fw"/>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) =>setregister({...register,Address: e.target.value})}
                            placeholder='Adresse'
                          />
                        </div>
                      </div>   
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                          onClick={() => 
                            {
                              dispatch(userRegister(register));
                              setshowsignup(false);
                            

                               setTimeout(() => { 
                                navigate('/')
                               }, 2000);
                             
                            }}
                        >
                          Rejoinez nous
                        </button>  
                      </div>
                      <label
                        className="form-check-label"
                        htmlFor="form2Example3"
                      >
                        Déjà un membre? <span className='tosignin' onClick={() =>{ 
                          setshowsignup(false);
                          setshowsignin(true);
                          }}>
                          S'identifier
                          </span>
                      </label>
                    </form>
                  </div>
                   <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 animation2">
                     <img
                      src="https://www.tco.re/wp-content/uploads/2018/09/covoiturage-illustration.jpg"
                      className="img-fluid" 
                      alt="Sample image"
                    />
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

export default Signup;
