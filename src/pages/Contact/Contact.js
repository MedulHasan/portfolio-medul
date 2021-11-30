import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const form = useRef();

    const notify = () => toast.success("Send Your Message");

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_yycpgvl",
                "template_ydtp0xw",
                form.current,
                "user_8GRvECPbqQjuHt0Gj0rIG"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };
    return (
        <div>
            <div className='contact-container'>
                <h2 style={{ textAlign: "center", fontSize: "40px" }}>
                    You can email me here
                </h2>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='mb-3'>
                            <label
                                for='exampleFormControlInput1'
                                className='form-label'
                            >
                                Email Subject
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                name='subject'
                                placeholder='example subject'
                            />
                        </div>
                        <div className='mb-3'>
                            <label
                                for='exampleFormControlInput1'
                                className='form-label'
                            >
                                Your Name
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                name='name'
                                placeholder='Medul Hasan'
                            />
                        </div>
                        <div className='mb-3'>
                            <label
                                for='exampleFormControlInput1'
                                className='form-label'
                            >
                                Email address
                            </label>
                            <input
                                type='email'
                                className='form-control'
                                name='email'
                                placeholder='email@example.com'
                            />
                        </div>
                        <div className='mb-3'>
                            <label
                                for='exampleFormControlTextarea1'
                                className='form-label'
                            >
                                Example textarea
                            </label>
                            <textarea
                                className='form-control'
                                name='message'
                                rows='3'
                            ></textarea>
                        </div>
                        <button
                            onClick={notify}
                            type='submit'
                            class='btn btn-outline-success'
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;
