
import { Component } from "react";
// import SimpleReactValidator from 'simple-react-validator';
import LibrosServices from '../services/libros/libros.service';

export default class FormLibro extends Component {
    
    constructor(props) {
        super(props);

        this.libroServices = new LibrosServices();
        this.state = {
            dataLibros: {
                data: []
            }
        };

    }

    async componentDidMount() {
        this.setState({
            dataLibros: await this.libroServices.getLibros()
        });               
    }

    render(){
        return (
            <pre>
                {JSON.stringify(this.state.dataLibros.data, null, 4)}
            </pre>  
         )
    }

}
