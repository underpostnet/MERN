import Search from "../components/search";
import { useNavigate } from "react-router-dom";

function BuscarLibro(){
    const navigate = useNavigate();
    return(
        <Search navigate={navigate} />
    )   
}

export default BuscarLibro;