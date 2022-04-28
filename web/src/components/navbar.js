

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

            <Link className='inl btn-navbar' to="/home">Home</Link>

            <Link className='inl btn-navbar' to="/listar">Listar Libros</Link>

            <Link className='inl btn-navbar' to="/nuevo">Agregar Libro</Link>

            <br></br>

            <hr></hr>

        </div>
    )
}

export default NavBar;