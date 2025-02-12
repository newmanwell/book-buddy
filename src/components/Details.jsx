import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [oneBook, setOneBook] = useState({});

  useEffect(() => {
    const getBookDetail = async() => {
      try {
        const respsonse = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`);
        const bookObj = await respsonse.json();
        const bookDetail = bookObj.book;
        console.log(bookDetail);
      } catch(error) {
        console.log(error);
      }
    }
    getBookDetail();
  }, []);



  return (
    <h2>The Details</h2>
  )
}

export default BookDetails;