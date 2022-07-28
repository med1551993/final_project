import React from 'react'
import "./Profile.css";
import med from "../Post/Photos GoMyCode Gabés 20.05.2022 (95).1.jpg";
import star from './star-free-icon-font.png'

const Profile = ({setshowprofile, voyage}) => {
  return (
    <div className="page-content page-container">
      <div className="row containe d-flex justify-content-center">
        <div className="col-xl-6 col-md-12">
        <button className="closeprofile closeprofile2" onClick={() => setshowprofile(false)}> X </button>
          <div className="card user-card-full">
            <div className="row m-l-0 m-r-0">
              <div className="col-sm-4 bg-c-lite-green user-profile">
                <div className="card-block text-center text-white">
                  <div className="m-b-25">
                    <img src={voyage.createdBy[0].photo_url} className="img-radius" alt="User-Profile-Image" />
                  </div>
                  <h5 className="f-w-600">{voyage.createdBy[0].firstName +' '+ ' '+ voyage.createdBy[0].lastName}</h5>
                  <h7> 29 ans</h7>
                  <p style={{position:'absolute', top:'10px', left:'170px'}}>3.5 <img src={star} alt="star" style={{width:'20px', height:'20px'}}/></p>
                  {/* <p>Web Designer</p> */}
                </div>
              </div>
              <div className="col-sm-8">
                <div className="card-block">
                  <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Informations générales</h6>
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Email</p>
                      <h6 className="text-muted f-w-400">{voyage.createdBy[0].email}</h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Portable</p>
                      <h6 className="text-muted f-w-400">{voyage.createdBy[0].mobile}</h6>
                    </div>
                  </div>
                  <div className="row row2">
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Adresse</p>
                      <h6 className="text-muted f-w-400">{voyage.createdBy[0].address}</h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Voiture</p>
                      <h6 className="text-muted f-w-400">Peugeot 3008</h6>
                    </div>
                  </div>

                  <div style={{height:'20px'}}></div>


                  <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Informations utiles</h6>
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Membre depuis</p>
                      <h6 className="text-muted f-w-400">04/07/2020</h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Nombre de publications</p>
                      <h6 className="text-muted f-w-400">4</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Profile