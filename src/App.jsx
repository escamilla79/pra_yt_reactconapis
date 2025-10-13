import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PrimerComponete from "./components/PrimerComponete";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PrimerComponete></PrimerComponete>
    </>
  );
}

export default App;
