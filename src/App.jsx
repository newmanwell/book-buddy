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
        </Routes>
      </div>
    </>
  )
}

export default App
