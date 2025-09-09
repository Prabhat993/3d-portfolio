// src/pages/About.jsx

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Link } from 'react-router-dom';

// Import the timeline components
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences } from '../constants';
import Loader from '../components/Loader';
import Wolf from '../models/Wolf';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Prabhat</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>I am a versatile developer with expertise in web development, Java, and Python. My passion lies at the intersection of cutting-edge
           technologies and creativity, driving me to explore innovative solutions. With a strong interest in AI technologies, I continuously 
           learn and integrate intelligent features into projects. What truly sets me apart is my enthusiasm for 3D animation, especially using 
           Three.js, where I combine programming and visual storytelling to create immersive and dynamic web experiences.</p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img 
                  src={skill.imageUrl} 
                  alt={skill.name} 
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className='border-slate-200' />


      {/* --- 3D WOLF MODEL SECTION --- */}
      <div className='py-10'>
        
        <div className='mt-10 w-full h-[350px] md:h-[550px]'>
          <Canvas 
            camera={{ position: [0, 0, 8], fov: 75, near: 0.1, far: 1000 }}
          >
            <Suspense fallback={<Loader />}>
              <directionalLight intensity={2.5} position={[0, 0, 1]} />
              <ambientLight intensity={0.5} />
              <Wolf 
                position={[0, -1.8, 0]}
                rotation={[0, -0.6, 0]}
                scale={[0.04, 0.04, 0.04]}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>

      {/* --- WORK EXPERIENCE SECTION --- */}
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>I've worked with great people, leveling up my skills and teaming up with smart individuals. Here's the rundown:</p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img 
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base" style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      
      
      
      
      <hr className='border-slate-200' />

      {/* --- CONTACT SECTION (CALL TO ACTION) --- */}
      <div className='py-16 flex flex-col items-center'>
        <h3 className='subhead-text'>Get in Touch</h3>
        <p className='text-slate-500 mt-2 text-center max-w-lg'>
          Have a project in mind or just want to say hello? <br className='sm:block hidden' />
          I'm always open to new opportunities and collaborations.
        </p>
        <div className="mt-8">
          <Link to="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;