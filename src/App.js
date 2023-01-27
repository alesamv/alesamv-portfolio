import { Nav } from './nav';
import Main from './pages/Main'
import NavProvider from './context/NavContext';

function App() {
  return (
    <div className="appContainer">
        <NavProvider>
          <Nav />
          <Main />
			  </NavProvider>
      
    </div>
  );
}

export default App;
