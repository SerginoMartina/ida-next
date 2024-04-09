import { getProject } from "../../../../../sanity/sanity-utils";

export default async function Project({ params }: any) {

    const slug = params.project;
    const project = await getProject(slug);

    return (
        <div>
            <header>
                <h1>{project.title}</h1>
            </header>
        
        </div>
    );
}