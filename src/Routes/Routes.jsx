import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main/MAin";
import AboutMe from "../pages/AboutMe/AboutMe";
import MySkill from "../pages/MySkill/MySkill";

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
    ],
  },
]);

export default router;
