import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Layout from "./Layout.jsx";
import Projects from "./components/Project/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
// import Github, { githubinfoLoader } from "./assets/Githubb/Github.jsx;
import Hearder from "./components/Header/Hearder.jsx";
// const router = createBrowserRouter ([
//   {
//     path: "",
//     element: <Layout />,
//     children: [
//       {
//         path:"home",
//         element:<Home/>
//       },{
//         path:"about",
//         element: <About/>
//       },
//       {
//         path:"skills",
//         element:<Skills/>
//       },
//       {
//         path:"projects",
//         element:<Projects/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       },{
//         path:"user/userid",
//         element:<User/>
//       },
//       {
//        loader:{ githubinfoLoader },
//        path:"github",
//         element:<Github />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="skills" element={<Skills />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
      <Route path="userid" element={<User />} />
      {/* 
      <Route loader={githubinfoLoader} path="/github" element={<Github />} 
        //hii
      /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
