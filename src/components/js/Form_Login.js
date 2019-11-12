import React, {Component} from 'react';
import '../css/App.css';

// Imagens
import logo from '../img/Logo-big.png';
import logo2 from '../img/default-avatar.png';

// Controls
import Userinf from '../controllers/Userinf'


import {Usuarios} from '../json/user.json'

export class FormLogin extends Component {
  getUser = e =>{
    const { values } = this.props;
    const usernameValue = values.username;
    const passwordValue = values.password;
    var correct=false;
    this.setState({error:null});
    for (var i = 0; i < Usuarios.length; i++){
      if(Usuarios[i].user===usernameValue){
        if(Usuarios[i].password===passwordValue){
          this.props.nextStep();
        }
      }
    }
    if(!correct){
      this.setState({error:true});
    }
    e.preventDefault();
  }

  render(){
    const { handleChange } = this.props;
    return(
      <div className="App">
        <div className="row mt-4">
          <div className="col-md-4">
            <img src={logo} href="" className="App-logo" alt="logo" />
          </div>
            <div className="row col-md-12 mt-4">
              <div className="modal-dialog text-center">
                <div className="col-sm-12 main-section">
                  <div className="modal-content">
                    <form>
                      <div className="col-12 user-img">
                        <img src={logo2} href="" className="App-logo2" alt="logo2" />
                      </div>
                      <div className="card-header">
                          <h3>Login</h3>
                      </div>
                      <div className="form-group">
                          <label className="badge badge-pill badge-danger">Usuario</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            autoFocus
                            placeholder="Nombre de usuario" 
                            name="username"
                            onChange={handleChange('username')}
                          />
                      </div>
                      <div className="form-group">
                        <label className="badge badge-pill badge-danger">Contraseña</label>
                        <input 
                          type="password" 
                          className="form-control" 
                          placeholder="Contrasena" 
                          name="password"
                          onChange={handleChange('password')}
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                              <button 
                                  className="btn btn-info btn-fill btn-block"
                                  onClick={this.getUser}
                              >
                                  Sign in
                              </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row col-md-12">
              <Userinf {...this.state}/>
            </div>
        </div>
      </div>
    )}
}

export default FormLogin;