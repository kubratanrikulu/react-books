import About from "/src/pages/About/About.jsx";
import FavoriteBooks from "../pages/FavoriteBooks/FavoriteBooks"
import Contact from "../pages/Contact/Contact";
import Homepage from "../pages/Homepage/HomePage";
import BookCard from "../components/BookCard/BookCard";
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
  {
    path: "/favorites",
    element: <FavoriteBooks/>
  },
  {
    path: "/books/:id",
    element: <BookCard/>
  },
];

export default routesPaths