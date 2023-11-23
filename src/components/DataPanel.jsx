import React from "react";

export function DataPanel(props) {
  return (
    <div className="divDataPanel">
      <h4>
        {props.number} {props.entity} en la base
      </h4>
    </div>
  );
}
