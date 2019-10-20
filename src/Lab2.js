import React from 'react'

class NumberForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          a:"" , 
          b:"" ,
          x:[]
        };
      this.handleNumberChanged = this.handleNumberChanged.bind(this)
    }

    handleNumberChanged = (event) =>{
        this.setState({[event.target.name]: event.target.value})        
        console.log('Value chnage ' + event.target.name + ': ' + event.target.value)
    }
    generateArray = (n,p) =>Array.from(Array(n), (v,index)=>index+p);
    
    ArrayFunction =() =>{
        let tmpa = parseInt(this.state.a,10)
        let tmpb = parseInt(this.state.b,10) 
        if(tmpa>0 && tmpa<tmpb)
        {
            const w = this.generateArray(tmpb-tmpa+1,tmpa)
            return w;
        }
        else
        {
            return [];
        }
    }
    render() {
        let array = this.ArrayFunction()
        return (               
        <form >
            <input type="number" name="a" value={this.state.a} placeholder="0" onChange={this.handleNumberChanged} />
            <input type="number" name="b" value={this.state.b} placeholder="0" onChange={this.handleNumberChanged}/>
            <h1>{array}</h1>
        </form>
        )
    }
}   
export default NumberForm