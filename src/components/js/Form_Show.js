import React, {Component} from 'react';

import FormBar from './FormBar'

// Controls
import Sensor from '../controllers/Sensor'

class FromShow extends Component {
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values2, values3, handleChange } = this.props;
        return(
            <div className="FormBar">
                <FormBar title="Visualizacion de Display"/>
                <div className="center">
                    <div className="container-fluid">
                        <div className="row mt-4">
                        <div className="col-md-12">
                                <div className="card mt-12">
                                    <div className="card-header">
                                        <h3>Visualizacion</h3>
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
                                            </div>
                                            <Sensor {...values3}/>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <button 
                                                            className="btn btn-info btn-fill btn-block"
                                                            onClick={this.back}
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

export default FromShow;