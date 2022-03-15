
import './App.css';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <nav className='navbar'>
       <Link to="/" className='links'>HOME</Link>
        <Link to="/about" className='links'>ABOUT</Link>
        <Link to="/contact" className='links'>CONTACT</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
