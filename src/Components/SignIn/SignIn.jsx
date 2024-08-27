import React, { useState } from "react";

import './SignIn.css'
import { useNavigate } from "react-router-dom";


function SignIn() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/SignUp");
  };
  

  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
 

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userid === "Puja@gmail.com" && password === "Puja") {
      // alert ("Sign In Successful")
      navigate ("/Dashboard")
      setError (null)
      
    } else {
      alert ("Please enter valid email and password")
      setError("Invalid username or password");
    }
  };

  return (
    <div className="Components">
      <div className="img">
        <img src="src/Images/Img2-removebg-preview (1).png" alt="" />
      </div>
      <div className="SignIn">
        <form onSubmit={handleSubmit}>
          <center>
            <button type="button" className="btn1">
              Sign In
            </button>
            <button type="button" className="btn2" onClick={handleSignUp}>
              Sign Up
            </button>
            <div>
              <input
                className="Input"
                placeholder="Email ID"
                type="email"
                value={userid}
                onChange={(event) => setUserid(event.target.value)}
              />
            </div>
            <div>
              <input
                className="Input"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="checkbox">
              <input type="checkbox" /> <p>dont ask again</p>
              <div className="para">
                <p>Forgot Password?</p>
              </div>
            </div>
            <div>
              <button className="btn" type="Submit"  >
                Sign In
              </button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </center>
        </form>
      </div>
    </div>
  );
}

export default SignIn;


