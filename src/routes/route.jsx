import About from "/src/pages/About/About.jsx";

import Contact from "../pages/Contact/Contact";
import Homepage from "../pages/Homepage/HomePage";
const routesPaths = [
  {
    path: "/",
    element: <Homepage/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
 
  
];

export default routesPaths