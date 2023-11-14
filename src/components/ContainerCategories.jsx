import React from "react";
import { Category } from "./Category";

export function ContainerCategories() {
  return (
    <>
      <div className="containerCategoriesDiv">
        {/*En realidad deberia usar un map para generar dinamicamente cada Category */}
        <Category name="Category 1" />
        <Category name="Category 2" />
        <Category name="Category 3" />
        <Category name="Category 4" />
        <Category name="Category 5" />
        <Category name="Category 6" />
        <Category name="Category 7" />
        <Category name="Category 8" />
        <Category name="Category 9" />
        <Category name="Category 10" />
      </div>
    </>
  );
}
