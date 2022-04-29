import { Component } from "react";
import SimpleReactValidator from 'simple-react-validator';
import LibrosServices from '../services/libros/libros.service';
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();

export default class FormLibro extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
          ISBN: "",
          nombreLibro: "",
          autor: "",
          editorial: "",
          portada: "",
          paginas: 0        
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.validator = new SimpleReactValidator();

        this.libroService = new LibrosServices();

      }
    
      async handleSubmit(event) {
        console.log('handleSubmit', event);
        console.log(JSON.stringify(this.state, null, 4));
        event.preventDefault();

        if (this.validator.allValid()) {
          
          const request = await this.libroService.postLibro(this.state);
       
          console.log(request);
          if(request.data && request.data._id){
            console.log('campos validos');
           
          }

        } else {
          this.validator.showMessages();
          // rerender to show messages for the first time
          // you can use the autoForceUpdate option to do this automatically`
          this.forceUpdate();
        }

      }

      handleChange(event){
        let state = {};
        state[event.target.name] = event.target.value;
        if(event.target.name == 'paginas'){
          state[event.target.name] = parseInt(state[event.target.name]);
        }
        console.log('handleChangue', event, state);
        this.setState(state);
      }    
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>


            <input 
                placeholder="Nombre Libro" 
                type="text" 
                value={this.state.nombreLibro} 
                name="nombreLibro"
                onChange={this.handleChange} 
            />
            {this.validator.message('nombreLibro', this.state.nombreLibro, 'required')}

            <input 
                placeholder="ISBN" 
                type="text" 
                value={this.state.ISBN} 
                name="ISBN"
                onChange={this.handleChange} 
            />
            {this.validator.message('ISBN', this.state.ISBN, 'required')}

            <input 
                placeholder="Autor" 
                type="text" 
                value={this.state.autor}
                name="autor" 
                onChange={this.handleChange} 
            />
            {this.validator.message('autor', this.state.autor, 'required')}

            <input 
                placeholder="Editorial" 
                type="text" 
                value={this.state.editorial} 
                name="editorial" 
                onChange={this.handleChange}
            />
            {this.validator.message('editorial', this.state.editorial, 'required')}

            <input 
                placeholder="Numero de Paginas" 
                type="number" 
                value={this.state.paginas} 
                name="paginas" 
                onChange={this.handleChange} 
            />
            {this.validator.message('paginas', this.state.paginas, 'required')}


            <input className="in" type="submit" value="Submit" />
          </form>
        );
      }

}
