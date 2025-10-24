import React, { useState } from "react";
import TextH2 from "./TextH2";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    setNumber(number + 1);
    console.log(number);
  };

  const handleRestar = () => {
    setNumber(number - 1);
  };

  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div>
      Counter
      <h2> {number}</h2>
      <button onClick={handleClick}>Sumar</button>
      <button onClick={handleRestar}>Restar</button>
      <hr></hr>
      <button onClick={handleShow}>Ocultar/Mostrar</button>
      {show === true && <TextH2 />}
      <hr></hr>
      <TextH2></TextH2>
    </div>
  );
};

export default Counter;
