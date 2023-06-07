import { useEffect, useState } from 'react'
import { API_URL } from '../../api/API'
import axios from 'axios';
import { useBookContext } from '../../context/bookContext';
import { useNavigate } from 'react-router-dom';
const BookList = () => {
  const [books, setBooks] = useState([]);
  const {favorites, addToFavorites, removeFromFavorites } = useBookContext()
const navigate = useNavigate()
 const favoritesCheck = (id) => {
  const boolean = favorites.some((book) => book.id === id)
  return boolean
 }
  useEffect(() => {
   axios.get(API_URL).then(res => {
    console.log(res.data)
    setBooks(res.data)
   }
   ).catch(err =>console.log(err))
  }, [])
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <div><h3>{book.title}</h3></div>
          <div><img src={book.image_url} onClick={() => navigate(`/books/${book.id}`)}/></div>
          <div>
          {favoritesCheck(book.id) ? (<button type="submit" onClick={() =>removeFromFavorites(book.id)}>Remove Favorite</button>):
          (<button type="submit" onClick={() =>addToFavorites(book)}>Add toFavorite</button>)
          }
          </div>
        </div>
      ))}
    </div>
  )
}

export default BookList