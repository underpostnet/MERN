import FormLibro from "../components/form-libro";
import { useNavigate } from "react-router-dom";

function ActualizarLibro(){
    const navigate = useNavigate();
    return(
        <FormLibro navigate={navigate} _updateLibro={true} />
    )   
}

export default ActualizarLibro;