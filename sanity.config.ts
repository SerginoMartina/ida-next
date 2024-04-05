import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";


const config = defineConfig({
    projectId: "q6ppt830",
    dataset: "production",
    title: "IDA Next",
    apiVersion: "2021-04-05",
    basePath: "/studio",
    plugins: [structureTool()],
    schema: { types: schemas }
    });

export default config;