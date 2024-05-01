
import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Header from './Components/Header'
import Createblog from './Components/Createblog'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path='/create-blog' element={<Createblog/>}/>
    </Routes>
    </>
  )
}

export default App
