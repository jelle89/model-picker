import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { addModel } from './actions/addmodel'
import ModelDetails from './components/ModelDetails'


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
  state = {}

  updateSelection = (event) => {
   this.setState({event: event.target.value});
  return
  }

  eventHandler = () => {
    const model = {
      name: this.state.event, ...data[this.state.event]
    }
    this.props.addModel(model)
    console.log(model)
  }

  render() {
   
    return (
     <div className="model">
            <ModelDetails bla = {this.props.addModel}/>
            <select onChange={this.updateSelection}>
              <option value=''>--pick a model</option>
              { Object.keys(data).map(model => 
              <option value={model}>{`${data[model].name} (${data[model].year}) `}</option>)}
            </select>

            <button onClick={this.eventHandler}>Add</button>

     </div>
     
           );
      }
}

const mapStateToProps = (state) => {
 
  return {
    addModel: state.addModel
  }
 
}

const mapDispatchToProps = {
  addModel
}


export default connect(mapStateToProps, mapDispatchToProps)(App)