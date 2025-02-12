import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [allBooks, setAllBooks] = useState([])

  useEffect(() => {
    const getBooks = async() => {
      try {
        const respsonse = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`);
        const booksObj = await respsonse.json();
        const booksArray = booksObj.books;
        setAllBooks(booksArray)
      } catch(error) {
        alert(error);
      }
    }
    getBooks();
  }, []);

  return (
    <section className="titles">
      {
        allBooks.map((oneBook) => {
          return (
            <Link to={`/details/${oneBook.id}`} key={oneBook.id}>
              <h2>{ oneBook.title }</h2>
            </Link>
          )
        })
      }
    </section>
  )
}

export default Home;