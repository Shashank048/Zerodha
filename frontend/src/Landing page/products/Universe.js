import React from "react";
import "./product.css"

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-lg-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png" />
          <p className="text-small text-muted mt-2 fs-12">Thematic investment platform</p>
        </div>
        <div className="col-lg-4 p-3 mt-5 ">
          <img src="media/streakLogo.png"  style={{height:"2.9em"}} />
          <p className="text-small text-muted mt-2 fs-12">Algo & strategy platform</p>
        </div>
        <div className="col-lg-4 p-3 mt-5">
          <img src="media/sensibullLogo.svg"  style={{height:"1.8em"}} />
          <p className="text-small text-muted mt-2 fs-12">Options trading platform</p>
        </div>
        <div className="col-lg-4 p-3 mt-4">
          <img src="media/zerodhaFundhouse.png"  style={{height:"3.1em"}}/>
          <p className="text-small text-muted mt-2">Asset management</p>
        </div>
        <div className="col-lg-4 p-3 mt-4">
          <img src="media/tijori.svg" style={{height:"3.1em"}}/>
          <p className="text-small text-muted mt-2">Fundamental research platform</p>
        </div>
        <div className="col-lg-4 p-3 mt-4">
          <img src="media/dittoLogo.png" style={{height:"3.1em"}}/>
          <p className="text-small text-muted mt-2">Insurance</p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}> Signup Now </button>
      </div>
    </div>
  );
}

export default Universe;
