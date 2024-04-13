// import React from 'react'
import './Header.css';
import { Link ,useNavigate  } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
// export default function Header() {
//   return (
//  <header className="header">
//     <nav className="navigateur">
    
//     <img className='site-logo' src="assets/pictures/logo.png" alt="Logo" />
    

//         <ul>
//             <li className='list-item'><Link to="/" >Home </Link></li>
//             <li className='list-item'><Link to="contact">Contact</Link></li>
//             <li className='list-item'><Link to="seconnecter" >Se Connecter</Link></li>
//             <li id='join'>
//            <button type="button" id='btn' style={{color:"white"}}><Link to="inscrire">Commencer</Link></button></li>

//         </ul>
        
//     </nav>
//  </header>
//   )
// }


const Header = () => {
  const [id, setId] = useState();
  const navigate = useNavigate();
  

  useEffect(() => {
    // Retrieve current user ID from sessionStorage
  const userdata = JSON.parse(sessionStorage.getItem("userData"));

  if (userdata!= null) {
    const currentId =userdata._id;
    setId(currentId);
  } else{
    setId(null);
  }
    // Check if ID is valid
  // if (!currentId) {
  //   console.log("No user ID found");
  //   return; // Exit early
  // }
  }, );
  return (
     <header className="header">
    <nav className="navigateur">
    
    <img className='site-logo' src="assets/pictures/logo.png" alt="Logo" />
    

        <ul>
            <li className='list-item'><Link to="/" >Home </Link></li>
            <li className='list-item'><Link to="contact">Contact</Link></li>
            

            {/* <li className='list-item'><Link to="seconnecter" >Se Connecter</Link></li> */}

            <li>
          {/* Conditional rendering for Login/Profile button */}
          {id ? (
            <li className='list-item'><Link to={`/Profile/${id}`} >Profile</Link></li>
          ) : (
            <>
            <li className='list-item'><Link to="seconnecter" >Se Connecter</Link></li>
            <li className='list-item'><Link to="inscrire" >S'inscrire</Link></li>
            </>
          )}
        </li>
            


            <li id='join'><button type="button" id='btn' style={{color:"white"}}><Link to="inscrire">Commencer</Link></button></li>

        </ul>
        
    </nav>
 </header>
  )
}

export default Header

