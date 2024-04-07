import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Connecter.css";

const Connecter = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();


  const handleGoogleClick = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if(valide===true){
    //   const response = await axios.post('http://localhost:8000/login', { email, password }).catch(error => {
    //     console.error(error);
    //     setErrorMsg("vérifiez votre email ou mot de passe");
    //     const span = document.getElementById('error');
    //     span.removeAttribute('hidden');
    //   });
    //   console.log(response.data); // This should log the authenticated user object
    // if(response.data !==null){
    //   localStorage.setItem("id", JSON.stringify(response.data.id));
    //   if(response.data.admin){
    //     navigate("/admin");
    //   }else
    //   navigate(`/profile/${response.data.id}`);
    // }

    // }
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      })
    } catch (error) {
      alert("somthing went wrong!!!!!")
      console.log(error);
    }
  };

  const handleEmailChange = (event) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression to match alphabetic characters only
    const value = event.target.value;
    setEmail(value);
    if (regex.test(email)) {
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

  return (
    <div className="connect-container">
      <div className="connect-first">
        <img
          className="logo-connect"
          src="./assets/pictures/logo.png"
          alt="logo"
        ></img>
        <h2>Bienvenue!</h2>
        <p>
          Le site web ultime tout-en-un pour vous aider à gérer tout ce dont
          vous avez besoin.
        </p>

        <form>
          <input
            className="center"
            type="email"
            value={email}
            required
            placeholder="Email"
            onChange={handleEmailChange}
          ></input>
          <input
            className="center"
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          ></input>
          <br></br>
          <span id="error" style={{ color: "red" }} hidden>
            {errorMsg}
          </span>
          <button className="center btn" type="submit" onClick={handleSubmit}>
            Se Connecter
          </button>
        </form>

        <p className="center">Vous n’avez pas un compte?</p>
        <p className="center inscrire-text">
          {" "}
          <Link to="/inscrire">S’inscrire</Link>{" "}
        </p>
        <div className="vl center"></div>
        <p className="center">ou</p>
        <div className="vl center"></div>
        <div className="center inscrire-google">
          <img src="./assets/pictures/image22.png" alt="google logo"></img>
          <p onClick={handleGoogleClick}>S’INSCRIRE AVEC GOOGLE</p>
        </div>
      </div>
      <div className="connect-second">
        <div className="endroit">
          <h1>Votre endroit préféré pour apprendre !</h1>
          <p>
            Bienvenue sur notre plateforme d'éducation ! Nous sommes ravis de
            vous accompagner dans votre parcours d'apprentissage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Connecter;
