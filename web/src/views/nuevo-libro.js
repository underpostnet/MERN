import FormLibro from "../components/form-libro";
import { useNavigate } from "react-router-dom";

function NuevoLibro(){
    const navigate = useNavigate();
    return(
        <FormLibro navigate={navigate} />
    )   
}

export default NuevoLibro;