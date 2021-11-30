import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import project1 from "../../../image/project/p1/2.JPG";
import project2 from "../../../image/project/p2/1.JPG";
import project3 from "../../../image/project/p3/1.JPG";
import "./Project.css";

const Projects = () => {
    return (
        <div className='project-container'>
            <h2 className='some-of'>SOME OF</h2>
            <h2 className='my-project'>MY PROJECTS</h2>
            <div className='project1'>
                <img className='p1-image' src={project1} alt='' />
                <div className='p1-details'>
                    <h3>City Car House</h3>
                    <p>
                        A Car selling project. This project has 2 roles, Admin
                        and User. Users can see the best-selling car, order a
                        new car, post a car review and that review adds a
                        "client feedback" section. Admin can manage all orders,
                        add a new car, make an admin, manage product.
                    </p>
                    <Link
                        as={HashLink}
                        to='/works#city-car-house'
                        type='button'
                        className='btn btn-outline-primary'
                    >
                        View Details
                    </Link>
                </div>
            </div>
            <div className='project1'>
                <div className='p2-details'>
                    <h3>Triply</h3>
                    <p>
                        Build A simple tour booking system. Users can explore
                        tours, book their favorite tour packages and view all
                        their bookings.
                    </p>
                    <Link
                        as={HashLink}
                        to='/works#city-car-house'
                        type='button'
                        className='btn btn-outline-primary'
                    >
                        View Details
                    </Link>
                </div>
                <img className='p2-image' src={project2} alt='' />
            </div>
            <div className='project1'>
                <img className='p1-image' src={project3} alt='' />
                <div className='p1-details'>
                    <h3>Stock market prediction</h3>
                    <p>
                        A comparative analysis of predicting Dhaka Stock
                        Exchange Market Data during the COVID-19 pandemic using
                        Machine Learning and Deep Learning Techniques.
                    </p>
                    <Link
                        as={HashLink}
                        to='/works#city-car-house'
                        type='button'
                        className='btn btn-outline-primary'
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;
