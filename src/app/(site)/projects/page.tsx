import React from 'react';
import { getProjects } from '../../../../sanity/sanity-utils';

export default async function Project({ params }: Props) {
    const projects = await getProjects();


    return (
        <div>
        <h1>Projects</h1>
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
        </div>
    );
}