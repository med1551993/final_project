import React, { useEffect, useState } from 'react'
import "./PostList.css";
import marqueur from './marqueur.png'
import carte from './carte.png'
import calendrier from './calendrier.png'
import rechercher from './rechercher.png'
import Carte from '../Carte/Carte';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import CovPubl from '../CovPubl/CovPubl';
import Reservations from '../Reservations/Reservations';
import { useSelector } from "react-redux";
import user from '../Navbar/user.png'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser, userCurrent } from '../../JS/userSlice';
import { getVoyage } from '../../JS/voyageSlice';


const PostList = () => {
  const isAuth = localStorage.getItem("token");

  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    };
      
      dispatch(getVoyage())
  
  }, []); 
  let currentVoyage = useSelector((state) => state.voyage.voyage)
  const navigate = useNavigate()
  const [profile, setProfile] = useState(false);
  const [covPubl, setCovPubl] = useState(false);
  const [reservations, setReservations] = useState(false);
  const [search, setsearch] = useState({
    départ:'',
    destination:'',
    date:''
  });
  
  const [updatedUser, setUpdatedUser] = useState({});
  const dispatch = useDispatch()
  let currentUser = useSelector((state) => state.user.user)
  const voyages = useSelector((state) => state.voyage.voyage)

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
              onClick={() =>{dispatch(updateUser({id:currentUser._id,updatedUser}));
              window.location.reload();
              dispatch(getVoyage())}}
              >Enregistrer les modifications 
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
{/************************ search + List *********************************************/}
<div className='search'>

<div className='bloc'>
  <div className='part1'>
   <img src={marqueur}/>
  </div>
  <div className='part2'>
     <h6>Départ</h6>
     <input type='text' placeholder='Ou êtes vous?' 
     onChange={(e) => setsearch({ ...search, départ: e.target.value })}/>     
  </div>
</div>

<div className='bloc'>
  <div className='part1'>
   <img src={carte}/>
  </div>
  <div className='part2'>
     <h6>Destination</h6>
     <input type='text' placeholder='Ou allez vous?'
     onChange={(e) => setsearch({ ...search, destination: e.target.value })}/>   
  </div>
</div>

<div className='bloc'>
  <div className='part1'>
   <img src={calendrier}/>
  </div>
  <div className='part2'>
     <h6>Date</h6>
     <input type='Date'
       onChange={(e) => setsearch({ ...search, date: e.target.value })}/>
  </div>
</div>

<button> 
 <img src={rechercher}/>
</button>

</div>

<h5 style={{margin:'0 auto',marginTop:'60px', background:'#d0e0f8', borderRadius:'10px', width:'63vw', padding:'10px',letterSpacing:'0.5px'}}> 
Les 6 dernières annonces publiées:
</h5>
<div className='postlist'>
 {voyages.filter((el) => (el.Départ.toLowerCase()).includes(search.départ.toLowerCase()) && (el.Destination.toLowerCase()).includes(search.destination.toLowerCase()) &&  el.date.includes(search.date))?
  voyages.filter((el) => el.Départ.toLowerCase().includes(search.départ.toLowerCase()) && el.Destination.toLowerCase().includes(search.destination.toLowerCase()) &&  el.date.includes(search.date)).map((voyage) => (<Carte voyage={voyage} />))
  : voyages.map((voyage) =>(<Carte voyage={voyage}/>)) } 
  

</div> 

{/*********************************************************************/}

</>
}

    <Footer/>
    </>
  )
}

export default PostList