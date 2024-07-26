import React from "react";
import "./product.css"

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="p text-center mt-5 p-5">
        <h1 className="pa"> Technology</h1>
        <h3 className="pb text-muted mt-3 fs-4">Sleek, modern, and intuitive trading platforms</h3>
        <p className="pc mt-3 mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
