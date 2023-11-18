import React, { useEffect, useState } from "react";
import { LastEntity } from "./LastEntity";

//usar fetch para traer el ultimo usuario, producto o categoria

export function LastEntityContainer(props) {
  // let entity = '';
  const [entity, setEntity] = useState('Product');

  // const handleOptionChange = (val) => {
  //   setEntity(val)
  //   console.log(entity);
  // }
  // useEffect(() => {
  //   console.log(entity);
  // }, [entity]);

  return (
    <div className="lastEntityDiv">
      <select name="entityType" id="entityType" value={entity} onChange={val => setEntity(val.target.value)}>
        <option value="Product">Product</option>
        <option value="User">User</option>
        <option value="Category">Category</option>
      </select>
      <h2>Last {entity} in database</h2>
      <section>
        <LastEntity entity={entity}/>
      </section>
    </div>
  );
}