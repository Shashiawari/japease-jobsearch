import "./App.css";
import Main from "./components/main/main";
import Home from "./components/home/Home";
import Culture from "./components/culture/culture";
import About from "./components/About/About";
import SearchPage from "./components/search/Search";
import NoPage from "./NoPage";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route index element={<Main />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/culture" element={<Culture />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
