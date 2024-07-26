import React from "react";

function Hero() {
  return (
    <section className="container-fluid w-full" id="supportHero">
      <div className="p-5 ml-3" id="supportWrapper">
        <h4 class="text-left p-3 mr-4">Support Portal</h4>
        <a href="" style={{ textDecoration: "none" }}>
          Track Tickets
        </a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-lg-6 col-md-12 p-1">
          <h1 className="fs-3 ">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            className="form my-2 col-12"
            placeholder="Eg. how do I activate F&O"
          />
          <br />
          <a
            href=""
            className="d-block my-2"
            style={{ textDecoration: "none" }}>
            Track account opening
          </a>
          <a
            href=""
            className="d-block my-2"
            style={{ textDecoration: "none" }}>
            Track segment activation
          </a>
          <a
            href=""
            className="d-block my-2"
            style={{ textDecoration: "none" }}>
            Intraday margins
          </a>
          <a
            href=""
            className="d-block my-2"
            style={{ textDecoration: "none" }}>
            Kite user manual
          </a>
        </div>
        <div className="col-lg-6 col-md-12 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
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
