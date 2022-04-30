
import TableLibros from '../components/table-libros';
import { useNavigate } from "react-router-dom";

function Detalle(){
    const navigate = useNavigate();
    return(
        <TableLibros _detalle={true} navigate={navigate} />
    )

}

export default Detalle;