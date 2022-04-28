import { Component } from "react";
import SimpleReactValidator from 'simple-react-validator';

export default class FormLibro extends Component {
    
    constructor(props) {
        super(props);
        this.state = {nombreLibro: ''};
    
        this.handleSubmit = this.handleSubmit.bind(this);

        this.validator = new SimpleReactValidator();

      }
    
   
      handleSubmit(event) {
        console.log('handleSubmit', event);
        console.log('nombreLibro', this.state.nombreLibro);
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


            <input className="in" type="submit" value="Submit" />
          </form>
        );
      }

}
