import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/diesease.jpg"
          title="Disease prediction"
          description="Predicting the future of healthcare: Harnessing the predictive power of machine learning to anticipate and prevent diseases before they manifest. "
        />
        <ProjectCard
          src="/CardImage1.jpg"
          title="Fake Site Detection"
          description="I have developed an Fake site detection system using machine learning and its capable of classifying fake and real websites
          using RandomForest Classifier."
        />
        <ProjectCard
          src="/Dna.jpg"
          title="Drug Discovery Using ML"
          description="Revolutionizing drug discovery with machine learning: Leveraging advanced algorithms to analyze vast datasets, predict molecular interactions, 
         "
        />
      </div>
    </div>
  );
};

export default Projects;
