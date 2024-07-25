import "./App.css";
import Home from "./pages/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage.js";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
