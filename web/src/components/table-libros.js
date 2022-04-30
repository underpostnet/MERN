
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
        window._updateLibro = event;
        this.props.navigate('/actualizar');
    }

    renderTable(){
        let _render = `
        <div class="w3-container" style="margin-top: 20px" >
                <table class="w3-table-all">        
        `;   
        
        _render += `

        <thead>
        <tr class="w3-blue" >
        
        `;
        Object.keys(this.state.dataLibros.data[0]).map( 
        _header => {
            if(_header!="__v"){
                _render += "<th>" + _header + "</th>";
            }
        });
        _render += "<th></th><th></th></tr></thead>";

        this.state.dataLibros.data.map( 
        (_item, i) => {

            if(this.props._detalle && (_item[window._search.key]==window._search.value)==false){
                return;
            }

            _render += "<tr>";
            Object.keys(_item).map( 
                _key => {
                    if(_key!="__v"){
                        _render += "<th>" + _item[_key] + "</th>";
                    }                    
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
      
        _render += `
            </table>
        </div>
        `;
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
