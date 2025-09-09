// Projects.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../constants';
import CTA from '../components/CTA';
import { arrow, github } from '../assets/icons'; // <--- Added github icon import

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Demonstrated expertise in designing and delivering robust web solutions through multiple projects, leveraging a diverse technology stack 
          that includes Next.js, Python, Flask, Java, and Spring Boot. Led end-to-end development of responsive and scalable applications, integrating 
          both front-end and back-end components to solve real-world business challenges. Collaborated with teams to implement clean code practices, 
          API integrations, and optimized workflows, ensuring maintainability, performance, and security across all deployments
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project, index) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">
                {project.description}
              </p>
              
              {/* Project Links Container */}
              <div className="mt-5 flex flex-col gap-3">
                {/* Live Link */}
                {project.link && (
                  <div className="flex items-center gap-2 font-poppins">
                    <Link
                      to={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600 flex items-center gap-1"
                    >
                      Live Link
                      <img
                        src={arrow}
                        alt="arrow"
                        className="w-4 h-4 object-contain"
                      />
                    </Link>
                  </div>
                )}
                
                {/* GitHub Link */}
                {project.github && (
                  <div className="flex items-center gap-2 font-poppins">
                    <Link
                      to={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-gray-700 flex items-center gap-1"
                    >
                      <img
                        src={github}
                        alt="GitHub"
                        className="w-5 h-5 object-contain"
                      />
                      GitHub
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;