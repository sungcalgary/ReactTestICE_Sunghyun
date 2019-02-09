import React, { Component } from 'react';

class BitcoinTable extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      currency: this.props.currency,
      start: this.props.start,
      end: this.props.end,
      bitcoin:null
    }
  this.fetchBitcoinTable() 
  }

  componentDidMount()
  {
    this.fetchBitcoinTable()
  }
  
  componentWillReceiveProps(nextProps){
    this.setState({
      currency: nextProps.currency,
      start: nextProps.start,  
      end: nextProps.end,
      bitcoin:null
    })
  }


  fetchBitcoinTable(){
    let http = "https://api.coindesk.com/v1/bpi/historical/close.json?start="+this.state.start+"&end="+this.state.end +"&currency="+this.state.currency;
    fetch(http)
    .then(response=>response.json())
    .then(json=>{
      this.setState({
        bitcoin: json.bpi
      })
    }) 
  }
  render(){
    if (this.state.bitcoin==null){
      this.fetchBitcoinTable()
      return (<h4>Loading...</h4>)
    }
    else{
      console.log(this.state.bitcoin)
      
      return(
        <table className="table table-sm"> 
          <tr>
            <th>Date</th>
            <th>Price</th> 
          </tr>
          {
            Object.keys(this.state.bitcoin ).map((key, index) => (
              <tr id={index}>
                <td>{key}</td> 
                <td>{this.state.bitcoin[key]}</td>
              </tr>
            ))
          }
        </table>
        
      );
    }
    
  }
}

export default BitcoinTable;