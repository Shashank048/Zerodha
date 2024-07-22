import React from "react";

import Hero from "./Hero";
import Team from "./Team";
import Navbar from "../Navbar";

function AboutPage(){
    return(
        <>
           <Navbar/>
           <Hero />
           <Team />
        </>
    );
}

export default AboutPage;