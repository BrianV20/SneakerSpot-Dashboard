import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { LastEntityContainer } from "./components/LastEntityContainer";
import { ContainerCategories } from './components/ContainerCategories'
import "./App.css";

function App() {

  return (
    <>
      <NavBar />
      {/* {products?.map((prod) => {
        return <p>{prod.name}</p>
      })} */}
      <div className="contentContainer">
        <LastEntityContainer />
        <ContainerCategories />
      </div>
    </>
  );
}

export default App;
