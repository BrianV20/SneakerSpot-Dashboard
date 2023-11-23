import React, { useEffect, useState } from "react";
import { LastEntity } from "./LastEntity";

export function LastEntityContainer(props) {
  const [entity, setEntity] = useState('Producto');

  return (
    <div className="lastEntityDiv">
      <div>
      <select name="entityType" id="entityType" value={entity} onChange={val => setEntity(val.target.value)}>
        <option value="Producto">Producto</option>
        <option value="Usuario">Usuario</option>
        <option value="Categoria">Categoria</option>
      </select>
      {entity == 'Categoria' ? <h2>Ultima {entity} en la base</h2> : <h2>Ultimo {entity} en la base</h2>}

      </div>
      <section>
        <LastEntity entity={entity}/>
      </section>
    </div>
  );
}