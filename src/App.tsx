import './App.css';

import { Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import Home from './views/Home';

function App() {
  return (
    <div style={{ margin: '0 30px' }}>
      <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;
