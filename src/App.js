import './App.css';
import Home from './pages/Home.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<h1>SEARCH PAGE</h1>}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
