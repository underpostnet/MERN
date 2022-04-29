
import {
  Link
} from "react-router-dom";

function NavBar() {
    return(
        <div className="navbar">

            <Link className='inl btn-navbar' to="/home">Home</Link>

            <Link className='inl btn-navbar' to="/listar">Listar Libros</Link>

            <Link className='inl btn-navbar' to="/nuevo">Agregar Libro</Link>

        </div>
    )
}

export default NavBar;