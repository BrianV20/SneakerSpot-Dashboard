import React, { useState, useEffect } from "react";

import "../App.css";

export function LastEntity({ entity }) {
  const [data, setData] = useState({
    count: 0,
    objects: [],
  });

  function GetEntity({ entity, entityData }) {
    if (entity == "Product") {
      // let temp = Object.keys(entityData)[Object.keys(entityData).length - 1];
      // let temp2 = entityData[Object.keys(entityData)[Object.keys(entityData).length - 1]];
      let productToShow = entityData[entityData.length - 1];
      
      return (
        <>
          {productToShow ? (
            <div>
              {/* <img src={productToShow.img} alt="" /> */}
              <h4>Aca deberia ir la imagen del producto</h4>
              <section id="lastProductDetails">
                <p>{productToShow.name}</p>
                <p>Descripcion: </p>
                <p>{productToShow.description}</p>
                <p>Precio: </p>
                <p>{productToShow.price}</p>
                <p>Descuento: </p>
                <p>{productToShow.discount}</p>
                <p>Clase: </p>
                <p>{productToShow.class}</p>
                <p>Sexo: </p>
                <p>
                  {/* {console.log("SEXO: " + productToShow.sex)} */}
                  {productToShow.sex
                    ? productToShow.sex == 0
                      ? "Mujer"
                      : "Hombre"
                    : ""}
                </p>
              </section>
            </div>
          ) : (
            ""
          )}
        </>
      );
    } else if (entity == "User") {
      let userToShow = entityData[entityData.length - 1];

      return (
        <>
          {userToShow ? (
            <div>
              {/* {console.log(userToShow.detail)} */}
              <h4>Aca deberia ir la imagen del usuario</h4>
              <section id="lastUserDetails">
                <p>{userToShow.name}</p>
                <p>Id: </p>
                <p>{userToShow.id}</p>
                <p>Email: </p>
                <p>{userToShow.email}</p>
                <p>Tipo: </p>
                <p>{userToShow.type}</p>
              </section>
            </div>
          ) : (
            ""
          )}
        </>
      );
    } else if (entity == "Category") {
      let categoryToShow = entityData[entityData.length - 1];

      return (
        <>
          {categoryToShow ? (
            <div>
              <section id="lastCategoryDetails">
                <p>{categoryToShow.name}</p>
                <p>Id: </p>
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
    if (entity === "Product") {
      url = "http://localhost:3000/api/products";
    } else if (entity === "User") {
      url = "http://localhost:3000/api/users";
    } else if (entity === "Category") {
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
