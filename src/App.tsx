import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div style={{ margin: '0 30px' }}>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />
      </Routes>
    </div>
  );
}

export default App;
