import React, { useEffect, useState } from "react";
import data from "../../data/productos10.json";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  };

  useEffect(() => {
    pedirProductos().then((res) => {
      setProductos(res);
    });
  }, []);

  console.log(data);
  return (
    <div>
      <h1> Productos </h1>
      {productos.length > 0 &&
        productos.map((producto) => {
          return (
            <div>
              <img src={producto.imagen} alt={producto.title} />
              <h2>{producto.title}</h2>
              <p>$ {producto.price}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ItemListContainer;
