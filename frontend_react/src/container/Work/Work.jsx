import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { urlFor, client } from "../../client";
import "./Work.scss";

const Work = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);
    useEffect(() => {
        const query = '*[_type == "works"]';
        client.fetch(query).then((data) => {
            setWorks(data);
            setFilterWork(data);
        });
    }, []);

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ opacity: 1 }]);

            if (item === "All") {
                setFilterWork(works);
            } else {
                setFilterWork(works.filter((work) => work.tags.includes(item)));
            }
        }, 500);
    };
    return (
        <>
            <div className='app__works'>
                <h2 className='head-text gradient__text-thir'>PROJECTS</h2>

                <div className='app__work-filter '>
                    {["Graphics", "React Apps", "Systems", "AI/ML", "All"].map(
                        (item, index) => (
                            <div
                                key={index}
                                onClick={() => handleWorkFilter(item)}
                                className={`app__work-filter-item app__flex p-text gradient__text-four ${
                                    activeFilter === item ? "item-active" : ""
                                }`}
                            >
                                {item}
                            </div>
                        )
                    )}
                </div>
                <motion.div
                    animate={animateCard}
                    transition={{ duration: 0.5, delayChildren: 0.5 }}
                    className='app__work-portfolio'
                >
                    {filterWork.map((work, index) => (
                        <div className='app__work-item app__flex' key={index}>
                            <div className='app__work-img app__flex'>
                                <img
                                    src={urlFor(work.imgUrl)}
                                    alt={work.name}
                                />

                                <motion.div
                                    whileHover={{ opacity: [0, 1] }}
                                    transition={{
                                        duration: 0.25,
                                        ease: "easeInOut",
                                        staggerChildren: 0.75,
                                    }}
                                    className='app__work-hover app__flex'
                                >
                                    <a
                                        href={work.codeLink}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.9] }}
                                            transition={{
                                                duration: 0.25,
                                                ease: "easeInOut",
                                            }}
                                            className='app__flex'
                                        >
                                            <AiFillGithub />
                                        </motion.div>
                                    </a>
                                </motion.div>
                            </div>
                            <div className='app__work-content app__flex'>
                                <h4 className='bold-text'>{work.title}</h4>
                                <p className='p-text' style={{ marginTop: 10 }}>
                                    {" "}
                                    {work.description}
                                </p>

                                <div className='app__work-tag app__flex'>
                                    <p className='p-text'>{work.tags[0]}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Work, "app__works"),
    "Projects",
    "app__primarybg"
);
