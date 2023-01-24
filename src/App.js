import Nav from './pages/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import SkillsTwo from './pages/SkillsTwo';
import Work from './pages/Work';

import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Home/>
        <About/>
        <Skills/>
        <SkillsTwo/>
        <Work/>
        <Contact/>
      </header>
    </div>
  );
}

export default App;
