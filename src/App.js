import Nav from './pages/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import SkillsTwo from './pages/SkillsTwo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Home/>
        <About/>
        <Skills/>
        {/* <SkillsTwo/> */}
      </header>
    </div>
  );
}

export default App;
