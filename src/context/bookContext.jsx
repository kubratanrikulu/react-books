import { createContext, useContext } from "react";
import { useState } from "react";

const BookContext = createContext(null);

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (context === undefined) {
    throw new Error("BookContext must be within BookContextProvider");
  }
  return context;
};

const BookContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const addToFavorites = (book) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.concat(book)
    setFavorites(newFavorites)
  };
  const removeFromFavorites = (id) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.filter((book )=> book.id ==! id)
    setFavorites(newFavorites)
  };
  return (
    <BookContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;