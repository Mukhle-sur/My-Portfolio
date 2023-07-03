import { useEffect, useState } from "react";

const ProjectDetails = () => {
  const [selectedProject, setSelectedProject] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setSelectedProject(data));
  }, []);
  return (
    {
      selectedProject.map()
    }
  );
};

export default ProjectDetails;
