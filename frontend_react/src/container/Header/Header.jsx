import React from "react";
import { motion } from "framer-motion";

import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation.js";

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
                transition={{ duration: 4, easing: "easeIn" }}
            >
                    <BackgroundAnimation />

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
                <h1 className='gradient__text'>Akshil Nathu</h1>
                <p className='p-text'>
                    <span>Software Engineer</span>
                </p>
                <div className='buttons'>
                    <button
                        className='button'
                        onClick={() => (window.location = `#Experience`)}
                    >
                        Experience &gt;
                    </button>
                    <button
                        className='button'
                        onClick={() => (window.location = "#Contact")}
                    >
                        Contact Me &gt;
                    </button>
                </div>
            </motion.div>
        </div>
    </>
);

export default AppWrap(Header, "Home");
