import React, { useState, useEffect } from "react";

export function AllProductsContainer() {
  const [products, setProducts] = useState([]);

  function ProductComponent(props) {
    return (
      <div className="productContainer">
        <p>ID </p>
        <p>{props.product.id}</p>
        <p>Nombre </p>
        <p>{props.product.name}</p>
        <p>Descripción </p>
        <p>{props.product.description}</p>
        <p>Precio </p>
        <p>{'$' + props.product.price}</p>
        <p>Clase </p>
        <p>{props.product.class}</p>
        <p>Imagen </p>
        <img
          src={"http://localhost:3000/uploads/" + props.product.img}
          alt="imagen del producto"
        />
      </div>
    );
  }

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <>
      <h2 id="allProductsTitle">Productos de la base de datos</h2>
      <div id="allProductsContainer">
        {products?.map((pro, index) => {
          return <ProductComponent key={index + pro} product={pro} />;
        })}
      </div>
    </>
  );
}
