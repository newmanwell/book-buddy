import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home.jsx"
import BookDetails from "./components/Details.jsx";

const App = () => {

  return (
    <>
      <header>
        <h1>Book Buddy</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/details/:id" element={ <BookDetails />} />
        </Routes>
      </div>
    </>
  )
}

export default App
