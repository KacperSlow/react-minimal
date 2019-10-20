import React from 'react'

class NumberForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          a:"" , 
          b:"" 
        };
    }

    handleNumberChanged = (event) =>{
        this.setState({[event.target.name]: event.target.value})        
        console.log('Value chnage ' + event.target.name + ': ' + event.target.value)
    }
    render() {
        return (               
        <form >
            <input type="number" name="a" value={this.state.a} placeholder="0" onChange={this.handleNumberChanged} />
            <input type="number" name="b" value={this.state.b} placeholder="0" onChange={this.handleNumberChanged}/> 
        </form>
        )
    }
}   
export default NumberForm