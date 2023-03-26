import React, { Fragment } from "react";
import {Article,Brand,CTA,Feature,Navbar} from "./components";
import {Blog,Features,Footer,Header,Possibility,WhatGPT3} from "./container"
import "./App.css"
/*import Article from "./components/article/Article";
import Brand from "./components/brand/Brand"
import Cta from "./components/cta/Cta"
import Feature from "./components/feature/Feature"
import Navbar from "./components/navbar/Navbar"
*/

function App (){
    return(
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App