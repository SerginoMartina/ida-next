import React from 'react';
import { getProjects } from '../../../../sanity/sanity-utils';
import Link from 'next/link';

export default async function projects() {
    const projects = await getProjects();


    return (
        <div>
        <h1>Projects</h1>
        <div className="flex">
          {projects.map((project) => (
                  <div key={project._id} className="max-w-sm rounded overflow-hidden shadow-lg">
                  <div className="px-6 py-4">
                    <div key={project._id} className="font-bold text-xl mb-2">{project.title}</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                    <Link href={project.slug}>See project</Link>
                  </div>
                </div>
          ))}
      </div>
        </div>
    );
}