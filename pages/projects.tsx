import Head from "next/head";
import React from "react";
import ProjectCards from "../components/projects/ProjectCards";

const Projects = () => {
    return (<>
        <Head>
            <title>Hatem&apos;s Portfolio | Projects</title>
            <meta name="description" content="Frontend Developer" />
        </Head>
        <div className="container">
            <ProjectCards/>
        </div>
    </>
    );
};

export default Projects;
