
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

// let match = useMatch();
// let { attrUriParam } = useParams();

function App() {
  return (
    <Router>
            <Routes>
              <Route path="/home" element={<Home/>} />     
              <Route path="/" element={<Home/>} />
            </Routes>
    </Router>
  );
}

export default App;
