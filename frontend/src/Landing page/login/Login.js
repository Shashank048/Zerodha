import React from "react";

function Login() {
  return (
    <div className="mt-5 container-fluid h-100 d-flex justify-content-center align-items-center">
      <form className="mt-4">
        <br/>
        <br/>
        <br/>
      <img src="media/zerodha-kite.png" alt="Zerodha kite logo"/>
        <div className="mb-3 mt-3" action="/login" method="POST">
          <label htmlFor="exampleInputEmail1" className="form-label ">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
