
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

    async deleteLibro(event){
        console.log("deleteLibro" , event);
        await this.libroServices.deleteLibro(event._id);
        this.setState({
            dataLibros: {
                data: this.state.dataLibros.data.filter(libro => libro._id != event._id)
            }
        });
    }
    async updateLibro(event){
        console.log("updateLibro" , event);

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
        (_item, i) => {
            _render += "<tr>";
            Object.keys(_item).map( 
                _key => {
                    _render += "<th>" + _item[_key] + "</th>";
                });

                _render += "<th> <i class='fa fa-edit' id='edit-"+i+"' ></i> </th>";
                _render += "<th> <i class='fa fa-trash' id='del-"+i+"' ></i> </th>";
                
                setTimeout( () => {
                    document.querySelector('#edit-'+i).onclick = 
                    () => this.updateLibro(_item);
                    document.querySelector('#del-'+i).onclick = 
                    () => this.deleteLibro(_item);                    
                }, 0);

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
