import "./App.css";
import Cards from "./compenents/Cards/Cards";
import Header from "./compenents/Header/Header";
import Navbar from "./compenents/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Cards />
    </div>
  );
}

export default App;
