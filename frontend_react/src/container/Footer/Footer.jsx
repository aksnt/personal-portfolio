import React, { useEffect, useRef } from "react";
import { AppWrap, MotionWrap } from "../../Wrapper";
import "./Footer.scss";
import { motion } from "framer-motion";
const Footer = () => {
    return (
        <>
            <div className='app__footer'>
                <div className='app__footer-container'>
                    <h2 className='head-text'>
                        Let's{" "}
                        <span className='head gradient__text-six'>Connect</span>{" "}
                        and Chat
                    </h2>
                    <motion.div
                        className='app__footer-cards'
                        whileInView={{ opacity: [0, 1] }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            staggerChildren: 0.75,
                        }}
                    >
                        <div className='app__footer-card-email'>
                            <a
                                href='mailto:akshil.nathu@gmail.com'
                                target='_blank'
                                className='button-text'
                            >
                                Email
                            </a>
                        </div>
                        <div className='app__footer-card-linkedin '>
                            <a
                                href='https://www.linkedin.com/in/akshilnathu'
                                target='_blank'
                                className='button-text gradient__text-thir'
                            >
                                LinkedIn
                            </a>
                        </div>
                        <div className='app__footer-card-github '>
                            <a
                                href='https://github.com/aksnt'
                                target='_blank'
                                className='button-text gradient__text-four'
                            >
                                GitHub
                            </a>
                        </div>
                    </motion.div>
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
