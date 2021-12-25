import React from "react";
import "./Work.css";
import p11 from "../../image/project/p1/2.JPG";
import p12 from "../../image/project/p1/3.JPG";
import p13 from "../../image/project/p1/5.JPG";

import p21 from "../../image/project/p2/1.JPG";
import p22 from "../../image/project/p2/2.JPG";
import p23 from "../../image/project/p2/3.JPG";

import p31 from "../../image/project/p3/1.JPG";
import p32 from "../../image/project/p3/2.PNG";
import p33 from "../../image/project/p3/3.PNG";

import p41 from "../../image/project/p4/1.JPG";
import p42 from "../../image/project/p4/2.JPG";
import p43 from "../../image/project/p4/3.JPG";

import p51 from "../../image/project/p5/1.JPG";

import p61 from "../../image/project/p6/1.JPG";
import p62 from "../../image/project/p6/2.JPG";
import p63 from "../../image/project/p6/3.JPG";
import p64 from "../../image/project/p6/4.JPG";
import p65 from "../../image/project/p6/5.JPG";

import { BsGlobe2 } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Works = () => {
    return (
        <div className='works-container'>
            <h1 className='my-project-heading mb-4'>My Projects</h1>
            <div className='project-all-info mb-5' id='ants-nest'>
                <div className='carousel-cont'>
                    <div
                        id='carouselExampleIndicators'
                        className='carousel slide'
                        data-bs-ride='carousel'
                    >
                        <ol className='carousel-indicators'>
                            <li
                                data-bs-target='#carouselExampleIndicators'
                                data-bs-slide-to='0'
                                className='active'
                            ></li>
                            <li
                                data-bs-target='#carouselExampleIndicators'
                                data-bs-slide-to='1'
                            ></li>
                            <li
                                data-bs-target='#carouselExampleIndicators'
                                data-bs-slide-to='2'
                            ></li>
                            <li
                                data-bs-target='#carouselExampleIndicators'
                                data-bs-slide-to='3'
                            ></li>
                            <li
                                data-bs-target='#carouselExampleIndicators'
                                data-bs-slide-to='4'
                            ></li>
                        </ol>
                        <div className='carousel-inner c-i'>
                            <div className='carousel-item active'>
                                <img
                                    src={p61}
                                    className='d-block w-100'
                                    alt='...'
                                />
                            </div>
                            <div className='carousel-item'>
                                <img
                                    src={p62}
                                    className='d-block w-100'
                                    alt='...'
                                />
                            </div>
                            <div className='carousel-item'>
                                <img
                                    src={p63}
                                    className='d-block w-100'
                                    alt='...'
                                />
                            </div>
                            <div className='carousel-item'>
                                <img
                                    src={p64}
                                    className='d-block w-100'
                                    alt='...'
                                />
                            </div>
                            <div className='carousel-item'>
                                <img
                                    src={p65}
                                    className='d-block w-100'
                                    alt='...'
                                />
                            </div>
                        </div>
                        <button
                            className='carousel-control-prev'
                            type='button'
                            data-bs-target='#carouselExampleIndicators'
                            data-bs-slide='prev'
                        >
                            <p
                                className='carousel-control-prev-icon'
                                aria-hidden='true'
                            ></p>
                            <p className='visually-hidden'>Previous</p>
                        </button>
                        <button
                            className='carousel-control-next'
                            type='button'
                            data-bs-target='#carouselExampleIndicators'
                            data-bs-slide='next'
                        >
                            <p
                                className='carousel-control-next-icon'
                                aria-hidden='true'
                            ></p>
                            <p className='visually-hidden'>Next</p>
                        </button>
                    </div>
                </div>
                <div className='single-project-details'>
                    <h1>Ant's Nest</h1>
                    <ul>
                        <li>
                            Ant's Nest is a online marketplace for rentals
                            homestays, vacation and tourism.
                        </li>
                        <li>
                            Ant's Nest is a online marketplace for rentals
                            homestays, vacation and tourism.
                        </li>
                        <li>Use the map to find the house location.</li>
                        <li>
                            The login user will be able to see the full
                            information of a house and multiple images have been
                            used for viewing inside and outside the house.
                        </li>
                        <li>
                            Users can reserve the house with their information
                            and can also be booking the house by making the
                            payment if they want.
                        </li>
                        <li>
                            Users can reserve the house with their information
                            and can also be booking the house by making the
                            payment if they want.
                        </li>
                    </ul>
                    <div className='technology-all'>
                        <h4>Technology</h4>
                        <p className='tech'>JavaScript</p>
                        <p className='tech'>React Js</p>
                        <p className='tech'>Redux</p>
                        <p className='tech'>Mapbox</p>
                        <p className='tech'>Stripe</p>
                        <p className='tech'>cloudinary</p>
                        <p className='tech'>react-dropzone</p>
                        <p className='tech'>React Router</p>
                        <p className='tech'>Firebase-auto</p>
                        <p className='tech'>Material Ui</p>
                        <p className='tech'>Express js</p>
                        <p className='tech'>Node Js</p>
                        <p className='tech'>MongoDB</p>
                        <p className='tech'>Html</p>
                        <p className='tech'>Css</p>
                    </div>
                    <div className='website-info'>
                        <a
                            href='https://ant-s-nest.web.app/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <span>
                                <BsGlobe2 /> Website
                            </span>
                        </a>
                        <a
                            href='https://github.com/MedulHasan/ant-nest-client-side'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <span>
                                <BsGithub /> Client GitHub
                            </span>
                        </a>
                        <a
                            href='https://github.com/MedulHasan/ants-nest-server-side'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <span>
                                <BsGithub /> Server Github
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='project-all-info mb-5' id='city-car-house'>
                <div className='carousel-cont'>
                    <div
                        id='carouselExampleIndicators'
                        className='carousel slide'
                        data-bs-ride='carousel'
                    >
                        <ol className='carousel-indicators'>
                            <li
                                data-bs-target='#carouselExampleIndicators'
                                data-bs-slide-to='0'
                                className='active'
                            ></li>
                            <li
                                data-bs-target='#carouselExampleIndicators'
                                data-bs-slide-to='1'
                            ></li>
                            <li
                                data-bs-target='#carouselExampleIndicators'
                                data-bs-slide-to='2'
                            ></li>
                        </ol>
                        <div className='carousel-inner c-i'>
                            <div className='carousel-item active'>
                                <img
                                    src={p11}
                                    className='d-block w-100'
                                    alt='...'
                                />
                            </div>
                            <div className='carousel-item'>
                                <img
                                    src={p12}
                                    className='d-block w-100'
                                    alt='...'
                                />
                            </div>
                            <div className='carousel-item'>
                                <img
                                    src={p13}
                                    className='d-block w-100'
                                    alt='...'
                                />
                            </div>
                        </div>
                        <button
                            className='carousel-control-prev'
                            type='button'
                            data-bs-target='#carouselExampleIndicators'
                            data-bs-slide='prev'
                        >
                            <p
                                className='carousel-control-prev-icon'
                                aria-hidden='true'
                            ></p>
                            <p className='visually-hidden'>Previous</p>
                        </button>
                        <button
                            className='carousel-control-next'
                            type='button'
                            data-bs-target='#carouselExampleIndicators'
                            data-bs-slide='next'
                        >
                            <p
                                className='carousel-control-next-icon'
                                aria-hidden='true'
                            ></p>
                            <p className='visually-hidden'>Next</p>
                        </button>
                    </div>
                </div>
                <div className='single-project-details'>
                    <h1>City car House</h1>
                    <ul>
                        <li>This project is a simple Car selling project.</li>
                        <li>This project have 2 role, Admin and User.</li>
                        <li>
                            User can see best selling car and also order cars.
                        </li>
                        <li>
                            If user see more cars option then "see more option
                            or explore car".
                        </li>
                        <li>
                            Client can post a review and this review also see
                            another user at home page "client feedback" section.
                        </li>
                        <li>
                            Admin can manage all order, add a new car, make an
                            admin, manage product.
                        </li>
                        <li>User can see his/her all order.</li>
                    </ul>
                    <div className='technology-all'>
                        <h4>Technology</h4>
                        <p className='tech'>Html</p>
                        <p className='tech'>Css</p>
                        <p className='tech'>JavaScript</p>
                        <p className='tech'>React Js</p>
                        <p className='tech'>React Router</p>
                        <p className='tech'>Firebase-auto</p>
                        <p className='tech'>Material Ui</p>
                        <p className='tech'>Express js</p>
                        <p className='tech'>Node Js</p>
                        <p className='tech'>MongoDB</p>
                    </div>
                    <div className='website-info'>
                        <a
                            href='https://city-car-house.web.app./'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <span>
                                <BsGlobe2 /> Website
                            </span>
                        </a>
                        <a
                            href='https://github.com/MedulHasan/city-car-house-client-side'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <span>
                                <BsGithub /> Client GitHub
                            </span>
                        </a>
                        <a
                            href='https://github.com/MedulHasan/city-car-house-server-side'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <span>
                                <BsGithub /> Server Github
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='project-all-info mb-5'>
                <div className='carousel-cont'>
                    <div
                        id='carouselExampleIndicators1'
                        className='carousel slide'
                        data-bs-ride='carousel'
                    >
                        <ol className='carousel-indicators'>
                            <li
                                data-bs-target='#carouselExampleIndicators1'
                                data-bs-slide-to='0'
                                className='active'
                            ></li>
                            <li
                                data-bs-target='#carouselExampleIndicators1'
                                data-bs-slide-to='1'
                            ></li>
                            <li
                                data-bs-target='#carouselExampleIndicators1'
                                data-bs-slide-to='2'
                            ></li>
                        </ol>
                        <div className='carousel-inner c-i'>
                            <div className='carousel-item active'>
                                <img
                                    src={p21}
                                    className='d-block w-100'
                                    alt='...'
                                />
                            </div>
                            <div className='carousel-item'>
                                <img
                                    src={p22}
                                    className='d-block w-100'
                                    alt='...'
                                />
                            </div>
                            <div className='carousel-item'>
                                <img
                                    src={p23}
                                    className='d-block w-100'
                                    alt='...'
                                />
                            </div>
                        </div>
                        <button
                            className='carousel-control-prev'
                            type='button'
                            data-bs-target='#carouselExampleIndicators1'
                            data-bs-slide='prev'
                        >
                            <p
                                className='carousel-control-prev-icon'
                                aria-hidden='true'
                            ></p>
                            <p className='visually-hidden'>Previous</p>
                        </button>
                        <button
                            className='carousel-control-next'
                            type='button'
                            data-bs-target='#carouselExampleIndicators1'
                            data-bs-slide='next'
                        >
                            <p
                                className='carousel-control-next-icon'
                                aria-hidden='true'
                            ></p>
                            <p className='visually-hidden'>Next</p>
                        </button>
                    </div>
                </div>
                <div className='single-project-details'>
                    <h1>Triply</h1>
                    <ul>
                        <li>Build A simple tour booking website.</li>
                        <li>Display a popular tour, offers, place to go</li>
                        <li>
                            You will get the opportunity to book your trip at
                            the date of your choice
                        </li>
                        <li>You will order multiple booking</li>
                        <li>You can see your booking orders</li>
                        <li>you can delete your order</li>
                        <li>
                            Admin can see all booking record when multiple
                            people add there order
                        </li>
                        <li>
                            When a user booking a tour, it will be pending and
                            if the admin accepts his order, the user will see
                            that it is approved.
                        </li>
                    </ul>
                    <div className='technology-all'>
                        <h4>Technology</h4>
                        <p className='tech'>Html</p>
                        <p className='tech'>Css</p>
                        <p className='tech'>JavaScript</p>
                        <p className='tech'>React Js</p>
                        <p className='tech'>React Router</p>
                        <p className='tech'>Material Ui</p>
                        <p className='tech'>Express js</p>

                        <p className='tech'>Node Js</p>
                        <p className='tech'>MongoDB</p>
                    </div>
                    <div className='website-info'>
                        <a
                            href='https://triply-df546.web.app/.'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <span>
                                <BsGlobe2 /> Website
                            </span>
                        </a>
                        <a
                            href='https://github.com/MedulHasan/tourism-website-client-side'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <span>
                                <BsGithub /> Client GitHub
                            </span>
                        </a>
                        <a
                            href='https://github.com/MedulHasan/tourism-website-server-side'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <span>
                                <BsGithub /> Server Github
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='project-all-info mb-5'>
                <div className='carousel-cont'>
                    <div
                        id='carouselExampleIndicators2'
                        className='carousel slide'
                        data-bs-ride='carousel'
                    >
                        <ol className='carousel-indicators'>
                            <li
                                data-bs-target='#carouselExampleIndicators2'
                                data-bs-slide-to='0'
                                className='active'
                            ></li>
                            <li
                                data-bs-target='#carouselExampleIndicators2'
                                data-bs-slide-to='1'
                            ></li>
                            <li
                                data-bs-target='#carouselExampleIndicators2'
                                data-bs-slide-to='2'
                            ></li>
                        </ol>
                        <div className='carousel-inner c-i'>
                            <div className='carousel-item active'>
                                <img
                                    src={p31}
                                    className='d-block w-100'
                                    alt='...'
                                />
                            </div>
                            <div className='carousel-item'>
                                <img
                                    src={p32}
                                    className='d-block w-100'
                                    alt='...'
                                />
                            </div>
                            <div className='carousel-item'>
                                <img
                                    src={p33}
                                    className='d-block w-100'
                                    alt='...'
                                />
                            </div>
                        </div>
                        <button
                            className='carousel-control-prev'
                            type='button'
                            data-bs-target='#carouselExampleIndicators2'
                            data-bs-slide='prev'
                        >
                            <p
                                className='carousel-control-prev-icon'
                                aria-hidden='true'
                            ></p>
                            <p className='visually-hidden'>Previous</p>
                        </button>
                        <button
                            className='carousel-control-next'
                            type='button'
                            data-bs-target='#carouselExampleIndicators2'
                            data-bs-slide='next'
                        >
                            <p
                                className='carousel-control-next-icon'
                                aria-hidden='true'
                            ></p>
                            <p className='visually-hidden'>Next</p>
                        </button>
                    </div>
                </div>
                <div className='single-project-details'>
                    <h1>Stock Market Prediction</h1>
                    <ul>
                        <li>
                            A comparative analysis of predicting Dhaka Stock
                            Exchange Market Data during the COVID-19 pandemic
                            using Machine Learning and Deep Learning Techniques
                        </li>
                    </ul>
                    <div className='technology-all'>
                        <h4>Technology</h4>
                        <p className='tech'>Python</p>
                        <p className='tech'>Machine Learning</p>
                        <p className='tech'>Deep Learning</p>
                        <p className='tech'>Streamlit</p>
                    </div>
                    <div className='website-info'>
                        <a href='#' target='_blank' rel='noreferrer'>
                            <span>
                                <BsGlobe2 /> Website
                            </span>
                        </a>
                        <a
                            href='https://github.com/MedulHasan/stock-market-price-web'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <span>
                                <BsGithub /> GitHub
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='project-all-info mb-5'>
                <div className='carousel-cont'>
                    <div
                        id='carouselExampleIndicators3'
                        className='carousel slide'
                        data-bs-ride='carousel'
                    >
                        <ol className='carousel-indicators'>
                            <li
                                data-bs-target='#carouselExampleIndicators3'
                                data-bs-slide-to='0'
                                className='active'
                            ></li>
                            <li
                                data-bs-target='#carouselExampleIndicators3'
                                data-bs-slide-to='1'
                            ></li>
                            <li
                                data-bs-target='#carouselExampleIndicators3'
                                data-bs-slide-to='2'
                            ></li>
                        </ol>
                        <div className='carousel-inner c-i'>
                            <div className='carousel-item active'>
                                <img
                                    src={p41}
                                    className='d-block w-100'
                                    alt='...'
                                />
                            </div>
                            <div className='carousel-item'>
                                <img
                                    src={p42}
                                    className='d-block w-100'
                                    alt='...'
                                />
                            </div>
                            <div className='carousel-item'>
                                <img
                                    src={p43}
                                    className='d-block w-100'
                                    alt='...'
                                />
                            </div>
                        </div>
                        <button
                            className='carousel-control-prev'
                            type='button'
                            data-bs-target='#carouselExampleIndicators3'
                            data-bs-slide='prev'
                        >
                            <p
                                className='carousel-control-prev-icon'
                                aria-hidden='true'
                            ></p>
                            <p className='visually-hidden'>Previous</p>
                        </button>
                        <button
                            className='carousel-control-next'
                            type='button'
                            data-bs-target='#carouselExampleIndicators3'
                            data-bs-slide='next'
                        >
                            <p
                                className='carousel-control-next-icon'
                                aria-hidden='true'
                            ></p>
                            <p className='visually-hidden'>Next</p>
                        </button>
                    </div>
                </div>
                <div className='single-project-details'>
                    <h1>Red Onion restaurant</h1>
                    <ul>
                        <li>A simple food delivery website</li>
                        <li>User can check available meals</li>
                        <li>User first login then order the food</li>
                        <li>User can choose the food quantity</li>
                        <li>Order multiple items</li>
                    </ul>
                    <div className='technology-all'>
                        <h4>Technology</h4>
                        <p className='tech'>Html</p>
                        <p className='tech'>Css</p>
                        <p className='tech'>JavaScript</p>
                        <p className='tech'>React Js</p>
                        <p className='tech'>React Router</p>
                        <p className='tech'>Bootstrap</p>
                        <p className='tech'>ReactStrap</p>
                    </div>
                    <div className='website-info'>
                        <a
                            href='https://red-onion-restaurent-54629.web.app/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <span>
                                <BsGlobe2 /> Website
                            </span>
                        </a>
                        <a
                            href='https://github.com/MedulHasan/red-onion-restaurent'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <span>
                                <BsGithub /> GitHub
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='project-all-info pb-5'>
                <div className='carousel-cont'>
                    <div
                        id='carouselExampleIndicators4'
                        className='carousel slide'
                        data-bs-ride='carousel'
                    >
                        <ol className='carousel-indicators'>
                            <li
                                data-bs-target='#carouselExampleIndicators4'
                                data-bs-slide-to='0'
                                className='active'
                            ></li>
                        </ol>
                        <div className='carousel-inner c-i'>
                            <div className='carousel-item active'>
                                <img
                                    src={p51}
                                    className='d-block w-100'
                                    alt='...'
                                />
                            </div>
                        </div>
                        <button
                            className='carousel-control-prev'
                            type='button'
                            data-bs-target='#carouselExampleIndicators4'
                            data-bs-slide='prev'
                        >
                            <p
                                className='carousel-control-prev-icon'
                                aria-hidden='true'
                            ></p>
                            <p className='visually-hidden'>Previous</p>
                        </button>
                        <button
                            className='carousel-control-next'
                            type='button'
                            data-bs-target='#carouselExampleIndicators4'
                            data-bs-slide='next'
                        >
                            <p
                                className='carousel-control-next-icon'
                                aria-hidden='true'
                            ></p>
                            <p className='visually-hidden'>Next</p>
                        </button>
                    </div>
                </div>
                <div className='single-project-details'>
                    <h1>Chat Application</h1>
                    <ul>
                        <li>A Real Time Chat Application</li>
                        <li>At first user create an account and then login</li>
                        <li>User can see all other users and Add People</li>
                        <li>
                            If one people add other then they are conversation
                            with each other
                        </li>
                    </ul>
                    <div className='technology-all'>
                        <h4>Technology</h4>
                        <p className='tech'>Html</p>
                        <p className='tech'>Css</p>
                        <p className='tech'>JavaScript</p>
                        <p className='tech'>Node js</p>
                        <p className='tech'>Express js</p>
                        <p className='tech'>Bootstrap</p>
                        <p className='tech'>MongoDB</p>
                    </div>
                    <div className='website-info'>
                        <a
                            href='https://medulchatapp.herokuapp.com/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <span>
                                <BsGlobe2 /> Website
                            </span>
                        </a>
                        <a
                            href='https://github.com/MedulHasan/chat-application'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <span>
                                <BsGithub /> GitHub
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;
