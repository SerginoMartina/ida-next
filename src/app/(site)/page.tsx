import React from 'react';
import { getProjects } from '../../../sanity/sanity-utils';
import Link from 'next/link';

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <div className='hero-section mt-20 h-60 text-center'>
        <h2 className="hero-subtitle mb-4 text-xl font-extrabold text-blue-600">WE ARE IDA</h2>
        <h1 className='hero-title mb-4 text-4xl text-blue-600'>Your Adobe partner in Benelux</h1>
        <h2 className="hero-subtitle text-xl font-extrabold text-blue-600">DIGITAL MADE HUMAN</h2>
      </div>


      <div className="flex">
          {projects.map((project) => (
                  <div key={project._id} className="max-w-sm rounded overflow-hidden shadow-lg">
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{project.title}</div>
                    <p className="mb-2 text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                    <Link href={`/projects/${project.slug.current}`}>
                      Read more
                    </Link>
                  </div>
                </div>
          ))}
      </div>

      <section className="cta mt-20">
        <h2>Ready to start your project?</h2>
        <button className="cta-button">Get in touch</button>
      </section>

      <footer className="mt-20">
        <p>© 2024 IDA. All rights reserved.</p>
      </footer>
    </div>
  );
}
