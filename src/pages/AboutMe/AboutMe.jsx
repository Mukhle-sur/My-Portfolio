import { Link } from "react-router-dom";
import aboutImage from "../../assets/about/about.jpg";
import SectionTitle from "../../components/Shared/SectionTitle/SectionTitle";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const AboutMe = () => {
  return (
    <div className="bg-gradient-to-tr from-[#432848] to-[#211C30] h-full">
      <div className="my-container">
        <SectionTitle title="\* About */" />
        <div className="flex md:flex-row flex-col-reverse items-center justify-between gap-10 h-full px-4 py-12 ">
          <div
            data-aos="flip-left"
            data-aos-duration="1500"
            className="w-1/2 hidden md:block"
          >
            <img src={aboutImage} alt="" className="w-full h-full rounded-lg" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-duration="1200"
            className="md:hidden block pt-8"
          >
            <img src={aboutImage} alt="" className="" />
          </div>
          <div className="md:w-1/2">
            <h2
              data-aos="flip-right"
              data-aos-duration="1000"
              className="text-lg pt-8 text-white w-full text-justify"
            >
              "I am Mukhlesur Rahman, a highly skilled MERN stack web developer
              based in Jamalpur, Bangladesh. With a solid educational background
              in Computer Science Technology from Brahmanbaria Polytechnic
              Institute, I am currently pursuing my studies in Computer Science
              and Engineering at Dhaka International University. My passion for
              coding led me to specialize in React.js, and I have been actively
              honing my skills in this area since 2022. With extensive hands-on
              experience, I have successfully completed 8 projects using the
              MERN stack. By leveraging technologies such as JavaScript,
              React.js, Node.js, Express, MongoDB, Firebase Authentication, JWT,
              and CORS, I ensure that each project excels in functionality and
              user experience. I am dedicated to delivering the best outcomes
              for my clients, placing a strong emphasis on creating projects
              that provide exceptional user experiences. My expertise lies in
              crafting clean, well-structured code, implementing responsive
              designs, optimizing performance, and thoroughly testing for bugs.
              As a professional MERN stack web developer, I am committed to
              continuous learning and staying up-to-date with industry trends. I
              am enthusiastic about taking on new challenges and leveraging my
              expertise to create innovative and impactful web solutions. Thank
              you for the opportunity to share my professional background. If
              you have any questions or need assistance with web development,
              feel free to ask. I'm here to help!"
            </h2>
            <div
              data-aos="flip-right"
              data-aos-duration="1000"
              className="mt-8 space-y-2"
            >
              <h4 className="text-2xl text-white font-medium">
                {" "}
                Name:{" "}
                <span className="text-xl text-slate-400 font-medium tracking-wide">
                  Mukhlesur Rahman
                </span>
              </h4>
              <h4 className="text-2xl text-white font-medium">
                {" "}
                Email:{" "}
                <span className="text-xl text-slate-400 font-medium tracking-wide underline">
                  mukhlesurrahman43@gmail.com
                </span>
              </h4>
              <h4 className="text-2xl text-white font-medium">
                {" "}
                Number:{" "}
                <span className="text-xl text-slate-400 font-medium tracking-wide">
                  +880 1923561743{" "}
                </span>{" "}
              </h4>
              <h4 className="text-2xl text-white font-medium">
                {" "}
                Adders:{" "}
                <span className="text-xl text-slate-400 font-medium tracking-wide">
                  Jamalpur, Bangladesh
                </span>
              </h4>
            </div>
            <div className="mt-5">
              <Link
                to="/project"
                smooth
                duration={500}
                className="border-2 group border-sky-500 text-xl font-mono font-medium rounded-xl py-2 px-5 relative md:inline-flex items-center justify-start overflow-hidden transition-all group"
              >
                <span className="w-0 h-0 rounded bg-sky-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full flex items-center text-sky-400 transition-colors duration-300  ease-in-out group-hover:text-white z-10 tracking-wide">
                  Projects
                  <span className="ml-1 group-hover:rotate-90 transition duration-300">
                    <MdOutlineKeyboardArrowRight size={30} />
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
