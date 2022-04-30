import { Component } from "react";

export default class Search extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            nombreLibro: "",
            autor: "",
            editorial: ""      
        };

        this.handleChange = this.handleChange.bind(this);
           
        this.handleSubmitEditorial = this.handleSubmitEditorial.bind(this);
        this.handleSubmitAutor = this.handleSubmitAutor.bind(this);
        this.handleSubmitNombreLibro = this.handleSubmitNombreLibro.bind(this);

      }
    
      async handleSubmitEditorial(event) {
        console.log('handleSubmit', event);
        console.log(JSON.stringify(this.state, null, 4));
        event.preventDefault();       
        window._search = {
            value: this.state.editorial,
            key: "editorial"
        };
        this.props.navigate('/detalle');
      }
      async handleSubmitAutor(event) {
        console.log('handleSubmit', event);
        console.log(JSON.stringify(this.state, null, 4));
        event.preventDefault();       
        window._search = {
          value: this.state.autor,
          key: "autor"
        };
        this.props.navigate('/detalle');
      }
      async handleSubmitNombreLibro(event) {
        console.log('handleSubmit', event);
        console.log(JSON.stringify(this.state, null, 4));
        event.preventDefault();       
        window._search = {
          value: this.state.nombreLibro,
          key: "nombreLibro"
        };
        this.props.navigate('/detalle');
      }

      handleChange(event){
        let state = {};
        state[event.target.name] = event.target.value;
        console.log('handleChangue', event, state);
        this.setState(state);
      }    
    
      render() {
        return (
          <div>
                <form onSubmit={this.handleSubmitNombreLibro}>
                    <input 
                        className="in"
                        placeholder="Nombre Libro" 
                        type="text" 
                        value={this.state.nombreLibro} 
                        name="nombreLibro"
                        onChange={this.handleChange} 
                    />
                    <button className="in" type="submit" value="Submit" name="nombreLibro"> Buscar </button>
                </form>
                <form onSubmit={this.handleSubmitAutor}>
                    <input 
                        className="in"
                        placeholder="Autor" 
                        type="text" 
                        value={this.state.autor} 
                        name="autor"
                        onChange={this.handleChange} 
                    />
                    <button className="in" type="submit" value="Submit" name="autor"> Buscar </button>
                </form>
                <form onSubmit={this.handleSubmitEditorial}>
                    <input 
                        className="in"
                        placeholder="Editorial" 
                        type="text" 
                        value={this.state.editorial} 
                        name="editorial"
                        onChange={this.handleChange} 
                    />
                    <button className="in" type="submit"> Buscar </button>
                </form>
          </div>
        );
      }

}
