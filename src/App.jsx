import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { LastEntity } from "./components/LastEntity";
import { ContainerCategories } from './components/ContainerCategories'
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="contentContainer">
        <LastEntity />
        <ContainerCategories />
      </div>
    </>
  );
}

export default App;
