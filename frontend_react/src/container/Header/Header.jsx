import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../Wrapper";
import "./Header.scss";

const Header = () => (
    <>
        <div className='app__header app__flex'>
            <motion.div
                className='animation'
                whileInView={{
                    opacity: [0, 1, 0.2],
                }}
                transition={{ duration: 3, easing: "easeIn" }}
            >
            </motion.div>
            <motion.div
                className='app__header-info'
                whileInView={{
                    opacity: [0, 1],
                    scale: [0.55, 1],
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
            >
                <h2 className='bold-text'>Hello, I am</h2>
                <h1 className='main-text gradient__text'>Akshil Nathu</h1>
                <p className='p-text'>
                    Software Engineer
                </p>
                <div className='buttons'>
                    <button
                        className='button-exp'
                        onClick={() => (window.location = `#Experience`)}
                    >
                        <p className='button-text gradient__text-sec'>Experience &gt;</p>
                    </button>
                    <button
                        className='button-con'
                        onClick={() => (window.location = "#Contact")}
                    >
                        <p className='button-text gradient__text-four'>Contact Me &gt;</p>
                    </button>
                </div>
            </motion.div>
        </div>
    </>
);

export default AppWrap(Header, "Home");
