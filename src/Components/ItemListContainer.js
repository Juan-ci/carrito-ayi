import React, { useState, useEffect } from "react";

import getData from "../Services/products";

import Item from "./Item";

const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getData()
      .then((result) => setListProducts(result))
      .catch(() => console.log("Error al traer los productos"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="item-list">
      {loading ? (
        <span>Cargando datos...</span>
      ) : (
        listProducts.map(
          ({ id, title, price, pictureUrl, description, stock }) => {
            return (
              <Item
                key={id}
                title={title}
                price={price}
                pictureUrl={pictureUrl}
                description={description}
                stock={stock}
              />
            );
          }
        )
      )}
    </section>
  );
};

export default ItemListContainer;
