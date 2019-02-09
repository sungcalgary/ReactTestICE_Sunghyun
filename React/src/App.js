import React, { Component } from 'react';
import BitcoinTable from './components/BitcoinTable'
/*
Sunghyun Lee
*/
class App extends Component
{
  constructor()
  {
    super()

    let twoWeeksAgo = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000);
    let now = new Date();

    this.state={
      bitcoin:{},
      currency: 'USD',
      start: new Date(twoWeeksAgo.getTime() - (twoWeeksAgo.getTimezoneOffset() * 60000 ))
            .toISOString()
            .split("T")[0],
      end: new Date(now.getTime() - (now.getTimezoneOffset() * 60000 ))
            .toISOString()
            .split("T")[0]
    }
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(event){
    if(event.target.type ==="date"){
      let mydate = event.target.value
      if (event.target.name==="start"){
        this.setState({
          start: mydate
        })
      }
      else{
        this.setState({
          end: mydate
        })
      }
    }
    else{
      this.setState({
        currency: event.target.value
      })
    }
    
    
  }
  render(){
    return (
      <div className="container">
        <h3>Currency: {this.state.currency}</h3>
        
        <BitcoinTable currency={this.state.currency} start={this.state.start} end={this.state.end}  />
        <div className="row">
          <div className="col-lg-4">Start Date: <input className="form-control" type="date" onChange={this.handleChange} value={this.state.start} name ="start"/></div>
          <div className="col-lg-4">End Date: <input className="form-control" type="date" onChange={this.handleChange} value={this.state.end} name ="end" /></div>
          <div className="col-lg-4">
          Currency: 
            <select className="form-control" onChange = {this.handleChange} value={this.state.currency}>
              <option value="USD">USD</option>
              <option value="CAD">CAD</option>
              <option value="MXN">MXN</option>
            </select>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
