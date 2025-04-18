import { projects } from "../../../Data/projects";
import { Link } from "react-router-dom";

export default function ProjectItem({ project }) {
  return (
    <>
      <div className="list" key={project.id}>
        <Link to={`/projects/${project.id}`}>
          <div className="left-part">
            <div className="img-box">
              <img src={project.src} alt={project.title}></img>
              <div className="img-hover">
                <span>Read more</span>
              </div>
            </div>
          </div>
          <div className="right-part">
            <ul>
              <li>{project.title}</li>
              <li>{project.workDetail}</li>
              <li>{project.stack}</li>
            </ul>
          </div>
        </Link>
        <hr />
      </div>
    </>
  );
}
