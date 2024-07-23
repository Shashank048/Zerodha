import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Clear any previous errors

   axios
  .post("https://zerodha-7nh0.onrender.com/signup", {
    email: email,
    password: password,
  })
  .then((response) => {
    const data = response.data;
    if (response.status === 200) {
      setSuccess('Signup successful!');
      setError(null);
      setTimeout(() => {
        window.location.href = 'https://zerodha-fdty.vercel.app/dashboard';
      }, 3000);
    } else {
      setError(data.msg);
      setSuccess(null);
    }
  })
  .catch((error) => {
    console.log(error);
    setError('Server error');
    setSuccess(null);
  });



      
  // rest of the component
      return (
    <div className="container border-bottom">
      <img  
        src="media/logo.svg"
        alt="Logo"
        className="bar"
        style={{ width: "10%" }}
      />
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-7 p-5">
          <img src="media/SignupPage.png" style={{ width: "90%" }} />
        </div>
        <div className="col-4 p-5">
          <h1>Signup now </h1>
          <p className="text-muted">Or track your existing application.</p>
          <form id="signup-form"  onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address : </label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>  
            <br/>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password :  </label>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
            </div>
            <button id="signup-btn" type="submit" className="btn btn-primary">
              Sign in
            </button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
          </form>

          <br />
          <br />
          <div className="col-6">
            <a href="/login" style={{ textDecoration: "none", fontSize:"0.7em" }}>
            Want to open an NRI account?
            </a>
          </div>
        </div>

        <div className="row">
          <div
            className="text-center text-muted border-top"
            style={{ fontSize: "13px" }}
          >
            <p>
              I authorise Zerodha to contact me even if my number is registered
              on DND . I authorise Zerodha to fetch my KYC information from the
              C-KYC registry with my PAN.
              <br /> Please visit{" "}
              <a href="" style={{ textDecoration: "none" }}>
                this article{" "}
              </a>{" "}
              to know more.
            </p>
            <p>
              If you are looking to open a HUF, Corporate, Partnership, or NRI
              account, you have to use the{" "}
              <a href="" style={{ textDecoration: "none" }}>
                offline forms.
              </a>{" "}
              For help,{" "}
              <a href="" style={{ textDecoration: "none" }}>
                click here.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
