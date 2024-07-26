import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescripion,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="pd col-6">
                <img src={imageURL}/>
            </div>
            <div className="pe col-6 p-5 mt-5">
                <h1>{productName}</h1>
                <p>{productDescripion}</p>
                <div>
                   <a href={tryDemo} style={{textDecoration:"none"}}>Try demo →</a>
                   <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn more →</a>
                </div>
                <div className="mt-3">
                  <a href={googlePlay}><img src="media/googlePlayBadge.svg"/></a>
                  <a href={appStore}><img src="media/appstoreBadge.svg"  style={{marginLeft:"50px"}}/></a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LeftSection;
