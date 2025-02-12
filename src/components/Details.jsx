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
        setOneBook(bookDetail);
      } catch(error) {
        console.log(error);
      }
    }
    getBookDetail();
  }, []);



  return (
    <>
    
      {
        oneBook.id ? 
        <section>
          <h2>Title: { oneBook.title }</h2>
          <h2>Author: { oneBook.author }</h2>
          <img src={ oneBook.coverimage} alt="Book Cover"/>
          <p>Description: { oneBook.description }</p>
        </section>
        :
        null
      }
    </>
  )
}

export default BookDetails;