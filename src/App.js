import React from 'react';
import './App.css';
// import store from './store'
// import {Provider} from 'react-redux'

const data = [
  {
    name: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    name: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    name: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    name: "Commodore 64",
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
]

class App extends React.Component {
 
  updateSelection= (event) => {
    const eventValue = event.target.value
    this.setState({event: event});
    console.log(eventValue)
  
  }
  
    render() {
      return (
        <div className="model">
  
          <select onChange={this.updateSelection}>
            <option value=''>--pick a model</option>
            { Object.keys(data).map(model => 
            <option value={model.name}>{'${data[model].name} (${data[model].year}) '}</option>)}
          </select>
        </div>
      );
    }
  }
  

  export default App;