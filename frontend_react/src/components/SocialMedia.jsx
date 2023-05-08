import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href='https://github.com/aksnt' target='_blank'>
                    <BsGithub />
                </a>
            </div>
            <div>
                <a href='https://linkedin.com/in/akshilnathu' target='_blank'>
                    <BsLinkedin />
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;
