import React, { useEffect, useState } from "react";
import "./PublishPost.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Reservations from "../Reservations/Reservations";
import CovPubl from "../CovPubl/CovPubl";
import { AddVoyage, getVoyage, voyageSlice } from "../../JS/voyageSlice";
import { useDispatch } from "react-redux";
import user from '../Navbar/user.png'
import { useSelector } from "react-redux";
import { updateUser, userCurrent } from "../../JS/userSlice";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "@mui/material";

const PublishPost = () => {
  let currentVoyage = useSelector((state) => state.voyage.voyage)
  const isAuth = localStorage.getItem("token");
  let currentUser = useSelector((state) => state.user.user)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [profile, setProfile] = useState(false);
  const [covPubl, setCovPubl] = useState(false);
  const [reservations, setReservations] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});
  const [voyage, setVoyage] = useState({ 
    Départ: "",
  Destination: "",
  date: "",
  heure:"" ,
  place:"",
  price:"",
  fumeur: "off",
  musique:"off" ,
  climatiseur: "off",
  baggage: "off",
  });

  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    };
      
      dispatch(getVoyage())
  
  }, []); 

  return (
    <>
    
         <Navbar setProfile={setProfile} setCovPubl={setCovPubl} setReservations={setReservations}/>
         {profile ?
<>
 {/******************** Profile ***************************/}
 <div className="container animation1" style={{marginTop:'40px', marginBottom:'40px'}}>
 <div className="main-body">
   <div className="row">
     <div className="col-lg-4">
       <div className="cardd">
         <div className="card-body">
           <div className="d-flex flex-column align-items-center text-center">
            {/* <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" className="rounded-circle p-1 bg-primary" width={110} /> */}
             <img src={currentUser ? `${currentUser.photo_url}` : user} alt="photo" className="rounded-circle p-1 bg-primary" width={110} height={110} style={{objectFit:'cover'}}/>
             <div className="mt-3">
               <h4>{currentUser? currentUser.firstName + ' ' + currentUser.lastName : <span> ...</span>}</h4>
               <p className="text-secondary mb-1">29 ans</p>
               <p className="text-muted font-size-sm">Peugeot 3008</p>
             </div>
           </div> 
         </div>
       </div>
     </div>
     <div className="col-lg-8">
       <div className="cardd">
         <div className="card-body">
           <div className="row mb-3">
             <div className="col-sm-3">
               <h6 className="mb-0">Nom</h6>
             </div>
             <div className="col-sm-9 text-secondary">
               <input type="text" className="form-control" placeholder={currentUser? currentUser.lastName : <span> ...</span>} 
                onChange={(e) =>setUpdatedUser({...updatedUser,lastName: e.target.value})}/>
             </div>
           </div>
           <div className="row mb-3">
             <div className="col-sm-3">
               <h6 className="mb-0">Prénom</h6>
             </div>
             <div className="col-sm-9 text-secondary">
               <input type="text" className="form-control" placeholder={currentUser? currentUser.firstName : <span> ...</span>}
              
                onChange={(e) =>setUpdatedUser({...updatedUser,firstName: e.target.value})}/>
             </div>
           </div>
           <div className="row mb-3">
             <div className="col-sm-3">
               <h6 className="mb-0">Email</h6>
             </div>
             <div className="col-sm-9 text-secondary">
               <input type="text" className="form-control" placeholder={currentUser? currentUser.email : <span> ...</span>} 
               onChange={(e) =>setUpdatedUser({...updatedUser,email: e.target.value})}/>
             </div>
           </div>
           <div className="row mb-3">
             <div className="col-sm-3">
               <h6 className="mb-0">Portable</h6>
             </div>
             <div className="col-sm-9 text-secondary">
               <input type="text" className="form-control" placeholder={currentUser? currentUser.mobile : <span> ...</span>}
               onChange={(e) =>setUpdatedUser({...updatedUser,mobile: e.target.value})}/>
             </div>
           </div>
           <div className="row mb-3">
             <div className="col-sm-3">
               <h6 className="mb-0">Address</h6>
             </div>
             <div className="col-sm-9 text-secondary">
               <input type="text" className="form-control" placeholder={currentUser? currentUser.address: <span> ...</span>}
               onChange={(e) =>setUpdatedUser({...updatedUser,address: e.target.value})} />
             </div>
           </div>
           <div className="row">
             <div className="col-sm-3" />
             <div className="col-sm-9 text-secondary">
               <button type='submit' className="btn btn_get btn_get_two"  
              onClick={() => {
                setTimeout(() => {
                dispatch(updateUser({id :currentUser._id, updatedUser}));
                window.location.reload();
              }, 1000);
              }}>Enregistrer les modifications 
              </button>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
 </div>		
{/*********************************************************************/}
</>
: covPubl ? 
< div className = 'animation2'>
  {/******************** covoiturages publiés ***************************/}
<h5 style={{margin:'0 auto', marginTop:'20px' ,background:'#d0e0f8', borderRadius:'10px', width:'63vw', padding:'10px',letterSpacing:'0.5px'}}> 
    Mes covoiturages publiés:
    </h5>
    <div className='postlist'>
     {console.log(currentVoyage)}
    {currentVoyage.filter((el) => el.id == currentUser.id).map((el) => <CovPubl el={el}/>)}
    </div>
   {/*********************************************************************/}
  </div>
: reservations ? 
< div className = 'animation1'>
    {/********************* Votres réservations **************************/}
    <h5 style={{margin:'0 auto',marginTop:'20px' ,background:'#d0e0f8', borderRadius:'10px', width:'63vw', padding:'10px',letterSpacing:'0.5px'}}> 
    Mes réservations:
    </h5>
    <div className='postlist'>
        <Reservations/>
        <Reservations/>
        <Reservations/>  
    </div>
    {/*********************************************************************/}
    </div>

:
<>
      {/********************* Form ********************/}

      <div className="container" style={{marginTop:'50px', marginBottom:'50px'}}>
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Informations utiles</span>
              {/* <span className="badge badge-secondary badge-pill">3</span> */}
            </h4>
            <ul className="list-group mb-3 sticky-top">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Nombre de mes publications</h6>
                  {/* <small className="text-muted">Brief description</small> */}
                </div>
               {console.log(currentUser.voyages.length)}
               {/* <span className="text-muted">{currentUser.voyages.length()}</span>  */}
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Nombre de mes réservations</h6>
                  {/* <small>EXAMPLECODE</small> */}
                </div>
                <span className="text-success">2 j</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total gagné (DT)</span>
                <strong>200 DT</strong>
              </li>
            </ul>
            {/* <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">
                    Redeem
                  </button>
                </div>
              </div>
            </form> */}
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Nouveau trajet</h4>
            <form className="needs-validation" noValidate>
              <div className="row">
                <h6 style={{ marginTop: "10px", marginBottom: "10px" }}>
                  Itinéraire du voyage
                </h6>
                <div className="col-md-6 mb-3">
                  <label htmlFor="country">Départ</label>
                  <select
                    className="custom-select d-block w-100 form-control"
                    required
                    onChange={(e) => setVoyage({ ...voyage, Départ: e.target.value })}
                  >
                    <option value>Choisir le point de départ...</option>
                    <option>Ariana</option>
                    <option>Béja</option>
                    <option>Ben Arous</option>
                    <option>Bizerte</option>
                    <option>Gabès</option>
                    <option>Gafsa</option>
                    <option>Jendouba</option>
                    <option>Kairouan</option>
                    <option>Kasserine</option>
                    <option>Kébili</option>
                    <option>Kef</option>
                    <option>Mahdia</option>
                    <option>Manouba</option>
                    <option>Médenine</option>
                    <option>Monastir</option>
                    <option>Nabeul</option>
                    <option>Sfax</option>
                    <option>Sidi Bouzid</option>
                    <option>Siliana</option>
                    <option>Sousse</option>
                    <option>Tataouine</option>
                    <option>Tozeur</option>
                    <option>Tunis</option>
                    <option>Zaghouan</option>
                  </select>
                  <div className="invalid-feedback">
                    {" "}
                    ce champ est obligatoire.{" "}
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="state">Destination</label>
                  <select
                    className="custom-select d-block w-100 form-control"
                    required
                    onChange={(e) => setVoyage({ ...voyage, Destination: e.target.value })}
                  >
                    <option value>Choisir votre destination...</option>
                    <option>Ariana</option>
                    <option>Béja</option>
                    <option>Ben Arous</option>
                    <option>Bizerte</option>
                    <option>Gabès</option>
                    <option>Gafsa</option>
                    <option>Jendouba</option>
                    <option>Kairouan</option>
                    <option>Kasserine</option>
                    <option>Kébili</option>
                    <option>Kef</option>
                    <option>Mahdia</option>
                    <option>Manouba</option>
                    <option>Médenine</option>
                    <option>Monastir</option>
                    <option>Nabeul</option>
                    <option>Sfax</option>
                    <option>Sidi Bouzid</option>
                    <option>Siliana</option>
                    <option>Sousse</option>
                    <option>Tataouine</option>
                    <option>Tozeur</option>
                    <option>Tunis</option>
                    <option>Zaghouan</option>
                  </select>
                  <div className="invalid-feedback">
                    {" "}
                    ce champ est obligatoire.{" "}
                  </div>
                </div>
              </div>

              <div className="row">
                <h6 style={{ marginTop: "10px", marginBottom: "10px" }}>
                  Informations sur le voyage
                </h6>
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder='Date de départ'
                    required
                    onChange={(e) => setVoyage({ ...voyage, date: e.target.value })}
                  />
                  <div className="invalid-feedback">
                    {" "}
                    ce champ est obligatoire.{" "}
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Heure</label>
                  <input
                    type="time"
                    className="form-control"
                    step='600'
                    placeholder='Heure de départ'
                    required
                    onChange={(e) => setVoyage({ ...voyage, heure: e.target.value })}
                  />
                  <div className="invalid-feedback">
                    {" "}
                    ce champ est obligatoire.{" "}
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Nombre de places</label>
                  <input
                    type="number"
                    className="form-control"
                    id="Nombre de places"
                    min="1" 
                    max="4"
                    required
                    onChange={(e) => setVoyage({ ...voyage, place: e.target.value })}
                  />
                  <div className="invalid-feedback">
                    {" "}
                    ce champ est obligatoire.{" "}
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Prix par place (DT)</label>
                  <input
                    type="number"
                    className="form-control"
                    min="0" 
                    step='0.5'
                    required
                    onChange={(e) => setVoyage({ ...voyage, price: e.target.value, createdBy:currentUser })}
                  />
                  <div className="invalid-feedback">
                    {" "}
                    ce champ est obligatoire.{" "}
                  </div>
                </div>

              </div>

              <h6 style={{ marginTop: "10px", marginBottom: "10px" }}>
              Préférences du trajet:
                </h6>
                
              <div className="custom-control custom-checkbox">
              <label className="custom-control-label check" >
                <input
                  type="checkbox"
                  className="custom-control-input"
                  onChange={(e) => setVoyage({ ...voyage, fumeur: e.target.value })}
                />
                 <span>Fumeur</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox">
              <label className="custom-control-label check" >
                <input
                  type="checkbox"
                  className="custom-control-input"
                  onChange={(e) => setVoyage({ ...voyage, musique: e.target.value })}
                />
                 <span>Musique</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox">
              <label className="custom-control-label check" >
                <input
                  type="checkbox"
                  className="custom-control-input"
                  onChange={(e) => setVoyage({ ...voyage, climatiseur: e.target.value })}
                />
                 <span>Trajet climatisé</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox">
              <label className="custom-control-label check" >
                <input
                  type="checkbox"
                  className="custom-control-input"
                  onChange={(e) => setVoyage({ ...voyage, baggage: e.target.value })}
                />
                 <span>Bagages</span>
                </label>
              </div>

              <hr className="mb-4" />


              <div className="custom-control custom-checkbox">
              <label className="custom-control-label check" >
                <input
                  type="checkbox"
                  className="custom-control-input"
                  onChange={(e) => setUpdatedUser({ ...updatedUser,voyages:[voyage,...currentUser.voyages]})}
                />
                 <span>je confirme les données ci-dessus</span>
                </label>
              </div>


              <button
                className="btn btn-lg btn-block "
                type="reset"
                style={{border:'1p solid white', backgroundColor:'white', marginRight:'15px', fontSize:'14px', fontWeight:'550'}}
              >
                Annuler
              </button>
             {isAuth ?
               <button
                 type="button"
                 className="btn btn_get btn_get_two"
                 onClick={() => {

                  dispatch(AddVoyage(voyage));
                 dispatch(updateUser({id :currentUser._id, updatedUser}));
                 window.location.reload();
             
                //setInterval(() => {
                //  navigate('/publish')
                 // }, 3000);
                  
                // setUpdatedUser({ ...updatedUser,voyages: [voyage, ...updatedUser.voyages]});
                 // dispatch(updateUser({id :currentUser._id, updatedUser}));
                 //  window.location.reload();
                 // setTimeout(() => {
                 // navigate('/publish')
                 // }, 2000);
              }}
              >
               Publier
               </button>
             
              :
              "S'identifier pourque vous puissez publier !"}
            </form>
          </div>
        </div>
      </div>

      {/*************************************************/}
</>
}
      <Footer />
    </>
  );
};

export default PublishPost;
