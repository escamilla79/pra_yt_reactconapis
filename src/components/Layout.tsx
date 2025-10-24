import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app">
      <nav style={{ padding: 12 }}>
        <Link to="/" style={{ marginRight: 12 }}>
          Home
        </Link>
        <Link to="/primerComponente" style={{ marginRight: 10 }}>
          First Componente
        </Link>
        <Link to="/card" style={{ marginRight: 10 }}>
          Card
        </Link>
        <Link to="/hooks" style={{ marginRight: 10 }}>
          Hooks
        </Link>
        <Link to="/promesas" style={{ marginRight: 10 }}>
          Promesas
        </Link>
        <Link to="/about" style={{ marginRight: 10 }}>
          Abaout
        </Link>
      </nav>
      Layout
    </div>
  );
};

export default Layout;
