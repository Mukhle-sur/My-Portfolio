import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main/MAin";
import AboutMe from "../pages/AboutMe/AboutMe";
import MySkill from "../pages/MySkill/MySkill";
import MyProject from "../pages/MyProject/Myproject";
import Contact from "../pages/Contact/Contact";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <AboutMe></AboutMe>,
      },
      {
        path: "skill",
        element: <MySkill></MySkill>,
      },
      {
        path: "project",
        element: <MyProject></MyProject>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "/details/:id",
        element: <ProjectDetails></ProjectDetails>,
      },
    ],
  },
]);

export default router;
