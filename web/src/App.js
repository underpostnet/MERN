
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  // useMatch,
  // useParams
} from "react-router-dom";

import Home from './views/home';
import NavBar from './components/navbar'

// let match = useMatch();
// let { attrUriParam } = useParams();

function App() {
  return (
    <Router>
            
            <NavBar/>

            <Routes>
              <Route path="/home" element={<Home/>} />     
              <Route path="/" element={<Home/>} />
            </Routes>
    
    </Router>
  );
}

export default App;
