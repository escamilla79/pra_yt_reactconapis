import data from "../../data/productos10.json";

export const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};
