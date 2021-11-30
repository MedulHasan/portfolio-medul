import React from "react";
import Banner from "./Banner/Banner";
import "./Home.css";
import Projects from "./Projects/Projects";

const Home = () => {
    return (
        <div className='home-container'>
            <Banner />
            <Projects />
        </div>
    );
};

export default Home;
