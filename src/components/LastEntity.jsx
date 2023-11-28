import React, { useState, useEffect } from "react";

import "../App.css";

export function LastEntity({ entity }) {
  const [data, setData] = useState({
    count: 0,
    objects: [],
  });

  function GetEntity({ entity, entityData }) {
    if (entity == "Producto") {
      // let temp = Object.keys(entityData)[Object.keys(entityData).length - 1];
      // let temp2 = entityData[Object.keys(entityData)[Object.keys(entityData).length - 1]];
      let productToShow = entityData[entityData.length - 1];

      return (
        <>
          {productToShow ? (
            <div className="entityContainer">
              <img
                src={"http://localhost:3000/uploads/" + productToShow.img}
                alt="imagen del producto"
              />
              <section id="lastProductDetails">
                <p>{productToShow.name}</p>
                <p>Descripcion </p>
                <p>{productToShow.description}</p>
                <p>Precio </p>
                <p>{'$' + productToShow.price}</p>
                <p>Descuento </p>
                <p>{productToShow.discount + '%'}</p>
                <p>Clase </p>
                <p>{productToShow.class}</p>
                <p>Sexo </p>
                {console.log(productToShow)}
                <p>
                  {productToShow.sex
                      ? "Mujer"
                      : "Hombre"
                    }
                </p>
                <p>En oferta </p>
                <p>
                  {productToShow.enOferta
                    ? productToShow.enOferta == 0
                      ? "Si"
                      : "No"
                    : ""}
                </p>
                <p>Talles </p>
                <p>{productToShow.sizes?.map((size) => {
                  if (size == productToShow.sizes[productToShow.sizes.length - 1]) {
                    return size;
                  }
                  else {
                    return size + ' - ';
                  }
                })}</p>
                {/* <p>{productToShow.sizes}</p> */}
              </section>
            </div>
          ) : (
            ""
          )}
        </>
      );
    } else if (entity == "Usuario") {
      let userToShow = entityData[entityData.length - 1];

      return (
        <>
          {userToShow ? (
            <div className="entityContainer">
              <img
                src={"http://localhost:3000/uploads/" + userToShow.img}
                alt="imagen del usuario"
                />
              <section id="lastUserDetails">
                <p>{userToShow.name}</p>
                <p>Id </p>
                <p>{userToShow.id}</p>
                <p>Email </p>
                <p>{userToShow.email}</p>
                <p>Tipo </p>
                <p>{userToShow.type}</p>
              </section>
            </div>
          ) : (
            ""
          )}
        </>
      );
    } else if (entity == "Categoria") {
      let categoryToShow = entityData[entityData.length - 1];

      return (
        <>
          {categoryToShow ? (
            <div className="entityContainer">
              <section id="lastCategoryDetails">
                <p>{categoryToShow.name}</p>
                <p>Id </p>
                <p>{categoryToShow.id}</p>
              </section>
            </div>
          ) : (
            ""
          )}
        </>
      );
    }
  }

  useEffect(() => {
    let url;
    if (entity === "Producto") {
      url = "http://localhost:3000/api/products";
    } else if (entity === "Usuario") {
      url = "http://localhost:3000/api/users";
    } else if (entity === "Categoria") {
      url = "http://localhost:3000/api/categories";
    }

    if (url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData({
            count: data.count,
            objects: data.products || data.users || data.categories,
          });
        });
    }
  }, [entity]);

  return (
    <>
      <GetEntity entity={entity} entityData={data.objects} />
    </>
  );
}
