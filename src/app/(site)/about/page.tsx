import React from 'react';
import { getProjects } from '../../../../sanity/sanity-utils';

export default async function Project({ params }: Props) {
    const projects = await getProjects();


    return (
        <div>
        <h1>About us</h1>
        </div>
    );
}