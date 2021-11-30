import React from "react";
import "./About.css";
import medul from "../../image/m.hasan.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-me'>
                <div>
                    <img src={medul} alt='' />
                </div>
                <div className='about-text'>
                    <h2
                        className='about-img'
                        style={{
                            borderBottom: "2px solid",
                            fontSize: "28px",
                            fontWeight: "300",
                            display: "inline",
                        }}
                    >
                        About Me
                    </h2>
                    <h2
                        style={{
                            marginTop: "30px",
                            fontSize: "40px",
                        }}
                    >
                        Hi there, I'm{" "}
                        <span style={{ color: "tomato" }}>Medul Hasan</span>
                    </h2>
                    <h6 style={{ fontSize: "30px", marginBottom: "20px" }}>
                        JavaScript Developer
                    </h6>
                    <p>
                        Curious and Passionate about Programming, developing,
                        and Problem-solving. Love to take Dare and handle it
                        professionally. Handle difficulties and errors efficient
                        way.
                    </p>
                    <p>
                        A review of my credentials indicates I have completed my
                        graduation with computer science and engineering from
                        Stamford University Bangladesh. My keen interest in CSE
                        has enabled me to develop a good knowledge of
                        Programming Language (JavaScript, Python, and C),
                        problem-solving, web development, database, Machine
                        Learning, and Various JavaScript library and framework
                        like Node js, React Js, Express Js. Basically, my
                        interest is in machine learning and MERN stack
                        development.
                    </p>
                    <Link
                        to='/contact'
                        as={HashLink}
                        type='button'
                        class='btn btn-outline-primary'
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
