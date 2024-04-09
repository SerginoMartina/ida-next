import { createClient, groq } from "next-sanity";
import { Project } from "../types/Project";
import clientConfig from "./config/client-config";

export async function getProjects() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"] {
    _id, 
    _createdAt, 
    title,
    slug
    }`,
  );
}

export async function getProject(slug: string): Promise<Project> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0] {
        _id, 
        _createdAt, 
        title
        }`,
        { slug }
      );
}
