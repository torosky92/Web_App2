import React, {Component} from 'react';

// Imagens
import logo from '../img/Logo-big.png';

class FormBar extends Component {
    render(){
        return(
            <nav className="navbar-dark bg-dark">
                <div className="row">
                    <div className="col-md-12">
                        <img src={logo} href="" className="App-logo" alt="logo" />
                    </div>
                    <div className="col-md-12">
                        <h1 className="text-white">{this.props.title}</h1>
                    </div>
                </div>
            </nav>
        )};
    
}

export default FormBar;