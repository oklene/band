import './App.css';
import Home from './pages/Home';
import NewFriends from './pages/NewFriends';
import HotIssue from './pages/HotIssue';
import Desire from './pages/Desire';
import WhatIs from './pages/WhatIs';
import Who from './pages/Who';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-friends" element={<NewFriends />} />
          <Route path="/hot-issue" element={<HotIssue />} />
          <Route path="/desire" element={<Desire />} />
          <Route path="/what-is" element={<WhatIs />} />
          <Route path="/who" element={<Who />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
