import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaFilePdf } from "react-icons/fa";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <AiFillLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/md-mukhlesur-rhaman-0741a9179/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <BsGithub size={30} />
        </>
      ),
      href: "https://github.com/Mukhle-sur",
    },
    {
      id: 3,
      child: (
        <>
          Mail <GrMail size={30} />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 1,
      child: (
        <>
          Resume <FaFilePdf size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/1r0qvNtU9EXxBy6DfSQhOAKREeFwNbM_O/view?usp=drive_link",
      rel: "noreferrer",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden md:flex flex-col top-[35%] left-0 fixed z-10">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-slate-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white text-lg"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
