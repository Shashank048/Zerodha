import React from "react";

function OpenAccount() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col-12">
          <h1 className="mt-5">Open a Zerodha account</h1>
          <p>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button
            className="btn btn-primary fs-5 mb-5"
            style={{ width: "60%", maxWidth: "300px", margin: "0 auto" }}>
            <a
              href="/signup"
              style={{ textDecoration: "none", color: "white" }}>
              Sign up Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;

