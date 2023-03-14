import logo from './logo.svg';
import './App.css';
import Fooldal from './pages/Fooldal';
import { Routes, Route,} from "react-router-dom";
import Bemutatkozas from './pages/Bemutatkozas';
import Kapcsolat from './pages/Kapcsolat';

function App() {
  return (
    <>
     
     <Routes>
        <Route exact path="/" element={<Fooldal />}></Route>
        <Route exact path="/bemutatkozas" element = {<Bemutatkozas />}></Route>
        <Route exact path="/kapcsolat" element={<Kapcsolat/>}></Route>

     
      </Routes>
     
     
       
    </>
  );
}


export default App;
