import React from "react";

import Hero from "./Hero";
import CreateTicket from "./CreateTicket";

import Navbar from "../Navbar";


function PricingPage() {
  return (
    <>
      <Navbar/>
      <Hero />
      <CreateTicket />
    </>
  );
}

export default PricingPage;