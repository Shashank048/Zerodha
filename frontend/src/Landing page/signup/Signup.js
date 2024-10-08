import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./signup.css"

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Clear any previous errors
    try {
      const response = await axios.post('https://zerodha-2rz5.vercel.app/signup', { // Replace with your actual backend URL
        email,
        password,
      });

      if (response.status === 201) {
       setSuccess('Signup successful!');
       setError(null);
       setTimeout(() => {
        window.location.href = 'https://zerodha-rose.vercel.app/dashboard';
       });      } else {
        setError(response.data.msg);
        setSuccess(null);
      }
    } catch (err) {
      console.log(err);
      setError('Server error');
      setSuccess(null);
    }
  };

  return (
    <div className="container border-bottom">
      <img
        src="media/logo.svg"
        alt="Logo"
        className="bar"
        style={{ width: "10%" }}
      />
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-lg-7 p-3 msg">
          <img src="media/SignupPage.png" style={{ width: "90%" }} />
        </div>
        <div className="col-lg-4 p-5">
          <h1 className="ds">Signup now </h1>
          <p className="sp text-muted">Or track your existing application.</p>
          <form id="signup-form" action="/signup" method="post" onSubmit={handleSubmit}>
            <div className="spd form-group">
              <label htmlFor="exampleInputEmail1">Email address: </label>
              &nbsp;&nbsp;&nbsp;&nbsp;
           
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="spd form-group">
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
            <button id="signup-btn" type="submit" className="sps btn btn-primary">
              Sign in
            </button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {success && <div style={{ color: 'green' }}>{success}</div>}
          </form>
         
          <br />
          <div className=" hi col-6">
            <a href="/login" style={{ textDecoration: "none", fontSize: "0.7em" }}>
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
