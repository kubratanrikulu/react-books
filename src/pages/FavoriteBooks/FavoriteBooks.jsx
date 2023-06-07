
import { useBookContext } from '../../context/bookContext';
const FavoriteBooks = () => {
  const {favorites, addToFavorites, removeFromFavorites } = useBookContext()
  console.log('favorite', favorites)
  const favoritesCheck = (id) => {
   const boolean = favorites.some((book) => book.id === id)
   return boolean
  }
  return (
    <div>
       {favorites.length > 0 ? favorites.map((book) => (
        <div key={book.id}>
          <div><h3>{book.title}</h3></div>
          <div><img src={book.image_url}/></div>
          <div>
          {favoritesCheck(book.id) ? (<button type="submit" onClick={() =>removeFromFavorites(book.id)}>Remove Favorite</button>):
          (<button type="submit" onClick={() =>addToFavorites(book)}>Add toFavorite</button>)
          }
          </div>
        </div>
      )): <h1>You don't have any favorite books yet!</h1>}
    </div>
  )
}

export default FavoriteBooks