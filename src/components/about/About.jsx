import React from 'react';

const About = () => {
    return (
        <section className="about-me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Frontend development</p>

            <div className="about-me__body">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugiat iusto natus voluptatum hic omnis, facere consequatur
                    porro possimus quasi consequuntur architecto vel aspernatur
                    quidem magnam ullam. Fuga optio reiciendis libero.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugiat iusto natus voluptatum hic omnis, facere consequatur
                    porro possimus quasi consequuntur architecto vel aspernatur
                    quidem magnam ullam. Fuga optio reiciendis libero.</p>
            </div>

            <img src="" className="about-me__img" alt="Bohdan"/>
        </section>
    );
};

export default About;