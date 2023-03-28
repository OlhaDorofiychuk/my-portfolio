
import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
     <header>My Portfolio</header>
     <nav>
      <ul><li>Home</li>
      <li>About</li>
      <li>Projects</li>
      
      </ul>
     </nav>
      <Home />
      <About />
      <Projects />
     

    </div>
  );
}

export default App;
