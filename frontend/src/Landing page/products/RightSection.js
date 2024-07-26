import React from 'react'
import "./product.css"

function RightSection({imageURL, productName, productDescripion, learnMore}) {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="pf col-lg-6 p-5 mt-5">
                <h1 className="pg">{productName}</h1>
                <p className="ph">{productDescripion}</p>
                <div>
                   <a href={learnMore} style={{textDecoration:"none"}}>Learn more →</a>
                </div>
            </div>
            <div className="pi col-lg-6">
                   <img src={imageURL}/>
              </div>
        </div>
    </div>
  );
}

export default RightSection;

// marginLeft:"50px"
