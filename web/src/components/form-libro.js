import { Component } from "react";
import SimpleReactValidator from 'simple-react-validator';

export default class FormLibro extends Component {
    
    constructor(props) {
        super(props);
        this.state = {nombreLibro: ''};
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
   
      handleSubmit(event) {
        console.log('handleSubmit', event);
        console.log('nombreLibro', this.state.nombreLibro);
        event.preventDefault();
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


            <input type="submit" value="Submit" />
          </form>
        );
      }

}
