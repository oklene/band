import heart from './image/heart.svg';
import comet from './image/comet.svg';
import computer from './image/computer.svg';
import folder from './image/folder.svg';
import rabbit from './image/rabbit.svg';
import pressStart from './image/press_start.svg';
import instagram from './image/instagram.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <a href="https://reactjs.org">
        <img src={heart} className='heart'/>
      </a>
      <a href="https://reactjs.org">
        <img src={comet} className='comet'/>
      </a>
      <a href="https://reactjs.org">
        <img src={computer} className='computer'/>
      </a>
      <a href="https://reactjs.org">
        <img src={folder} className='folder'/>
      </a>
      <a href="https://reactjs.org">
        <img src={rabbit} className='rabbit'/>
      </a>
      <a href="https://reactjs.org">
        <img src={pressStart} className='press-start'/>
      </a>
      <a href="https://reactjs.org">
        <img src={instagram} className='instagram'/>
      </a>
    </div>
  );
}

export default App;
