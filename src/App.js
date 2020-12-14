import "./App.css";
import AppBar from "./Components/AppBar";
import DropdownBar from "./Components/DropdownBar"
import BreadcrumBar from "./Components/BreadcrumBar"
import MainStructure from "./Components/MainStructure"
import Footer from "./Components/Footer"

function App() {
  
  return (
    <>
      <AppBar />
      <DropdownBar />
      <BreadcrumBar />
      <MainStructure />
      <Footer />
    </>
  );
}

export default App;
