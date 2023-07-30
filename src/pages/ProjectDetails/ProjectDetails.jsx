import { useEffect, useState } from "react";

const ProjectDetails = () => {
  const [selectedProject, setSelectedProject] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setSelectedProject(data));
  }, []);

  return (
    <div className="bg-gradient-to-tr from-[#432848] to-[#211C30] h-full">
      {selectedProject.map((details, index) => (
        <section key={index} className="bg-info rounded p-4 mb-4">
          Joma deuar somoy hoye gesilo tai diya dilam
        </section>
      ))}
    </div>
  );
};

export default ProjectDetails;
