import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialLinks from "../common/SocialLinks";

const About = () => {
return (
    <div className="about container">
        <div className="about__content">
            <div className="mb-4">
                <h3>Hello, <span className="colored">I&apos;m</span></h3>
                <h1 className="about__content--name">Hatem Elsharkawy</h1>
                <h3><span className="colored">MERN</span> Stack Developer</h3>
            </div>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem illum delectus earum dolor ducimus esse ad eum, odio voluptatum!</p>
            
            <button className="button">
                <Link href="/contact">Contact Me</Link>
            </button>
        {/* ---------------------------------------------- */}
            <div className="about__links">
                <div className="about__links--icons">
                    <SocialLinks/>
                </div>
            </div>
        </div>
        <div className="about__img-parent">
            <Image
                src='/homeImg.svg'
                alt='Web Image'
                fill
                className='about__img'
            />
        </div>
        {/* ---------------------------------------------- */}
    </div>
);
};

export default About;
