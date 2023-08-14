import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Main">
      <a
        className="link"
        href="https://reactjs.org"
        target="_blank"
      >
        <img src={logo} className='logo'/>
      </a>
        {/* <img src={logo} className="first-heart"/> */}
        {/* <img src={logo} className="second-heart"/> */}
    </div>
  );
}

export default App;
