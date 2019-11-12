import React, {Component} from 'react';

// Skins
import './components/css/App.css';

// Forms
import FromShow from './components/js/Form_Show'
import FromControl from './components/js/Form_Control'
import FormBusqueda from './components/js/Form_Busqueda'
import FormLogin from './components/js/Form_Login'

class App extends Component {
  state={
    step: 1,
    username:'',
    password:'',
    Address:'',
    Product:'Producto',
    Id_product:1,
    Price:0,
    Quantity:0,
    Expiration:'',
    Discount:0,
    Description:'',
    Sensor:false,
    error:null
  };

  // Proceed to next step
  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1
    });
  }

  // Proceed to prev step
  prevStep = () => {
    const {step} = this.state;
    this.setState({
      step: step - 1
    });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({[input]:e.target.value});
    console.log(this.state);
  }

  

  render(){
    const {step} = this.state;
    const {username, password} = this.state;
    const { Address, Product, Id_product, Price, Quantity, Expiration, Discount, Description } = this.state;
    const { Sensor} = this.state;
    
    const values = {username, password};
    const values2 = {Address, Product, Id_product, Price, Quantity, Expiration, Discount, Description};
    const values3 = {Sensor};
    switch(step){
      case 1:
        return(
          <FormLogin
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values = {values}
            values3 = {values3}
          />
        )
      case 2:
        return(
          <FormBusqueda
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values2 = {values2}
          />
        )
      case 3:
        return(
          <FromControl
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values2 = {values2}
          />
        )
      case 4:
          return(
            <FromShow
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values2 = {values2}
              values3 = {values3}
            />
          )
    }
  }
}

export default App;
