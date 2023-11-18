import React, {useState, useEffect} from "react";
import { Category } from "./Category";

export function ContainerCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setCategories(data.categories);
      });
  }, [categories]);

  return (
    <>
      <div className="containerCategoriesDiv">
        {categories?.map((cat, index) => {
          return <p key={cat+index}>{cat.name}</p>
        })}
        {/*En realidad deberia usar un map para generar dinamicamente cada Category */}
        {/* <Category name="Category 1" />
        <Category name="Category 2" />
        <Category name="Category 3" />
        <Category name="Category 4" />
        <Category name="Category 5" />
        <Category name="Category 6" />
        <Category name="Category 7" />
        <Category name="Category 8" />
        <Category name="Category 9" />
        <Category name="Category 10" /> */}
      </div>
    </>
  );
}
