import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='app__navbar'>
            <ul className='app__navbar-links'>
                {["Home", "Experience", "Projects", "Contact"].map((item) => (
                    <li className='app__Flex p-text' key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            {/* For mobile */}
            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [250, 0] }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {["Home", "Experience", "Projects", "Contact"].map(
                                (item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item}`}
                                            onClick={() => setToggle(false)}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;