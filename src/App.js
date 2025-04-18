import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import ProjectDetail from "./Pages/ProjectDetail";

function App() {
  const [headerColor, setHeaderColor] = useState("#19a661");
  return (
    <Router>
      <Header headerColor={headerColor} />
      <Routes>
        <Route path="/" element={<Home setHeaderColor={setHeaderColor} />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
