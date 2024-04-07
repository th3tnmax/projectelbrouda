// import React from 'react';
import './Footer.css';

import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
     <div>
         <img src='./assets/pictures/logo.png'></img>
         <ul>
             <li className='footer-headers'>Nos Services</li>
             <li>Cours</li>
             <li>Cours gratuits</li>

         </ul>
        <ul>
             <li className='footer-headers' >Contact</li>
             <li>Adress : Sekiet Ezzit, Rue Tunis , Sfax</li>
             <li>Email : achraf5hadrich@gmail.com</li>
             <li>Tel : +21621553995</li>
         </ul>
         <ul>
             <li  className='footer-headers'>Liens utiles</li>
             <li>ton compte</li>
             <li>à propos </li>
             <li>aide</li>
         </ul>
        
     </div>
     <hr ></hr>
     <div className='copyright' >
         <p>© Copyright L’expert centre de formation 2024</p>
         <div>
            
             <img className='photo-fb' src='./assets/pictures/icon-fb.png'></img>
             <img className='photo-insta' src='./assets/pictures/icon-insta.png'></img>
            

         </div>
         <p>
             Centre de formation l’expert
         </p>

     </div>
    </footer>
     </>
  )
}

export default Footer

// export default function Footer() {
//   return (
//    <>
//    <footer>
//     <div>
//         <img src='./assets/pictures/logo.png'></img>
//         <ul>
//             <li className='footer-headers'>Nos Services</li>
//             <li>Cours</li>
//             <li>Cours gratuits</li>

//         </ul>
//         <ul>
//             <li className='footer-headers' >Contact</li>
//             <li>Adress : Sekiet Eddeyer, Rue Mahdia , Sfax</li>
//             <li>Email : obenhriz@gmail.com</li>
//             <li>Tel : +21944230772</li>
//         </ul>
//         <ul>
//             <li  className='footer-headers'>Liens utiles</li>
//             <li>ton compte</li>
//             <li>à propos </li>
//             <li>aide</li>
//         </ul>
        
//     </div>
//     <hr ></hr>
//     <div className='copyright' >
//         <p>© Copyright L’expert centre d’éducation 2023</p>
//         <div>
            
//             <img className='photo-fb' src='./assets/pictures/icon-fb.png'></img>
//             <img className='photo-insta' src='./assets/pictures/icon-insta.png'></img>
            

//         </div>
//         <p>
//             Centre d’éducation l’expert
//         </p>

//     </div>
//    </footer>
//    </>
//   )
// }
