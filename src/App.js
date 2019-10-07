import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

function sort(arr, key){ //giving a key to know what we're sorting it based off
  for(let i =0; i<arr.length; i++){
    for(let j =0; j<arr.length-i-1; j++){
      if(arr[j][key] < arr[j+1][key]){    //using key basically saying we're going off of count.
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }    
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  //where we store all of our inventory. 
      inventory : [
        {product: 'monitors', count: 0},
        {product: 'mice', count: 0},
        {product: 'chairs', count: 0},
        {product: 'hdmi-dvi connectors', count: 0},
        {product:'mini dp connectors', count: 0}
      ]
    }
  }
  increment(i, amt) //increase method
  {
    console.log(i);
    let temp = [...this.state.inventory]; //"..."syntax -allows to make a mutated version of "this.state"
    temp[i].count += amt;   //we change the amount of temp
    sort(temp, 'count');    //then we sort it 
    this.setState({inventory:temp}); //then we put it back in setState

  }
  
  render(){
    return (
      <>
      <h1>Inventory</h1>
      <table border="1">
        <tbody>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Adjust</th>
        </tr>

        {
          this.state.inventory.map( (item, i) => //looping through inventory and getting the type out of it
          <tr key={i}>
            <td>{item.product}</td>
            <td>{item.count}</td>
            <td>
              {/* this onClick method run the "increment method" */}
              <button onClick={this.increment.bind(this, i, 1)}>+</button> 
              <button onClick ={this.increment.bind(this, i, -1)}>-</button>
            </td>
            
          </tr>
          )
        }
        </tbody>
      </table>
      
      
      </>
    );
  }
}

export default App;
