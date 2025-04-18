import { useState } from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../../Data/projects";

import "./styled.css";

const SectionProjects = ({}) => {
  const [activeTab, setActiveTab] = useState("work");

  const filteredProjects = projects.filter(
    (project) => project.option === activeTab
  );

  return (
    <>
      <section id="section-Projects" className="section_03">
        <div className="inner_03">
          <h1 className="title">PROJECTS</h1>

          <div className="Projects-container">
            <div className="tab-buttons">
              <button
                className={activeTab === "work" ? "on" : ""}
                onClick={() => setActiveTab("work")}
              >
                Work
              </button>
              <button
                className={activeTab === "personal" ? "on" : ""}
                onClick={() => setActiveTab("personal")}
              >
                Personal
              </button>
            </div>

            <div className="list-container">
              {filteredProjects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SectionProjects;
