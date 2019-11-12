import React, {Component} from 'react';

import FormBar from './FormBar'

class FromControl extends Component {
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    render(){
        const { values2, handleChange } = this.props;
        return(
            <div className="FormBar">
                <FormBar title="Control de Display"/>
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
                                                            <label className="badge badge-pill badge-danger">Dirección de Estante</label>
                                                            <select 
                                                                type="text" 
                                                                className="form-control" 
                                                                placeholder="Estante"
                                                                name="Address"
                                                                onChange={handleChange('Address')}
                                                            >
                                                                fsdfa
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="badge badge-pill badge-danger">Producto</label>
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            placeholder="Producto"
                                                            name="Products"
                                                            onChange={handleChange('Product')}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 pr-1">
                                                    <div className="form-group">
                                                        <label className="badge badge-pill badge-danger">Precio</label>
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            placeholder="$..."
                                                            name="Price"
                                                            onChange={handleChange('Price')}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 pl-1">
                                                    <div className="form-group">
                                                        <label className="badge badge-pill badge-danger">Descuento</label>
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            placeholder="0"
                                                            name="Descount"
                                                            onChange={handleChange('Descount')}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 pr-1">
                                                    <div className="form-group">
                                                        <label className="badge badge-pill badge-danger">Cantidad</label>
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            placeholder="cantidad"
                                                            name="Quantity"
                                                            onChange={handleChange('Quantity')}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 px-1">
                                                    <div className="form-group">
                                                        <label className="badge badge-pill badge-danger">Fecha de Caducidad</label>
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            placeholder="11/11/2019"
                                                            name="Expiration"
                                                            onChange={handleChange('Expiration')}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 pl-1">
                                                    <div className="form-group">
                                                        <label className="badge badge-pill badge-danger">Código de Barras</label>
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            placeholder="9832003"
                                                            name="Id_product"
                                                            onChange={handleChange('Id_product')}
                                                        />
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
                                                            Actualizar
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <button 
                                                            className="btn btn-info btn-fill btn-block"
                                                            onClick={this.back}
                                                        >
                                                            Buscar
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <button 
                                                            className="btn btn-info btn-fill btn-block"
                                                            onClick={this.continue}
                                                        >
                                                            Visualizar
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

export default FromControl;