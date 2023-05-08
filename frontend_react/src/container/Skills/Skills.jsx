import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../Wrapper";
import { urlFor, client } from "../../client";
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
                <h2 className='gradient__text-sec'>SKILLS & EXPERIENCE</h2>
                <div className='app__skills-container'>
                    <div className='app__skills-exp'>
                        {experiences.map((experience) => (
                            <motion.div
                                className='app__skills-exp-item'
                                key={experience.year}
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
