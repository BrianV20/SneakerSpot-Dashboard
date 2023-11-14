import React from "react";

//usar fetch para traer el ultimo usuario, producto o categoria

export function LastEntity(props) {
  let entity = '';

  return (
    <div className="lastEntityDiv">
      <select name="entityType" id="entityType">
        <option value="user">User</option>
        <option value="product">Product</option>
        <option value="category">Category</option>
      </select>
      <h2>Last product in database</h2>
    </div>
  );
}