import { Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Main from "./Components/Main.jsx"
import Footer from "./Components/Footer.jsx"

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" Component={Main}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
