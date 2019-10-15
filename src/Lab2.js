import React from 'react'

class NumberForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {a:0 , b:0};
    }

    NumberAChanged = (event) =>{
        this.setState({value: event.target.value})
        console.log('Value chnage a: ' + event.target.value)
    }
    NumberBChanged = (event) =>{
        this.setState({value: event.target.value})
        console.log('Value chnage b: ' + event.target.value)
    }
    
    render() {
        return (
        <form >
            <input type="number"   onChange={this.NumberAChanged} />
            <input type="number"  onChange={this.NumberBChanged}/>
        </form>
        );
    }
}   
export default NumberForm