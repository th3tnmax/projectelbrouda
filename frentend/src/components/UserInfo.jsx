import "./UserInfo.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import masking from "../assets/Masking.png";
import { useNavigate, useParams ,Link} from "react-router-dom";



const UserInfo = ({ user, navigate ,setRefresh  }) => {
  
  const uploadPresetName = "lv9quzkj";
  const cloudName = "dejkmgo3r";
  const [image, setImage] = useState("");
  const [id, setId] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [valide, setValide] = useState(true);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateNaissance, setDateNaissance] = useState(new Date());
  // const [niveau, setNiveau] = useState(0);
  const [tel, setTel] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setLastname(user.lastname || "");
      setDateNaissance(user.birthDate ? user.birthDate.split('T')[0] : "");
      setTel(user.tel || "");
      setEmail(user.email || "");
      setImage(user.url || "");
    }
  }, [user]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:3000/users/getbyid/${id}`
  //       );
  //       setUser(response.data);
  //       console.log(user);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [id]);

  async function handleFile(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPresetName);
    try {
      const cloudres = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData,
        {
          params: {
            folder: "projet",
          },
        }
      );
      setImage(cloudres.data.secure_url);
      console.log(image);
    } catch (err) {
      console.error(err);
    }
  }

  const handleNameChange = (event) => {
    const regex = /^[a-zA-Z]*$/; // regular expression to match alphabetic characters only
    const value = event.target.value;
    if (regex.test(value)) {
      setName(value);
      const span = document.getElementById("error");
      span.setAttribute("hidden", "");
      setValide(true);
    } else {
      setErrorMsg("vérifier votre name");
      const span = document.getElementById("error");
      span.removeAttribute("hidden");
      setValide(false);
    }
  };

  const handleLastnameChange = (event) => {
    const regex = /^[a-zA-Z]*$/; // regular expression to match alphabetic characters only
    const value = event.target.value;
    if (regex.test(value)) {
      setLastname(value);
      const span = document.getElementById("error");
      span.setAttribute("hidden", "");
      setValide(true);
    } else {
      setErrorMsg("vérifier votre Prenom");
      const span = document.getElementById("error");
      span.removeAttribute("hidden");
      setValide(false);
    }
  };

  const handleTelChange = (event) => {
    const regex = /^[0-9]*$/; // regular expression to match alphabetic characters only
    const value = event.target.value;
    if (regex.test(value)) {
      setTel(value);
      const span = document.getElementById("error");
      span.setAttribute("hidden", "");
      setValide(true);
    } else {
      setErrorMsg("vérifier votre numéro de téléphone");
      const span = document.getElementById("error");
      span.removeAttribute("hidden");
      setValide(false);
    }
  };

  const handleEmailChange = (event) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression to match alphabetic characters only
    const value = event.target.value;
    if (regex.test(value)) {
      setEmail(value);
      const span = document.getElementById("error");
      span.setAttribute("hidden", "");
      setValide(true);
    } else {
      setErrorMsg("vérifier votre Email");
      const span = document.getElementById("error");
      span.removeAttribute("hidden");
      setValide(false);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (valide === true) {
      console.log(image);
      let data = {
        name: name,
        lastname: lastname,
        birthDate: dateNaissance,
        // level: niveau,
        tel: tel,
        email: email,
        url: image,
        //password:password
      };

      const userdata = JSON.parse(sessionStorage.getItem("userData"));
      const currentId = userdata._id;
      setId(currentId);
      axios.put(`http://localhost:3000/users/updateUser/${currentId}`, data)
        .then((res) => {
          console.log("User data updated:", res.data);
          setRefresh(true);
          navigate(`/Profile/${currentId}`, { replace: true });
        })
        .catch((err) => {
          console.error("Error updating user data:", err);
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="profile-info-perso">
          <div className="profile-info-header">
            <h3>Informations Personelles</h3>
            <img className="info-img" src={masking}></img>
          </div>
          <div className="profile-info-grid">
            <div className="profile-img-input">
              <label>Insére ta photo de profile</label>
              <input type="file" accept="image/*" onChange={handleFile}></input>
            </div>

            <div>
              <label>Nom<span>*</span></label><br></br>
              <input className='profile-input' type='text' placeholder={user ? user.name : ""} value={name} onChange={handleNameChange}></input>
            </div>

            <div>
              <label for="lastname">Prénom<span>*</span></label><br></br>
              <input className='profile-input' id="lastname" type='text' placeholder={user ? user.lastname : ""} value={lastname} onChange={handleLastnameChange}></input>
            </div>

            <div>
              <label>Date de naissance<span>*</span></label><br></br>
              <input className='profile-input' type='date' placeholder="JJ/MM/AAAA" value={dateNaissance} onChange={(e) => setDateNaissance(e.target.value)}></input>
            </div>

            <div>
              <label>Email<span>*</span></label><br></br>
              <input className='profile-input' type='email' placeholder={user ? user.email : ""} value={email} onChange={handleEmailChange}></input>
            </div>

            <div>
              <label>Télephone<span>*</span></label><br></br>
              <input className='profile-input' type='tel' placeholder={user ? user.tel : ""} value={tel} onChange={handleTelChange}></input>
            </div>

            {/* <div>

            <label>Niveau<span>*</span></label><br></br>
            <input className='profile-input' type='number' max={4} min={2} onChange={(e) => setNiveau(e.target.value)}></input>
          </div> */}
            {/* <div>

            <label>Adresse<span>*</span></label><br></br>
            <input className='profile-input' type='textarea'></input>
          </div> */}

            <div>
              <label>Confirmer avec mot de passe<span>*</span></label><br></br>
              <input className='profile-input' type='password' onChange={(e) => setPassword(e.target.value)}></input>
            </div>

          </div>
        </div>
        <button type="submit" className="profile-submit-btn">save</button>
        <br></br>
        <span id="error" style={{ color: "red", marginLeft: "70%" }} hidden>{errorMsg}</span>
        <br></br>
      </form>
    </>
  );
};

export default UserInfo;
