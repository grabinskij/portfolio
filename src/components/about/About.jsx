import React from 'react';
import "./style.css";



const About = () => {
    return (
        <section className="about-me">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Frontend development</p>

            <div className="about-me__body">
                <p data-aos="fade-right" data-aos-easing="ease-out-sine">I am a web developer with 1 year experience. My path to exploring modern information technology was
                    self-education along with university studies. So I obtained a master's degree in Computer
                    Engineering. After graduation, I was gaining practical experience in the company that develops
                    websites powered by CMS Drupal and Wordpress.
                </p>
                <p data-aos="fade-right" data-aos-easing="ease-out-quad" data-aos-delay="50">I accumulated the most experience while creating Landing Pages. My further goals are to become a
                    front-end developer, and later a full stack developer.
                </p>
                <p data-aos="fade-right" data-aos-easing="ease-out-quad" data-aos-delay="100">I like working with technologies. Besides, I have passion of traveling, sports, reading, and
                    self-improvement.
                </p>

            </div>

            <img src="" className="about-me__img" alt="Bohdan"/>
        </section>
    );
};

export default About;