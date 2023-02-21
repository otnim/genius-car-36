import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero mt-5 mb-16">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} alt="" className='rounded-lg shadow-2xl w-4/5' />
                    <img src={parts} alt="" className='absolute rounded-lg shadow-2xl w-3/5 left-48 top-1/2 border-8 ' />
                </div>
                <div className='w-1/2'>
                    <h1 className='text-2xl text-orange-600'> About Us</h1>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;