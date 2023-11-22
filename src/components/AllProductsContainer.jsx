import React, { useState, useEffect } from "react";

export function AllProductsContainer() {
  const [products, setProducts] = useState([]);

  function ProductComponent(props) {
    return (
      <div className="productContainer">
        <p>ID: </p>
        <p>{props.product.id}</p>
        <p>Nombre: </p>
        <p>{props.product.name}</p>
        <p>Descripción: </p>
        <p>{props.product.description}</p>
        <p>Descuento: </p>
        <p>{props.product.discount}</p>
        <p>enOferta: </p>
        <p>{props.product.enOferta}</p>
        <p>Imagen: </p>
        <img src={'http://localhost:3000/uploads/' + props.product.img} alt="imagen del producto" />
        <p>Clase: </p>
        <p>{props.product.class}</p>
        <p>Sex: </p>
        <p>{props.product.sex}</p>
        <p>Talles: </p>
        <p>{props.product.sizes?.map((talle) => {
            return <span key={talle}>{talle} - </span>
        })}</p>
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
        <h2>Productos de la base de datos</h2>
      <div id="allProductsContainer">
        {products?.map((pro, index) => {
          return <ProductComponent key={index + pro} product={pro} />;
        })}
      </div>
    </>
  );
}
