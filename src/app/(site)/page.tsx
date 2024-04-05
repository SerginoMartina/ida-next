import React from 'react';
import { getProjects } from '../../../sanity/sanity-utils';

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <span className="hero-subtitle">WE ARE IDA</span>
      <h1 className='hero-title'>Your Adobe partner in Benelux</h1>
      <span className="hero-subtitle">DIGITAL MADE HUMAN</span>

      <div className="flex">
          {projects.map((project) => (
                  <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <div className="px-6 py-4">
                    <div key={project._id} className="font-bold text-xl mb-2">{project.title}</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>
                </div>
          ))}
      </div>

      <section className="cta">
        <h2>Ready to start your project?</h2>
        <button className="cta-button">Get in touch</button>
      </section>

      <footer>
        <p>© 2024 IDA. All rights reserved.</p>
      </footer>
    </div>
  );
}
