import React, {Component} from 'react';

import FormBar from './FormBar'


class FormBusqueda extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    render(){
        const { values2, handleChange } = this.props;
        return(
            <div className="FormBar">
                <FormBar title="Busqueda de Displays"/>
                <div className="center">
                    <div className="container-fluid">
                        <div className="row mt-4">
                            <div className="col-md-12">
                                <div className="card mt-12">
                                    <div className="card-header">
                                        <h3>Control Productos</h3>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="badge badge-pill badge-danger">Producto</label>
                                                        <input 
                                                            type="text"
                                                            name="Producto"
                                                            onChange={this.handleInput}
                                                            className="form-control"
                                                            defaultValue={values2.Producto}
                                                            onChange={handleChange('Product')}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="badge badge-pill badge-danger">Ubicación en Estantes</label>
                                                        <select 
                                                            type="text"
                                                            name="Ubicacion"
                                                            onChange={this.handleInput} 
                                                            className="form-control" 
                                                            placeholder="address"
                                                            onChange={handleChange('address')}
                                                        >
                                                            Falta poner buscar
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <button 
                                                            className="btn btn-info btn-fill btn-block"
                                                            //onClick={this.continue}
                                                        >
                                                            Buscar Display
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <button 
                                                            className="btn btn-info btn-fill btn-block"
                                                            onClick={this.continue}
                                                        >
                                                            Control Display
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            
        )
    }
}

export default FormBusqueda;