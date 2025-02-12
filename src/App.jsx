import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx"

function App() {


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
          <Route path="/details/:id" element={<h2>Testing</h2>} />
        </Routes>
      </div>
    </>
  )
}

export default App
