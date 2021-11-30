/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className='navbar navbar-expand-lg navigation'>
            <div className='container-fluid py-3'>
                <Link to='/' className='navbar-brand fs-2 fw-bolder name'>
                    Medul H.
                </Link>
                <button
                    className='navbar-toggler toggle-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'>
                        <AiOutlineMenuFold />
                    </span>
                </button>
                <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav mb-2 mb-lg-0 ms-auto my-nav-item'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-link'>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/works' className='nav-link'>
                                Work
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-link'>
                                Contact
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/blog' className='nav-link'>
                                Blog
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <a
                                className='nav-link'
                                href='https://drive.google.com/file/d/1Yvhc99y_9pXBzZO4MQt6JozMfwHMsEZI/view?usp=sharing'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button
                                    type='button'
                                    className='btn btn-outline-success download-resume'
                                >
                                    Download Resume
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
