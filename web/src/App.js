// router
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  // useMatch,
  // useParams
} from "react-router-dom";

// componentes
import NavBar from './components/navbar';

// vistas
import Home from './views/home';
import ListarLibros from './views/listar-libros';
import NuevoLibro from './views/nuevo-libro';

// let match = useMatch();
// let { attrUriParam } = useParams();

function App() {
  return (
    <Router>
            
            <NavBar/>

            <Routes>
              <Route path="/home" element={<Home/>} />     
              <Route path="/nuevo" element={<NuevoLibro/>} />   
              <Route path="/listar" element={<ListarLibros/>} />  
              <Route path="/" element={<Home/>} />
            </Routes>
    
    </Router>
  );
}

export default App;
