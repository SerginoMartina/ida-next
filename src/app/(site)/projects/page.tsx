import React from 'react';
import { getProjects } from '../../../../sanity/sanity-utils';
import Link from 'next/link';

export default async function Projects() {
    const projects = await getProjects();

    interface Project {
      _id: string;
      title: string;
      slug: {
        current: string;
      };
    }

    return (
        <div>
        <h1 className='text-4xl font-bold my-20'>Projects</h1>
        <div className="flex">
          {projects.map((project: Project) => (
                  <div key={project._id} className="max-w-sm rounded overflow-hidden shadow-lg">
                  <div className="px-6 py-4">
                    <div key={project._id} className="font-bold text-xl mb-2">{project.title}</div>
                    <p className="mb-2 text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                    <Link href={`/projects/${project.slug}`}>
                      Read more
                    </Link>
                  </div>
                </div>
          ))}
      </div>
        </div>
    );
}