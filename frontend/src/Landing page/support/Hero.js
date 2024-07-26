import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" style={{textDecoration:"none"}}>Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-lg-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <a href=""className="ml-2"style={{textDecoration:"none"}}>&nbsp;&nbsp;&nbsp;Track account opening</a>
          <a href=""className="ml-3"style={{textDecoration:"none"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Track segment activation</a>
          <a href=""style={{textDecoration:"none"}}>&nbsp;&nbsp;&nbsp;&nbsp;Intraday margins</a>
          <a href=""style={{textDecoration:"none"}}>&nbsp;&nbsp;&nbsp;&nbsp;Kite user manual</a>
        </div>
        <div className="col-lg-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            &nbsp;
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
