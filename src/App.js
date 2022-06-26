import { Routes, Route} from 'react-router-dom';
import './App.css';
import "../src/styles/style.css";
import ErrorPage from './pages/ErrorPage';
import Movies from './pages/Movies';
import { useState } from 'react';
import prisonBreakImage from "./assets/images/prison-break.jpeg";
import elcapo from "./assets/images/elcapo.jpeg";
import SquidGame from "./assets/images/Squid_Game.jpg";
import DetailMovie from './pages/DetailMovie';
function App() {
  const [movies, setMovies] = useState([
    {
      id:1,
      name:"EL CAPO",
      videoLink:"https://www.youtube.com/embed/_ZdLIUCr14s",
      photo:elcapo,
      description:"El Capo, le trafiquant de drogue le plus recherché du Mexique, a été intercepté alors qu'il se cachait avec ses hommes de confiance, sa femme et son amant. Lors de sa fuite, il déclare la guerre au gouvernement et à son propre passé.",
      year:"2019"
    },
    {
      id:2,
      name:"PRISON BREAK",
      videoLink:"https://www.youtube.com/embed/AL9zLctDJaU",
      photo:prisonBreakImage,
      description:"Son frère, Lincoln Burrows, a été reconnu coupable d'un crime qu'il n'a pas commis et mis dans le couloir de la mort. Michael brandit une banque pour se faire incarcérer aux côtés de son frère au pénitencier d'État de Fox River, puis met en branle une série de plans élaborés pour faire sortir Lincoln et prouver son innocence.",
      year:"2005"
    },
    {
      id:3,
      name:"SQUID GAME",
      videoLink:"https://www.youtube.com/embed/oqxAJKy0ii4",
      photo:SquidGame,
      description:"La série s'articule autour d'un concours où 456 joueurs, qui sont tous en grande difficulté financière, risquent leur vie pour jouer à une série de jeux mortels pour enfants pour avoir la chance de gagner 45,6 milliards de ₩ (38 millions de dollars, 33 millions d'euros ou GB 29 millions de livres sterling à la date de diffusion)",
      year:"2021"
    }
  ]);
  return (
      <div>
          <Routes>
            <Route index path="/" element={<Movies movies={movies}/>}/>
            <Route path="/movie/:id" element={<DetailMovie movies={movies}/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
      </div>
  );
}

export default App;
