import React, {Component} from 'react';

const Sensor = props => {
    return(
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    {
                        props.Sensor === true &&
                            <div className="col-sm-12">
                                <label className="badge badge-pill badge-success"><h6>Sensor - ON</h6></label>
                            </div>
                    }
                    {
                        props.Sensor === false &&
                        <div className="col-sm-12">
                            <label className="badge badge-pill badge-danger"><h6>Sensor - OFF</h6></label>
                        </div>
                    }
                </div>
            </div>
        </div>     
    )
}
export default Sensor;