import React from 'react'

class NumberForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          a:"" , 
          b:"" ,
          x:[]
        };
      this.counter = 0;
      this.handleNumberAChanged = this.handleNumberAChanged.bind(this)
      this.handleNumberBChanged = this.handleNumberBChanged.bind(this)
      this.handleProcess = this.handleProcess.bind(this);
    }
    handleNumberAChanged = (event) =>{
        this.setState({[event.target.name]: event.target.value})
        let tmpa = parseInt(event.target.value,10)
        let tmpb = parseInt(this.state.b,10) 
        if(tmpa>0 && tmpa<tmpb)
        {
            this.setState({x:this.generateArray(tmpb-tmpa+1,tmpa)})  
        }
        else
        {
            this.setState({x:[]})
        }
        console.log('Value chnage ' + event.target.name + ': ' + event.target.value)
    }
    handleNumberBChanged = (event) =>{
        this.setState({[event.target.name]: event.target.value})
        let tmpa = parseInt(this.state.a,10)
        let tmpb = parseInt(event.target.value,10) 
        if(tmpa>0 && tmpa<tmpb)
        {
            this.setState({x:this.generateArray(tmpb-tmpa+1,tmpa)})  
        }
        else
        {
            this.setState({x:[]})
        }
        console.log('Value chnage ' + event.target.name + ': ' + event.target.value)
    }
    handleProcess = (event) =>{
        event.preventDefault();        
        this.setState({x: this.result(this.state.x)})
    }
    generateArray = (n,p) =>Array.from(Array(n), (v,index)=>index+p);
    result =(numbers)=> numbers.map(number => Math.sqrt(number));
       
    render() { 
        this.counter++;
        return (               
        <form >
            {console.time("render - " + this.counter +" - ")}
            <input type="number" name="a" value={this.state.a} placeholder="0" onChange={this.handleNumberAChanged}/>
            <input type="number" name="b" value={this.state.b} placeholder="0" onChange={this.handleNumberBChanged}/>
            <h1>{this.state.x.toString()}</h1>
            {console.timeEnd("render - " + this.counter +" - ")}
            <button onClick={this.handleProcess}>Process Array</button>
        </form>        
        )               
    }    
}   
export default NumberForm