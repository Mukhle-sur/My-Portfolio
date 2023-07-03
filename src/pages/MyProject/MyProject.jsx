import { Link } from "react-router-dom";
import Button from "../../components/Shared/Button/Button";
import SectionTitle from "../../components/Shared/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const MyProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);


  return (
    <div className="bg-gradient-to-tr from-[#432848] to-[#211C30] h-full">
      <div className="md:max-w-screen-xl p-4 md:mx-auto flex flex-col justify-center w-full h-full py-24">
        <SectionTitle
          title="* Projects */"
          subTitle="I completed these projects visit my beautiful project "
        />
        <div
          data-aos="flip-right"
          data-aos-duration="1500"
          className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:px-5 pt-16"
        >
          {projects.map(({ id, img, href, href1, href2 }) => (
            <div
              key={id}
              className="shadow-lg  md:h-[355px] md:w-full mx-auto shadow-slate-600 rounded-lg"
            >
              <img
                src={img}
                alt="webSiteImage"
                className="rounded-lg duration-200 hover:scale-105 h-56"
              />
              <div className="flex items-center justify-between text-white px-2 py-3">
                <Button adders={href} label="Demo" />
                <div className="">
                  <span className="mr-3">
                    <Button adders={href1} label="Server" />
                  </span>
                  <Button adders={href2} label="Client" />
                </div>
              </div>
              <Link to={`/details/${id}`}>
                <button className="details_btn mt-15">Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProject;
