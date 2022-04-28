

import logo from '../logo.svg';
import {
  Link
} from "react-router-dom";

function NavBar() {
    return(
        <div>
            {/* NavBar */}

            <br></br>

            <img src={logo} className="inl App-logo" alt="logo" />

            <Link className='inl' to="/home">Home</Link>

            <br></br>

            <hr></hr>

        </div>
    )
}

export default NavBar;