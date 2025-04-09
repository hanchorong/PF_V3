import { useState } from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";

function App() {
  const [headerColor, setHeaderColor] = useState("#19a661");
  return (
    <>
      <Header headerColor={headerColor} />
      <Home setHeaderColor={setHeaderColor} />
    </>
  );
}

export default App;
