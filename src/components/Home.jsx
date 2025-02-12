import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [allBooks, setAllBooks] = useState([])
  console.log(allBooks);
  useEffect(() => {
    const getBooks = async() => {
      try {
        const respsonse = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`);
        const booksObj = await respsonse.json();
        const booksArray = booksObj.books;
        setAllBooks(booksArray)
      } catch(error) {
        console.log(error);
      }
    }
    getBooks();
  }, []);

  return (
    allBooks.map(() => {
      console.log("hello");
    })
  )
}

export default Home;