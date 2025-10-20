import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PrimerComponete from "./components/PrimerComponete";
import { AppRoutes } from "./utils/routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppRoutes></AppRoutes>
    </>
  );
}

export default App;
