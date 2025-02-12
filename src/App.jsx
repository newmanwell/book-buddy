import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home.jsx"
import BookDetails from "./components/Details.jsx";
import Register from "./components/Register.jsx";

const App = () => {

  return (
    <>
      <header>
        <h1>Book Buddy</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/register">Create Account</Link>
        </nav>
      </header>
      <div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/details/:id" element={ <BookDetails />} />
          <Route path="/register" element={ <Register /> } />
        </Routes>
      </div>
    </>
  )
}

export default App
