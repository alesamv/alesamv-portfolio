import Nav from './pages/Nav';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Home/>
        <About/>
      </header>
    </div>
  );
}

export default App;
