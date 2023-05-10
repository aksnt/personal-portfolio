import React, { useEffect, useRef } from "react";
import { AppWrap, MotionWrap } from "../../Wrapper";
import "./Footer.scss";

const Footer = () => {
    return (
        <>
            <div className='app__footer'>
                <div className='app__footer-container'>
                    <h2 className='head-text gradient__text-four'>
                        Let's Connect and Make Something Happen
                    </h2>
                    <div className='app__footer-cards'>
                        <div className='app__footer-card-email'>
                            <a
                                href='mailto:akshil.nathu@gmail.com'
                                target='_blank'
                                className='p-text'
                            >
                                Email
                            </a>
                        </div>
                        <div className='app__footer-card-linkedin '>
                            <a
                                href='https://www.linkedin.com/in/akshilnathu'
                                target='_blank'
                                className='p-text gradient__text-thir'
                            >
                                LinkedIn
                            </a>
                        </div>
                        <div className='app__footer-card-github '>
                            <a
                                href='https://github.com/aksnt'
                                target='_blank'
                                className='p-text gradient__text-four'
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                    <p className='p-text'>
                        <span>Based in Sydney</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, "app__footer"),
    "Contact",
    "app__whitebg"
);
