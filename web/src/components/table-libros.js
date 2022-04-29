
import { Component } from "react";
// import SimpleReactValidator from 'simple-react-validator';
import LibrosServices from '../services/libros/libros.service';
import parse from 'html-react-parser';

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

    renderTable(){
        let _render = "<table>";   
        
        _render += "<tr>";
        Object.keys(this.state.dataLibros.data[0]).map( 
        _header => {
            _render += "<th>" + _header + "</th>";
        });
        _render += "</tr>";

        this.state.dataLibros.data.map( 
        _item => {
            _render += "<tr>";
            Object.keys(_item).map( 
                _key => {
                    _render += "<th>" + _item[_key] + "</th>";
                });
            _render += "</tr>";
        });
      
        _render += "</table>";
        return parse(_render);
    }

    render(){
        return (
         <div>
             {this.state.dataLibros.data.length > 0 ? this.renderTable() : "" }
         </div>              
         )
    }

}
