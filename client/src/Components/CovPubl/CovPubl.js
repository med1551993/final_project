import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./CovPubl.css";
import med from "../Post/Photos GoMyCode Gabés 20.05.2022 (95).1.jpg";
import seat from "../Post/seat.png";
import DriverProfile from "../DriverProfile/DriverProfile";
import Profile from "../Profile/Profile";
import { deleteCov, updateCov } from "../../JS/voyageSlice";
import { Navigate } from "react-router-dom";


const CovPubl = ({setshowsignin,showsignin,setshowsignup,showsignup,el}) => {

const [updatedCov, setUpdatedCov] = useState({});
const dispatch = useDispatch()
const [showprofile, setshowprofile] = useState(false);
const [showform, setshowform] = useState(false);
const isAuth = localStorage.getItem("token");
  return (
    <div className="carte">
       <button className="deletepubl" onClick={() => {dispatch(deleteCov({id: el._id}));
       window.location.reload();
       Navigate('/search')}}> X </button>
      <div className="conducteur">
        <img src={el.createdBy[0].photo_url} />
        <div className="foulan">
          <h4>{el.createdBy[0].firstName +' '+ ' '+ el.createdBy[0].lastName}</h4>
          <h6 className="conduc">conducteur</h6>
        </div>
        <div className="price">
          <p>{el.price} DT</p>
        </div>
      </div> 

      <div className="date">
        <span>{`${el.date.slice(0, 10).split('-').reverse().join('/')}` + ' ' + 'à' + ' ' + el.heure}</span>
      </div>

      <div className="destination">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
        </svg>{" "}
        <h5>{el.Départ}</h5>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{marginLeft:'-70px',marginRight:'-70px'}}>
          <path d="M32.03 448c-11.75 0-23.05-6.469-28.66-17.69c-7.906-15.81-1.5-35.03 14.31-42.94l262.8-131.4L17.69 124.6C1.875 116.7-4.531 97.51 3.375 81.7c7.891-15.81 27.06-22.19 42.94-14.31l320 160C377.2 232.8 384 243.9 384 256c0 12.12-6.844 23.19-17.69 28.63l-320 160C41.72 446.9 36.83 448 32.03 448z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M320 144C320 223.5 255.5 288 176 288C96.47 288 32 223.5 32 144C32 64.47 96.47 0 176 0C255.5 0 320 64.47 320 144zM192 64C192 55.16 184.8 48 176 48C122.1 48 80 90.98 80 144C80 152.8 87.16 160 96 160C104.8 160 112 152.8 112 144C112 108.7 140.7 80 176 80C184.8 80 192 72.84 192 64zM144 480V317.1C154.4 319 165.1 319.1 176 319.1C186.9 319.1 197.6 319 208 317.1V480C208 497.7 193.7 512 176 512C158.3 512 144 497.7 144 480z" />
        </svg>{" "}
        <h5>{el.Destination}</h5>
      </div>

      <div className="options">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className={el.fumeur == 'on' ? 'active' : 'non-active'}> 
        <path d="M432 352h-384C21.5 352 0 373.5 0 400v64C0 490.5 21.5 512 48 512h384c8.75 0 16-7.25 16-16v-128C448 359.3 440.8 352 432 352zM400 464H224v-64h176V464zM536 352h-48C483.6 352 480 355.6 480 360v144c0 4.375 3.625 8 8 8h48c4.375 0 8-3.625 8-8v-144C544 355.6 540.4 352 536 352zM632 352h-48C579.6 352 576 355.6 576 360v144c0 4.375 3.625 8 8 8h48c4.375 0 8-3.625 8-8v-144C640 355.6 636.4 352 632 352zM553.3 87.13C547.6 83.25 544 77.12 544 70.25V8C544 3.625 540.4 0 536 0h-48C483.6 0 480 3.625 480 8v62.25c0 22 10.25 43.5 28.62 55.5C550.8 153 576 199.5 576 249.8V280C576 284.4 579.6 288 584 288h48C636.4 288 640 284.4 640 280V249.8C640 184.3 607.6 123.5 553.3 87.13zM487.8 141.6C463.8 125 448 99.25 448 70.25V8C448 3.625 444.4 0 440 0h-48C387.6 0 384 3.625 384 8v66.38C384 118.1 408.6 156 444.3 181.1C466.8 196.8 480 222.3 480 249.8V280C480 284.4 483.6 288 488 288h48C540.4 288 544 284.4 544 280V249.8C544 206.4 523 166.3 487.8 141.6z"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={el.musique == 'on' ? 'active' : 'non-active'} >
          <path d="M511.1 367.1c0 44.18-42.98 80-95.1 80s-95.1-35.82-95.1-79.1c0-44.18 42.98-79.1 95.1-79.1c11.28 0 21.95 1.92 32.01 4.898V148.1L192 224l-.0023 208.1C191.1 476.2 149 512 95.1 512S0 476.2 0 432c0-44.18 42.98-79.1 95.1-79.1c11.28 0 21.95 1.92 32 4.898V126.5c0-12.97 10.06-26.63 22.41-30.52l319.1-94.49C472.1 .6615 477.3 0 480 0c17.66 0 31.97 14.34 32 31.99L511.1 367.1z"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={el.climatiseur == 'on' ? 'active' : 'non-active'}>
          <path d="M352.6 127.1c-28.12 0-54.13 4.5-77.13 12.88l12.38-123.1c1.125-10.5-8.125-18.88-18.5-17.63C189.6 10.12 127.1 77.62 127.1 159.4c0 28.12 4.5 54.13 12.88 77.13L17.75 224.1c-10.5-1.125-18.88 8.125-17.63 18.5c9.1 79.75 77.5 141.4 159.3 141.4c28.12 0 54.13-4.5 77.13-12.88l-12.38 123.1c-1.125 10.38 8.125 18.88 18.5 17.63c79.75-10 141.4-77.5 141.4-159.3c0-28.12-4.5-54.13-12.88-77.13l123.1 12.38c10.5 1.125 18.88-8.125 17.63-18.5C501.9 189.6 434.4 127.1 352.6 127.1zM255.1 287.1c-17.62 0-31.1-14.38-31.1-32s14.37-32 31.1-32s31.1 14.38 31.1 32S273.6 287.1 255.1 287.1z"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={el.baggage == 'on' ? 'active' : 'non-active'}>
          <path d="M0 144v288C0 457.6 22.41 480 48 480H96V96H48C22.41 96 0 118.4 0 144zM336 0h-160C150.4 0 128 22.41 128 48V480h256V48C384 22.41 361.6 0 336 0zM336 96h-160V48h160V96zM464 96H416v384h48c25.59 0 48-22.41 48-48v-288C512 118.4 489.6 96 464 96z"/>
        </svg>
      </div>

      <div className="places">
      <span><img src={seat} /> {el.place} place(s) restante(s)</span>
      <button onClick={() => setshowform(true)}> Modifier </button>
      </div>

     
      {/********************* Form ********************/}
      {showform ? 
      <div className=" modalform ">
          <div className="col-md-8 order-md-1 ">
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
                    placeholder={el.Départ}
                    onChange={(e) =>setUpdatedCov({...updatedCov, Départ: e.target.value})}
                  >
                    <option value>{el.Départ}</option>
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
                  placeholder={el.Destination}
                  onChange={(e) =>setUpdatedCov({...updatedCov, Destination: e.target.value})}
                  >
                    <option value>{el.Destination}</option>
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
                    placeholder={el.date}
                    defaultValue={el.date}
                    required
                    onChange={(e) =>setUpdatedCov({...updatedCov, date: e.target.value})}
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
                    defaultValue={el.heure}
                    placeholder={el.heure}
                    required
                    onChange={(e) =>setUpdatedCov({...updatedCov, heure: e.target.value})}
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
                    defaultValue={el.place}
                    onChange={(e) =>setUpdatedCov({...updatedCov, place: e.target.value})}
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
                    defaultValue={el.price}
                    onChange={(e) =>setUpdatedCov({...updatedCov, price: e.target.value})}
                  />
                  <div className="invalid-feedback">
                    {" "}
                    ce champ est obligatoire.{" "}
                  </div>
                </div>

              </div>

              {/* <h6 style={{ marginTop: "10px", marginBottom: "10px" }}>
              Préférences du trajet:
                </h6>
                
              <div className="custom-control custom-checkbox">
              <label className="custom-control-label check" >
                <input
                  type="checkbox"
                  className="custom-control-input"
                 
                />
                 <span>Fumeur</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox">
              <label className="custom-control-label check" >
                <input
                  type="checkbox"
                  className="custom-control-input"
                  
               
                />
                 <span>Musique</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox">
              <label className="custom-control-label check" >
                <input
                  type="checkbox"
                  className="custom-control-input"
                
                />
                 <span>Trajet climatisé</span>
                </label>
              </div>
              <div className="custom-control custom-checkbox">
              <label className="custom-control-label check" >
                <input
                  type="checkbox"
                  className="custom-control-input"
                
                />
                 <span>Bagages</span>
                </label>
              </div> */}

              <hr className="mb-4" />


              <div className="custom-control custom-checkbox" style={{marginBottom:'10px'}}>
              <label className="custom-control-label check" >
                <input
                  type="checkbox"
                  className="custom-control-input"
               
                />
                 <span>je confirme les données ci-dessus</span>
                </label>
              </div>


              <button
                className="btn btn-lg btn-block "
                type="reset"
                style={{border:'1p solid white', backgroundColor:'white', marginRight:'15px', fontSize:'14px', fontWeight:'550'}}
                onClick={() => setshowform(false)}
              >
                Annuler
              </button>
             {isAuth ?
              <button
              
                type="button"
                className="btn btn_get btn_get_two"
                onClick={() =>{
                  console.log(el);
                  dispatch(updateCov({id :el._id, updatedCov}));
                  setshowform(false);
                  window.location.reload();

                }}
              >
                modifier
              </button>
              :
              "S'identifier pourque vous puissez modifier !"}
            </form>
          </div>
      </div>
      : null}

      {/*************************************************/}
      
    </div>
  );
};

export default CovPubl;
