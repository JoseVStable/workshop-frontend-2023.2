import Logo from "./img/starWars.png";
import './App.css';
import Searchbar from "./components/Searchbar";
import StarWarsData from "./components/StarWarsData";

function App() {
  return (
    <header>
    <div className="imagem">
      <img src = {Logo} alt = "Logo Star wars"/>
    
    </div>
    <div className="container">
      <a href="#">Inicio</a>
      <a href="#">galeria</a>
      <Searchbar/>
    </div>
    <div className="headeri"></div>
   
      <StarWarsData/>
    </header>
  );
}

export default App;
