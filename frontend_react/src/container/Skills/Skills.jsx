import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../Wrapper";
import { client } from "../../client";
import "./Skills.scss";

const Skills = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences"]';

        client.fetch(query).then((data) => {
            setExperiences(data);
        });
    }, []);

    return (
        <>
            <div className='app__skills'>
                <motion.h2
                    whileInView={{
                        opacity: [0, 1],
                        scale: [0.5, 1],
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className='head-text gradient__text-sec'
                >
                    SKILLS & EXPERIENCE
                </motion.h2>
                <div className='app__skills-container'>
                    <div className='app__skills-exp'>
                        {experiences.map((experience) => (
                            <motion.div
                                className='app__skills-exp-item'
                                key={experience.year}
                                whileInView={{
                                    opacity: [0, 1],
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                            >
                                <div className='app__skills-exp-year '>
                                    <h4 className='bold-text'>
                                        {experience.year}
                                    </h4>
                                </div>
                                <motion.div className='app__skills-exp-works'>
                                    {experience.works.map((work) => (
                                        <>
                                            <motion.div
                                                whileInView={{
                                                    opacity: [0, 1],
                                                }}
                                                transition={{ duration: 0.5 }}
                                                className='app__skills-exp-work'
                                                data-tip
                                                data-for={work.name}
                                                key={work.name}
                                            >
                                                <h4 className='bold-text'>
                                                    {work.name}
                                                </h4>
                                                <p className='p-text'>
                                                    {work.company}
                                                </p>
                                            </motion.div>
                                        </>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default AppWrap(
    MotionWrap(Skills, "app__skills"),
    "Experience",
    "app__whitebg"
);
