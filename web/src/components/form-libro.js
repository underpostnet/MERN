import { Component } from "react";
import SimpleReactValidator from 'simple-react-validator';

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

        this.validator = new SimpleReactValidator();

      }
    
      handleSubmit(event) {
        console.log('handleSubmit', event);
        console.log(JSON.stringify(this.state, null, 4));
        event.preventDefault();

        if (this.validator.allValid()) {
           
          console.log('campos validos');

        } else {
          this.validator.showMessages();
          // rerender to show messages for the first time
          // you can use the autoForceUpdate option to do this automatically`
          this.forceUpdate();
        }

      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>


            <input 
                placeholder="Nombre Libro" 
                type="text" 
                value={this.state.nombreLibro} 
                onChange={e => this.setState({ nombreLibro: e.target.value })} 
            />
            {this.validator.message('nombreLibro', this.state.nombreLibro, 'required')}

            <input 
                placeholder="ISBN" 
                type="text" 
                value={this.state.ISBN} 
                onChange={e => this.setState({ ISBN: e.target.value })} 
            />
            {this.validator.message('ISBN', this.state.ISBN, 'required')}

            <input 
                placeholder="Autor" 
                type="text" 
                value={this.state.autor} 
                onChange={e => this.setState({ autor: e.target.value })} 
            />
            {this.validator.message('autor', this.state.autor, 'required')}

            <input 
                placeholder="Editorial" 
                type="text" 
                value={this.state.editorial} 
                onChange={e => this.setState({ editorial: e.target.value })} 
            />
            {this.validator.message('editorial', this.state.editorial, 'required')}

            <input 
                placeholder="Numero de Paginas" 
                type="number" 
                value={this.state.paginas} 
                onChange={e => this.setState({ paginas: parseInt(e.target.value) })} 
            />
            {this.validator.message('paginas', this.state.paginas, 'required')}


            <input className="in" type="submit" value="Submit" />
          </form>
        );
      }

}
