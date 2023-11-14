import React from "react";
import { DataPanel } from "./DataPanel";

export function ContainerDataPanel(props) {

  return (
    <div className="containerDataPanelDiv">
      <DataPanel number={props.n1} entity={props.e1} />
      <DataPanel number={props.n2} entity={props.e2} />
      <DataPanel number={props.n3} entity={props.e3} />
    </div>
  );
}
