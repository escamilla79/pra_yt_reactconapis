import React, { useEffect, useState } from "react";
/// Hooks Use efffect y useState
const TextH2 = () => {
  const [texto, setTexto] = useState("Hola");

  useEffect(() => {
    console.log("Componente montado ");

    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  useEffect(() => {
    console.log("Text modificado ");
  }, [texto]);

  const handleText = (e) => {
    setTexto(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleText} />
      <h2>{texto}</h2>
    </div>
  );
};

export default TextH2;
