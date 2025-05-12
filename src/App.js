import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import ProjectDetail from "./Pages/ProjectDetail";
import ScrollTopButton from "./Components/ScrollTopButton/ScrollTopButton";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [headerColor, setHeaderColor] = useState("#19a661");

  return (
    <Router>
      <ScrollToTop />
      <Header headerColor={headerColor} />
      <Routes>
        <Route path="/" element={<Home setHeaderColor={setHeaderColor} />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <ScrollTopButton />
    </Router>
  );
}

export default App;
