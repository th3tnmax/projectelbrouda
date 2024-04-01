import React, { Fragment } from 'react'
import './Home.css';

export default function Home() {
  

  return (
    <Fragment>
      <div className='home'>
        <div className='parag'>
        <h1 className='rejoindre '>Rejoigner L’expert<br></br> Académie Pour exceller<br></br> dans vos études</h1>
        <p className='vous'>Vous êtes un étudiant en 3ème ou 4ème Secondaire section <br></br> économie et Gestion? <br></br> L’expert est le meilleur endroit pour toi!</p>
        <div className='search'>
          <img className='searchPhoto searchBox' src='./assets/pictures/search.png' alt='search'></img>
          <input className='searchInput searchBox' type='text' placeholder='Chercher des cours' ></input>
          <button type='button' className='seachbox buttonSerach'>Rechercher</button>
        </div>
        </div>
        <img className='photo' src='./assets/pictures/main.png' alt='main'></img>

      </div>
      <div className='decouvrir-cours'>
        <h2 className='decourvrir-text'>Découvrir nos cours</h2>
        <div className='cours-container'>
          <div className='gestion flex-item' >
            <img src='./assets/pictures/gestion.png' alt='gestion'></img>
          <p>Gestion</p>
          </div>
          <div className='math flex-item'>
          <img src='./assets/pictures/maths.png' alt='maths'></img>
          <p>Maths</p>
          </div>
          <div className='eco flex-item'>
          <img src='./assets/pictures/eco.png' alt='eco' className='ecoimg'></img>
          <p>Economie</p>
          </div>
          <div className='geo flex-item' >
          <img src='./assets/pictures/geo.png' alt='geo'></img>
          <p>Géographie</p>

          </div>
          
          

        </div>

      </div>
      <div className='processus'>
        <div className='first'>
          <h2 className='processus-header'>Notre processus est centré sur  la qualité et la perfection.</h2>
          <img className='processus-picture' src='./assets/pictures/image20.png' alt='processus'></img>

        </div>
        <div className='second'> 
        <table>
          <tr>
            <td className='num'>50+</td>
            <td className='para-table' rowSpan={2}>Dédié aux étudiants inscrits en: 3ème et 4ème secondaire section économie </td>
          </tr>
          <tr className='para-table'>Etudiants</tr>
          <tr>
            <td className='num'>20+</td>
            <td className='para-table' rowSpan={2}>Les cours couvrent tous les matières et sont d ehaute qualité</td>
          </tr>
          <tr className='para-table'>Cours</tr>
        </table>

        </div>

      </div>
      <div className='cours-gratuits'>
        <h2>Découvrir nos Cours Gratuits</h2>
        <div className='cours-container-grid'>
          <ul>
            <li id='tous'>Tous</li>
            <li>Economie</li>
            <li>Gestion</li>
            <li>Histoire</li>
            <li>Géographie</li>
            <li>Philosophie</li>
            <li>Arabe</li>
            <li>Français</li>
            <li>Anglais</li>
            <li>Informatique</li>
          </ul>
          <div>
            <img className='img-cours-grat' src='./assets/pictures/Frame6530.png' alt='cour gratuit'></img>
            <div className='cours-name'>
              <img src='./assets/pictures/Ellipse14.png'></img>
              <p>Français</p>
            </div>
            <h3>Formation Français Pour Baccalauréat </h3>
            
            

          </div>
          <div>
            <img className='img-cours-grat' src='./assets/pictures/Frame6531.png' alt='cour gratuit'></img>
            <div className='cours-name'>
              <img  src='./assets/pictures/Ellipse14.png'></img>
              <p>Histoire</p>
            </div>
            <h3>Comment Garantir Une Excellente Note En Histoire  </h3>
            
            

          </div>
          <div>
            <img className='img-cours-grat' src='./assets/pictures/Frame6532.png' alt='cour gratuit'></img>
            <div className='cours-name'>
              <img  src='./assets/pictures/Ellipse14.png'></img>
              <p>Histoire</p>
            </div>
            <h3>Comment Garantir Une Excellente Note En Histoire  </h3>
            
            

          </div>
          <div>
            <img className='img-cours-grat' src='./assets/pictures/Frame6533.png' alt='cour gratuit'></img>
            <div className='cours-name'>
              <img src='./assets/pictures/Ellipse14.png'></img>
              <p>Histoire</p>
            </div>
            <h3>Comment Garantir Une Excellente Note En Histoire  </h3>
            
            

          </div>
          <div>
            <img className='img-cours-grat' src='./assets/pictures/Frame6534.png' alt='cour gratuit'></img>
            <div className='cours-name'>
              <img src='./assets/pictures/Ellipse14.png'></img>
              <p>Histoire</p>
            </div>
            <h3>Comment Garantir Une Excellente Note En Histoire  </h3>
            
            

          </div>
          <div>
            <img className='img-cours-grat' src='./assets/pictures/Frame6535.png' alt='cour gratuit'></img>
            <div className='cours-name'>
              <img src='./assets/pictures/Ellipse14.png'></img>
              <p>Histoire</p>
            </div>
            <h3>Comment Garantir Une Excellente Note En Histoire  </h3>
            
            

          </div>
          
          
        </div>
      </div>
      <div className='temps'>
        <h2>Il est temps de commencer à investir en vous-même en apprenant.</h2>
        <div>

        <p>C'est une excellente nouvelle pour les étudiants de la section économie et gestion. L'expert enéducation est une plateforme qui offre des courset des formations dans ce domaine, ce qui peut aider les étudiants à approfondir leurs connaissances à améliorer leurs compétences. </p>
        <button type='button'>Commencer</button>
        </div>
      </div>





    </Fragment>





    




  )
}

