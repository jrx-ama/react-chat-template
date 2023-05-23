import { Route, Routes } from 'react-router-dom';

import Home from './views/Home';
function App() {
  return (
    <div style={{ margin: '0 30px', background: '#ccc' }}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
