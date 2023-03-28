
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
     <header>My Portfolio</header>
     <nav>
      <ul>
        <li>
        <Link to='/'>Home</Link>
        </li>
      <li>
        <Link to='/about'>About</Link>
        </li>
      <li>
      <Link to='/projects'>Projects </Link>
      </li>
      
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
