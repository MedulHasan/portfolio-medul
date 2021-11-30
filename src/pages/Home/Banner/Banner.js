import React from "react";
import Typical from "react-typical";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import banner1 from "../../../image/medul1.jpg";
import "./Banner.css";

const Banner = () => {
    return (
        <div className='banner-container'>
            <div>
                <h2 className='medul-hasan'>Medul Hasan</h2>
                <div className='developer'>
                    <p style={{ marginRight: "5px" }}>I'm a </p>
                    <Typical
                        className='text-anima'
                        loop={Infinity}
                        wrapper='p'
                        steps={[
                            " JavaScript Developer",
                            1000,
                            " React Developer",
                            1000,
                            " MERN stack Developer",
                            1000,
                        ]}
                    />
                </div>
                <p className='medul-info'>
                    A review of my credentials indicates I have completed my
                    graduation with computer science and engineering from
                    Stamford University Bangladesh. My keen interest in CSE has
                    enabled me to develop a good knowledge of Programming
                    Language (JavaScript, Python, and C), problem-solving, web
                    development, database, Machine Learning, React Js.
                    Basically, my interest is in machine learning and MERN stack
                    development.
                </p>
                <div className='medul-contact'>
                    <a
                        href='https://github.com/MedulHasan'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <BsGithub />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/medul-hasan/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <AiFillLinkedin />
                    </a>
                    <a
                        href='mailto:medul.cse@gmail.com'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>
            <img className='banner-image' src={banner1} alt='' />
        </div>
    );
};

export default Banner;
