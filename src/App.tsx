import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
