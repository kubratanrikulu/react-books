import axios from 'axios';
import { BOOK_DETAILS_URL } from '../../api/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const BookCard = () => {
  const [book, setBook] = useState([]);
  const {id} = useParams()
  useEffect(() => {
    axios.get(`${BOOK_DETAILS_URL}/${id}`)
    .then((res) => {
      setBook(res.data)
    })
    .catch((err) => console.log(err))
  }, [id])
  return (
    <div>
      <div>
        <h2>{book?.title}</h2>
        <img src={book?.image_url} alt="" />
      </div>
      <div>
        <h2>Description</h2>
        <p>{book?.description}</p>
      </div>
    </div>
  )
}

export default BookCard