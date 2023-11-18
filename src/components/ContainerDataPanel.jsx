import React, { useState, useEffect } from "react";
import { DataPanel } from "./DataPanel";

export function ContainerDataPanel() {
  const [products, setProducts] = useState({
    count: 0,
    objects: [],
  });
  const [users, setUsers] = useState({
    count: 0,
    objects: [],
  });
  const [categories, setCategories] = useState({
    count: 0,
    objects: [],
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setProducts({ count: data.count, objects: data.products });
      });

    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setUsers({ count: data.count, objects: data.users });
      });

      fetch("http://localhost:3000/api/categories")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setCategories({ count: data.count, objects: data.users });
      });
  }, []);

  return (
    <div className="containerDataPanelDiv">
      <DataPanel number={products.count} entity={products.count > 1 ? 'Products' : 'Product'} />
      <DataPanel number={users.count} entity={users.count > 1 ? 'Users' : 'User'} />
      <DataPanel number={categories.count} entity={categories.count > 1 ? 'Categories' : 'Category'} />
    </div>
  );
}
