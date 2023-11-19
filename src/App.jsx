import { NavBar } from "./components/NavBar";
import { LastEntityContainer } from "./components/LastEntityContainer";
import { ContainerCategories } from './components/ContainerCategories';
import { AllProductsContainer } from './components/AllProductsContainer';
import "./App.css";

function App() {

  return (
    <>
      <NavBar />
      <div className="contentContainer">
        <LastEntityContainer />
        <ContainerCategories />
      </div>
      <AllProductsContainer />
    </>
  );
}

export default App;
