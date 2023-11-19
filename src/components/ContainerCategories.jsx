import React, { useState, useEffect } from "react";
import { Category } from "./Category";

export function ContainerCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories);
      });
  }, []);

  return (
    <>
      <div className="containerCategoriesDiv">
        <h2 id="categoriesTitle">Categories</h2>
        {categories?.map((cat, index) => {
          return <Category key={index + cat} name={cat.name} count={cat.count} />;
        })}
      </div>
    </>
  );
}
