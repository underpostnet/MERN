
import TableLibros from '../components/table-libros';
import { useNavigate } from "react-router-dom";

function ListarLibros(){
    const navigate = useNavigate();
    return(
        <TableLibros navigate={navigate} />
    )

}

export default ListarLibros;