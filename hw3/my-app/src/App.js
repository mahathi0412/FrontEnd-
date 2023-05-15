import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home";
import Search from "./pages/Search";
import Houses from "./pages/Houses";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="houses" element={<Houses />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App