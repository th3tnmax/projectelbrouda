import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import './Profile.css'
import logo from '../assets/logo.png'
import search from '../assets/2089805.png'
import logocours from '../assets/Ellipse14.png'
import image0 from '../assets/Frame6530.png'
import image1 from '../assets/Frame6531.png'
import image2 from '../assets/Frame6532.png'
import image3 from '../assets/Frame6533.png'
import image4 from '../assets/Frame6534.png'
import image5 from '../assets/Frame6535.png'
import UserInfo from './UserInfo';


const Profile = () => {
  const images = [image0, image1, image2, image3, image4, image5];
  const params = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [infoPersoPressed, setInfoPersoPressed] = useState(false);
  const [refresh, setRefresh] = useState(false);



  function coursIsPressed() {
    
  }
  const infoPersoIsPressed = () => {
    setInfoPersoPressed(true);
  };
  
  function passwordIsPressed() {
    
  }
  function newMessageIsPressed() {
   
  }
  function messageRecuIsPressed() {
    
  }
  function MessageEnvoyerIsPressed() {

  }
  function handleClickCours(urlVideo) {
    
  }
//another methode 

useEffect(() => {
  // Retrieve current user ID from sessionStorage
  const userdata = JSON.parse(sessionStorage.getItem("userData"));
  const currentId =userdata._id;


    setId(currentId);

  // Check if ID is valid
  if (!currentId) {
    console.log("No user ID found");
    navigate('/seconnecter', { replace: true });
    return; 
  }

  // Check if the current ID matches the ID in the URL params
  if (params.id !== currentId) {
    console.log(`Mismatched IDs: URL ID - ${params.id}, Current ID - ${currentId}`);
    navigate(`/profile/${currentId}`, { replace: true });
    return; 
  }

  // Fetch user data based on the current ID
  axios.get(`http://localhost:3000/users/getbyid/${currentId}`)
    .then((res) => {
      setUser(res.data);
    })
    .catch(err => {
      console.error("Error fetching user data:", err);
      
    });

}, [navigate]);


  const handleLogOut = () => {
    // Clear sessionStorage and navigate to login
    sessionStorage.removeItem("userData");
    setId(null);
    navigate('/');
  };

  // function handleLogOut(){
  //   localStorage.removeItem('id');
  // navigate("/");
  // }
  return (
    <>
      <div className='profile-header'>
        <Link to="/" >
          <img className='profile-logo' src={logo} alt="Logo" />
        </Link>
        <div>

          <img className='profile-search' src={search} alt="search" />
          <input type='text' placeholder='Recherche avec nom du cours '></input>
        </div>
        <div>

          <img className='profile-picture' src={user.url} alt="photo de profile"></img>
          <p style={{ color: "blue", marginTop: "10%", marginLeft: "3%" }}>{user.name} {user.lastname}</p>
        </div>
        <button className='logOut-button' onClick={handleLogOut}>logout</button>
      </div>
      <div className='profile-body'>
        <div className='profile-aside'>
          <p id='profile-cours-clicked' onClick={coursIsPressed}>my courses</p>
          <hr></hr>
          <p className='profile-main'>Messages</p>
          <hr></hr>
          <p id='profile-param' onClick={newMessageIsPressed}>add Message</p>
          <hr className='profile-hr'></hr>
          <p id='profile-param' onClick={MessageEnvoyerIsPressed} >Messages send</p>
          <hr className='profile-hr' ></hr>
          <p id='profile-param' onClick={messageRecuIsPressed}>Messages recive</p>

          <hr></hr>
          <p className='profile-main'>settings</p>
          <hr></hr>
          <p id='profile-param' onClick={infoPersoIsPressed}>Person Information </p>
          <hr className='profile-hr'></hr>
          <p id='profile-param'>Password</p>
        </div>
        { infoPersoPressed ?  <UserInfo user={user} navigate={navigate} setRefresh={setRefresh}  /> : null }
      </div>

    </>
    
  )
}

export default Profile