import logo from '../logo.svg';
import {
  Link
} from "react-router-dom";

function Home() {
  return (
    <div>
      
      {/* Home View */}

      <br></br>
      <img src={logo} className="inl App-logo" alt="logo" /> Menu
      <br></br>
      <Link to="/home">Home</Link>

    </div>
  );
}

export default Home;
