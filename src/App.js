
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
     <header>My Portfolio</header>
     <nav className='navigation'>
      <ul className='links'>
        <li>
        <Link to='/'>Home</Link>
        </li>
      <li>
        <Link to='/about'>About</Link>
        </li>
      <li>
      <Link to='/projects'>Projects </Link>
      </li>
      <link></link>
      {/* //https://www.linkedin.com/in/olha-dorofiychuk-655353178/ */}
      </ul>
     </nav>
     <main>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
      
      
      
      </Routes>
      
     
      </main>
    </div>
  );
}

export default App;
