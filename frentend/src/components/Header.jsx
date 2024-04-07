// import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom'

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

import React from 'react'

const Header = () => {
  return (
     <header className="header">
    <nav className="navigateur">
    
    <img className='site-logo' src="assets/pictures/logo.png" alt="Logo" />
    

        <ul>
            <li className='list-item'><Link to="/" >Home </Link></li>
            <li className='list-item'><Link to="contact">Contact</Link></li>
            <li className='list-item'><Link to="seconnecter" >Se Connecter</Link></li>
            <li className='list-item'><Link to="inscrire" >S'inscrire</Link></li>


            <li id='join'><button type="button" id='btn' style={{color:"white"}}><Link to="inscrire">Commencer</Link></button></li>

        </ul>
        
    </nav>
 </header>
  )
}

export default Header