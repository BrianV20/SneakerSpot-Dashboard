import React, { useEffect, useState } from "react";
import { LastEntity } from "./LastEntity";

//usar fetch para traer el ultimo usuario, producto o categoria

export function LastEntityContainer(props) {
  // let entity = '';
  const [entity, setEntity] = useState('Producto');

  // const handleOptionChange = (val) => {
  //   setEntity(val)
  //   console.log(entity);
  // }
  // useEffect(() => {
  //   console.log(entity);
  // }, [entity]);

  return (
    <div className="lastEntityDiv">
      <div>
      <select name="entityType" id="entityType" value={entity} onChange={val => setEntity(val.target.value)}>
        <option value="Producto">Producto</option>
        <option value="Usuario">Usuario</option>
        <option value="Categoria">Categoria</option>
      </select>
      {/* <h2>Ultimo {entity} in database</h2> */}
      {entity == 'Category' ? <h2>Ultima {entity} en la base</h2> : <h2>Ultimo {entity} en la base</h2>}

      </div>
      <section>
        <LastEntity entity={entity}/>
      </section>
    </div>
  );
}